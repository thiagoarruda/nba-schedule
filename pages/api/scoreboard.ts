import type { NextApiRequest, NextApiResponse } from 'next'
import { Game, TeamData } from '../../data/Schedule'
import dayjs from 'dayjs';
import { Scoreboard } from '../../data/Scoreboard';

const NBA_SCOREBOARD_URL = 'https://cdn.nba.com/static/json/liveData/scoreboard/todaysScoreboard_00.json';
const UPDATE_INTERVAL_MINUTES = 5;


export default async function handler(req: NextApiRequest, res: NextApiResponse<Scoreboard[]>) {
    const scoreboard = await getTodaysScoreboard();

    res.status(200).json(scoreboard);
}

async function getTodaysScoreboard(): Promise<Scoreboard[]> {
    const resp = await fetch(NBA_SCOREBOARD_URL);
    if (resp.status !== 200) {
        // TODO: handle error
        return [];
    }

    const data: any = await resp.json();

    return data.scoreboard.games.map((game: any) => {
        return {
            gameId: game.gameId,
            status: game.gameStatus,
            statusText: game.gameStatusText,
            homeScore: game.homeTeam.score,
            awayScore: game.awayTeam.score
        }
    });
}

