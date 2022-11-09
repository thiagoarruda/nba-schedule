import type { NextApiRequest, NextApiResponse } from 'next'
import { Game, TeamData } from '../../data/Schedule'
import dayjs from 'dayjs';

const NBA_SCHEDULE_URL = 'https://cdn.nba.com/static/json/staticData/scheduleLeagueV2_11.json';
const UPDATE_INTERVAL_MINUTES = 5;

type GameSchedule = { [key: string]: Game[] };

let schedule: GameSchedule;
let lastUpdated: Date = new Date(0);

export default async function handler(req: NextApiRequest, res: NextApiResponse<GameSchedule>) {
    if (dayjs().diff(lastUpdated, 'minute') > UPDATE_INTERVAL_MINUTES) {
        schedule = await updateNBASchedule();
        lastUpdated = new Date();
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
        const daySchedule: Game[] = [];

        date.games.forEach((game: any) => {
            if (game.broadcasters.intlTvBroadcasters.length) {
                const channels = game.broadcasters.intlTvBroadcasters.map((bc: any) => bc.broadcasterDisplay);
                const homeTeam = getTeamData(game.homeTeam);
                const awayTeam = getTeamData(game.awayTeam);
                const dateTimeUTC = game.gameDateTimeUTC;
                const status = game.gameStatus;
                const statusText = game.gameStatusText;
                daySchedule.push({ homeTeam, awayTeam, channels, dateTimeUTC, status, statusText });
            }
        })

        if (daySchedule.length) {
            schedule[formattedDate] = daySchedule;
        }
    });

    return schedule;
}

function getTeamData(rawTeamData: any): TeamData {
    return {
        name: `${rawTeamData.teamCity} ${rawTeamData.teamName}`,
        wins: rawTeamData.wins,
        losses: rawTeamData.losses,
        score: rawTeamData.score,
    }
}

