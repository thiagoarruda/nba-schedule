import dayjs from 'dayjs'
import { Scoreboard } from './Scoreboard';

export interface Game {
    gameId: string;
    homeTeam: TeamData;
    awayTeam: TeamData;
    channels: string[];
    dateTimeUTC: string;
    status: GameStatus;
    statusText: string;
}

export interface TeamData {
    name: string;
    wins: number;
    losses: number;
    score: number;
}

export type GameSchedule = { [key: string]: Game[] };

export enum GameStatus {
    SCHEDULED = 1,
    IN_PROGRESS = 2,
    FINISHED = 3
}

export class Schedule {
    private static schedule: GameSchedule = {}

    public static async downloadSchedule(): Promise<void> {
        const res = await fetch(`/api/schedule`);
        const provisionalSchedule: GameSchedule = await res.json();
        const dateToday = this.formatDate(new Date());
        const gamesToday = provisionalSchedule[dateToday];
        if (gamesToday?.length) {
            await this.updateTodaysGames(gamesToday);            
        }
        this.schedule = provisionalSchedule;
    }

    private static async updateTodaysGames(games: Game[]): Promise<void> {
        const scoreboard: Scoreboard[] = await (await fetch(`/api/scoreboard`)).json();

        scoreboard.forEach(sb => {
            const game = games.find((game) => game.gameId === sb.gameId);

            if (game) {
                game.homeTeam.score = sb.homeScore;
                game.awayTeam.score = sb.awayScore;
                game.status = sb.status;
                game.statusText = sb.statusText;
            }
        })
    }

    public static getDaySchedule(date: Date): Game[] {
        return this.schedule[this.formatDate(date)];
    }

    public static getLocalGameTime(dateString: string): string {
        return dayjs(new Date(dateString)).format("HH:mm");
    }

    private static formatDate(date: Date): string {
        return dayjs(date).format('YYYY-MM-DD');
    }
}