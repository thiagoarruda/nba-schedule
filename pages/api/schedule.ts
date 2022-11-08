import type { NextApiRequest, NextApiResponse } from 'next'
import { Game } from '../../data/Schedule'
import dayjs from 'dayjs';

const NBA_SCHEDULE_URL = 'https://cdn.nba.com/static/json/staticData/scheduleLeagueV2_11.json';
const UPDATE_INTERVAL_MINUTES = 5;

type GameSchedule = { [key: string]: Game[] };

let schedule: GameSchedule;
let lastUpdated: Date = new Date(0);

export default async function handler(req: NextApiRequest, res: NextApiResponse<GameSchedule>) {
    if (dayjs().diff(lastUpdated, 'minute') > UPDATE_INTERVAL_MINUTES) {
        schedule = await updateNBASchedule();
        console.log("Fetching updated data.");
        lastUpdated = new Date();
    } else {
        console.log("Using cached data.");
    }
    res.status(200).json(schedule);
}

async function updateNBASchedule(): Promise<GameSchedule> {
    const schedule: GameSchedule = {};

    const resp = await fetch(NBA_SCHEDULE_URL);
    if (resp.status !== 200) {
        // TODO: handle error
        return {};
    }

    const data: any = await resp.json();

    data.leagueSchedule.gameDates.forEach((date: any) => {
        const formattedDate = dayjs(date.gameDate).format('YYYY-MM-DD');
        const daySchedule: any[] = [];

        date.games.forEach((game: any) => {
            if (game.broadcasters.intlTvBroadcasters.length) {
                const channels = game.broadcasters.intlTvBroadcasters.map((bc: any) => bc.broadcasterDisplay);
                const homeTeam = `${game.homeTeam.teamCity} ${game.homeTeam.teamName}`
                const awayTeam = `${game.awayTeam.teamCity} ${game.awayTeam.teamName}`
                const time = dayjs(new Date(game.gameDateTimeUTC)).format("HH:mm");
                daySchedule.push({ homeTeam, awayTeam, channels, time });
            }
        })

        if (daySchedule.length) {
            schedule[formattedDate] = daySchedule;
        }
    });

    return schedule;
}

