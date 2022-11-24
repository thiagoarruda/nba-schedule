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
        this.schedule = await res.json();
    }

    public static async updateTodaysGames(): Promise<void> {
        const gamesToday = this.getTodaysGames();
        if (gamesToday.length) {
            const scoreboard: Scoreboard[] = await (await fetch(`/api/scoreboard`)).json();

            scoreboard.forEach(sb => {
                const game = gamesToday.find((game) => game.gameId === sb.gameId);

                if (game) {
                    game.homeTeam.score = sb.homeScore;
                    game.awayTeam.score = sb.awayScore;
                    game.status = sb.status;
                    game.statusText = sb.statusText;
                }
            })
        }
    }

    public static getFullSchedule(): GameSchedule {
        return this.schedule;
    }

    public static getDaySchedule(date: Date): Game[] {
        return this.schedule[this.formatDate(date)] ?? [];
    }

    public static getTodaysGames(): Game[] {
        return this.schedule[this.formatDate(this.getInProgressGamesDate())] ?? [];
    }

    public static getInProgressGamesDate(): Date {
        const today = new Date();

        if (dayjs(today).hour() < 4) {
            return dayjs().subtract(1, 'day').toDate();
        }

        return today;
    }

    public static getLocalGameTime(dateString: string): string {
        return dayjs(new Date(dateString)).format("HH:mm");
    }

    public static formatDate(date: Date): string {
        return dayjs(date).format('YYYY-MM-DD');
    }
}