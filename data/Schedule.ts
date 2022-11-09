import dayjs from 'dayjs'

export interface Game {
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

export enum GameStatus {
    SCHEDULED = 1,
    IN_PROGRESS = 2,
    FINISHED = 3
}

export class Schedule {
    private static schedule: { [key: string]: Game[] } = {}

    public static async downloadSchedule(): Promise<void> {
        const res = await fetch(`/api/schedule`);
        this.schedule = await res.json();
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