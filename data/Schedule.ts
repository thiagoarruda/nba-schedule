import dayjs from 'dayjs'

export interface Game {
    homeTeam: string;
    awayTeam: string;
    channels: string[];
    time: string;
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

    private static formatDate(date: Date): string {
        return dayjs(date).format('YYYY-MM-DD')
    }    
}