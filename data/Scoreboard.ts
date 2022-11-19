import { GameStatus } from "./Schedule";

export interface Scoreboard {
    gameId: string;
    status: GameStatus;
    statusText: string;
    homeScore: number;
    awayScore: number;
}