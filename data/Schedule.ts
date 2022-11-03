import dayjs from 'dayjs'

export interface Game {
    homeTeam: string;
    awayTeam: string;
    channels: string[];
    time: string;
}

export class Schedule {
    public static getSchedule(date: Date): Game[] {
        return this.schedule[this.formatDate(date)];
    }

    private static formatDate(date: Date): string {
        return dayjs(date).format('YYYY-MM-DD')
    }

    private static schedule: { [key: string]: Game[] } = {
        '2022-10-18': [
            {
                homeTeam: 'Boston Celtics',
                awayTeam: 'Philadelphia 76ers',
                channels: ['Amazon'],
                time: '20:30'
            },
            {
                homeTeam: 'Golden State Warriors',
                awayTeam: 'Los Angeles Lakers',
                channels: ['Amazon'],
                time: '23:00'
            }
        ],
        '2022-10-19': [
            {
                homeTeam: 'Memphis Grizzlies',
                awayTeam: 'New York Knicks',
                channels: ['ESPN'],
                time: '20:30'
            },
            {
                homeTeam: 'Phoenix Suns',
                awayTeam: 'Dallas Mavericks',
                channels: ['ESPN'],
                time: '23:00'
            }
        ],
        '2022-10-21': [
            {
                homeTeam: 'Miami Heat',
                awayTeam: 'Boston Celtics',
                channels: ['ESPN'],
                time: '20:30'
            },
            {
                homeTeam: 'Golden State Warriors',
                awayTeam: 'Denver Nuggets',
                channels: ['ESPN'],
                time: '23:00'
            }
        ],
        '2022-10-22': [
            {
                homeTeam: 'Chicago Bulls',
                awayTeam: 'Cleveland Cavaliers',
                channels: ['VIVO'],
                time: '21:00'
            },
            {
                homeTeam: 'Dallas Mavericks',
                awayTeam: 'Memphis Grizzlies',
                channels: ['ESPN'],
                time: '21:30'
            }
        ],
        '2022-10-23': [
            {
                homeTeam: 'LA Clippers',
                awayTeam: 'Phoenix Suns',
                channels: ['SporTV', 'TNT Sports', 'Gaules'],
                time: '23:00'
            }
        ],
        '2022-10-24': [
            {
                homeTeam: 'Chicago Bulls',
                awayTeam: 'Boston Celtics',
                channels: ['VIVO'],
                time: '21:00'
            },
            {
                homeTeam: 'Portland Trail Blazers',
                awayTeam: 'Denver Nuggets',
                channels: ['SporTV', 'TV Band', 'TNT Sports', 'Gaules'],
                time: '23:00'
            }
        ],
        '2022-10-25': [
            {
                homeTeam: 'New Orleans Pelicans',
                awayTeam: 'Dallas Mavericks',
                channels: ['Amazon'],
                time: '20:30'
            },
            {
                homeTeam: 'Phoenix Suns',
                awayTeam: 'Golden State Warriors',
                channels: ['Amazon'],
                time: '23:00'
            }
        ],
        '2022-10-26': [
            {
                homeTeam: 'Milwaukee Bucks',
                awayTeam: 'Brooklyn Nets',
                channels: ['ESPN'],
                time: '20:30'
            },
            {
                homeTeam: 'Denver Nuggets',
                awayTeam: 'Los Angeles Lakers',
                channels: ['ESPN'],
                time: '23:00'
            }
        ],
        '2022-10-28': [
            {
                homeTeam: 'Washington Wizards',
                awayTeam: 'Indiana Pacers',
                channels: ['ESPN'],
                time: '20:30'
            },
            {
                homeTeam: 'Phoenix Suns',
                awayTeam: 'New Orleans Pelicans',
                channels: ['ESPN'],
                time: '23:00'
            }
        ],
        '2022-10-29': [
            {
                homeTeam: 'Charlotte Hornets',
                awayTeam: 'Golden State Warriors',
                channels: ['VIVO'],
                time: '20:00'
            },
            {
                homeTeam: 'Utah Jazz',
                awayTeam: 'Memphis Grizzlies',
                channels: ['ESPN'],
                time: '22:00'
            }
        ],
        '2022-10-31': [
            {
                homeTeam: 'Washington Wizards',
                awayTeam: 'Philadelphia 76ers',
                channels: ['VIVO'],
                time: '20:00'
            },
            {
                homeTeam: 'LA Clippers',
                awayTeam: 'Houston Rockets',
                channels: ['SporTV', 'TV Band', 'TNT Sports', 'Gaules'],
                time: '23:30'
            }
        ],
        '2022-11-01': [
            {
                homeTeam: 'Brooklyn Nets',
                awayTeam: 'Chicago Bulls',
                channels: ['Amazon'],
                time: '20:30'
            },
            {
                homeTeam: 'Phoenix Suns',
                awayTeam: 'Minnesota Timberwolves',
                channels: ['Amazon'],
                time: '23:00'
            }
        ],
        '2022-11-02': [
            {
                homeTeam: 'Cleveland Cavaliers',
                awayTeam: 'Boston Celtics',
                channels: ['ESPN'],
                time: '20:30'
            },
            {
                homeTeam: 'Portland Trail Blazers',
                awayTeam: 'Memphis Grizzlies',
                channels: ['ESPN'],
                time: '23:00'
            }
        ],
        '2022-11-04': [
            {
                homeTeam: 'Boston Celtics',
                awayTeam: 'Chicago Bulls',
                channels: ['ESPN'],
                time: '20:30'
            },
            {
                homeTeam: 'Minnesota Timberwolves',
                awayTeam: 'Milwaukee Bucks',
                channels: ['ESPN'],
                time: '23:00'
            }
        ],
        '2022-11-05': [
            {
                homeTeam: 'New York Knicks',
                awayTeam: 'Boston Celtics',
                channels: ['ESPN'],
                time: '20:30'
            },
            {
                homeTeam: 'Phoenix Suns',
                awayTeam: 'Portland Trail Blazers',
                channels: ['VIVO'],
                time: '23:00'
            }
        ],
        '2022-11-06': [
            {
                homeTeam: 'Los Angeles Lakers',
                awayTeam: 'Cleveland Cavaliers',
                channels: ['SporTV', 'TNT Sports', 'Gaules'],
                time: '17:30'
            }
        ],
        '2022-11-07': [
            {
                homeTeam: 'Miami Heat',
                awayTeam: 'Portland Trail Blazers',
                channels: ['VIVO'],
                time: '22:30'
            },
            {
                homeTeam: 'Golden State Warriors',
                awayTeam: 'Sacramento Kings',
                channels: ['SporTV', 'TV Band', 'TNT Sports', 'Gaules'],
                time: '00:00'
            }
        ],
        '2022-11-09': [
            {
                homeTeam: 'Brooklyn Nets',
                awayTeam: 'New York Knicks',
                channels: ['ESPN'],
                time: '21:30'
            },
            {
                homeTeam: 'LA Clippers',
                awayTeam: 'Los Angeles Lakers',
                channels: ['ESPN'],
                time: '00:00'
            }
        ],
        '2022-11-11': [
            {
                homeTeam: 'Memphis Grizzlies',
                awayTeam: 'Minnesota Timberwolves',
                channels: ['ESPN'],
                time: '23:30'
            }
        ],
        '2022-11-12': [
            {
                homeTeam: 'Detroit Pistons',
                awayTeam: 'Boston Celtics',
                channels: ['Amazon'],
                time: '21:00'
            },
            {
                homeTeam: 'Philadelphia 76ers',
                awayTeam: 'Atlanta Hawks',
                channels: ['ESPN'],
                time: '21:30'
            },
            {
                homeTeam: 'Dallas Mavericks',
                awayTeam: 'Portland Trail Blazers',
                channels: ['Amazon'],
                time: '22:30'
            }
        ],
        '2022-11-13': [
            {
                homeTeam: 'Los Angeles Lakers',
                awayTeam: 'Brooklyn Nets',
                channels: ['SporTV', 'TV Band', 'TNT Sports', 'Gaules'],
                time: '23:30'
            }
        ],
        '2022-11-14': [
            {
                homeTeam: 'Miami Heat',
                awayTeam: 'Phoenix Suns',
                channels: ['VIVO'],
                time: '21:30'
            },
            {
                homeTeam: 'Golden State Warriors',
                awayTeam: 'San Antonio Spurs',
                channels: ['SporTV', 'TV Band', 'TNT Sports', 'Gaules'],
                time: '00:00'
            }
        ],
        '2022-11-15': [
            {
                homeTeam: 'New Orleans Pelicans',
                awayTeam: 'Memphis Grizzlies',
                channels: ['Amazon'],
                time: '21:30'
            },
            {
                homeTeam: 'Sacramento Kings',
                awayTeam: 'Brooklyn Nets',
                channels: ['Amazon'],
                time: '00:00'
            }
        ],
        '2022-11-16': [
            {
                homeTeam: 'Atlanta Hawks',
                awayTeam: 'Boston Celtics',
                channels: ['ESPN'],
                time: '21:30'
            },
            {
                homeTeam: 'Phoenix Suns',
                awayTeam: 'Golden State Warriors',
                channels: ['ESPN'],
                time: '00:00'
            }
        ],
        '2022-11-18': [
            {
                homeTeam: 'Philadelphia 76ers',
                awayTeam: 'Milwaukee Bucks',
                channels: ['ESPN'],
                time: '21:30'
            },
            {
                homeTeam: 'Golden State Warriors',
                awayTeam: 'New York Knicks',
                channels: ['ESPN'],
                time: '00:00'
            }
        ],
        '2022-11-19': [
            {
                homeTeam: 'Portland Trail Blazers',
                awayTeam: 'Utah Jazz',
                channels: ['ESPN'],
                time: '00:00'
            }
        ],
        '2022-11-21': [
            {
                homeTeam: 'Cleveland Cavaliers',
                awayTeam: 'Atlanta Hawks',
                channels: ['VIVO'],
                time: '21:00'
            },
            {
                homeTeam: 'LA Clippers',
                awayTeam: 'Utah Jazz',
                channels: ['SporTV', 'TV Band', 'TNT Sports', 'Gaules'],
                time: '00:30'
            }
        ],
        '2022-11-22': [
            {
                homeTeam: 'Philadelphia 76ers',
                awayTeam: 'Brooklyn Nets',
                channels: ['Amazon'],
                time: '21:30'
            },
            {
                homeTeam: 'Phoenix Suns',
                awayTeam: 'Los Angeles Lakers',
                channels: ['Amazon'],
                time: '00:00'
            }
        ],
        '2022-11-23': [
            {
                homeTeam: 'Boston Celtics',
                awayTeam: 'Dallas Mavericks',
                channels: ['ESPN'],
                time: '21:30'
            },
            {
                homeTeam: 'Golden State Warriors',
                awayTeam: 'LA Clippers',
                channels: ['ESPN'],
                time: '00:00'
            }
        ],
        '2022-11-25': [
            {
                homeTeam: 'Golden State Warriors',
                awayTeam: 'Utah Jazz',
                channels: ['ESPN'],
                time: '00:00'
            }
        ],
        '2022-11-26': [
            {
                homeTeam: 'San Antonio Spurs',
                awayTeam: 'Los Angeles Lakers',
                channels: ['ESPN'],
                time: '22:00'
            }
        ],
        '2022-11-27': [
            {
                homeTeam: 'Milwaukee Bucks',
                awayTeam: 'Dallas Mavericks',
                channels: ['SporTV', 'TNT Sports', 'Gaules'],
                time: '22:00'
            }
        ],
        '2022-11-28': [
            {
                homeTeam: 'Boston Celtics',
                awayTeam: 'Charlotte Hornets',
                channels: ['VIVO'],
                time: '21:30'
            },
            {
                homeTeam: 'Los Angeles Lakers',
                awayTeam: 'Indiana Pacers',
                channels: ['SporTV', 'TV Band', 'TNT Sports', 'Gaules'],
                time: '00:30'
            }
        ],
        '2022-11-29': [
            {
                homeTeam: 'Dallas Mavericks',
                awayTeam: 'Golden State Warriors',
                channels: ['Amazon'],
                time: '21:30'
            },
            {
                homeTeam: 'Portland Trail Blazers',
                awayTeam: 'LA Clippers',
                channels: ['Amazon'],
                time: '00:00'
            }
        ],
        '2022-11-30': [
            {
                homeTeam: 'Phoenix Suns',
                awayTeam: 'Chicago Bulls',
                channels: ['ESPN'],
                time: '23:00'
            }
        ],
        '2022-12-02': [
            {
                homeTeam: 'Milwaukee Bucks',
                awayTeam: 'Los Angeles Lakers',
                channels: ['ESPN'],
                time: '21:30'
            },
            {
                homeTeam: 'Golden State Warriors',
                awayTeam: 'Chicago Bulls',
                channels: ['ESPN'],
                time: '00:00'
            }
        ],
        '2022-12-03': [
            {
                homeTeam: 'Charlotte Hornets',
                awayTeam: 'Milwaukee Bucks',
                channels: ['ESPN'],
                time: '20:00'
            }
        ],
        '2022-12-04': [
            {
                homeTeam: 'Brooklyn Nets',
                awayTeam: 'Boston Celtics',
                channels: ['SporTV', 'TNT Sports', 'Gaules'],
                time: '20:00'
            }
        ],
        '2022-12-05': [
            {
                homeTeam: 'Memphis Grizzlies',
                awayTeam: 'Miami Heat',
                channels: ['VIVO'],
                time: '22:00'
            },
            {
                homeTeam: 'Dallas Mavericks',
                awayTeam: 'Phoenix Suns',
                channels: ['SporTV', 'TV Band', 'TNT Sports', 'Gaules'],
                time: '22:30'
            }
        ],
        '2022-12-06': [
            {
                homeTeam: 'Cleveland Cavaliers',
                awayTeam: 'Los Angeles Lakers',
                channels: ['Amazon'],
                time: '21:30'
            },
            {
                homeTeam: 'Denver Nuggets',
                awayTeam: 'Dallas Mavericks',
                channels: ['Amazon'],
                time: '00:00'
            }
        ],
        '2022-12-07': [
            {
                homeTeam: 'New York Knicks',
                awayTeam: 'Atlanta Hawks',
                channels: ['ESPN'],
                time: '21:30'
            },
            {
                homeTeam: 'Phoenix Suns',
                awayTeam: 'Boston Celtics',
                channels: ['ESPN'],
                time: '00:00'
            }
        ],
        '2022-12-09': [
            {
                homeTeam: 'Philadelphia 76ers',
                awayTeam: 'Los Angeles Lakers',
                channels: ['ESPN'],
                time: '21:30'
            },
            {
                homeTeam: 'Dallas Mavericks',
                awayTeam: 'Milwaukee Bucks',
                channels: ['ESPN'],
                time: '00:00'
            }
        ],
        '2022-12-10': [
            {
                homeTeam: 'Golden State Warriors',
                awayTeam: 'Boston Celtics',
                channels: ['ESPN'],
                time: '22:30'
            }
        ],
        '2022-12-12': [
            {
                homeTeam: 'Memphis Grizzlies',
                awayTeam: 'Atlanta Hawks',
                channels: ['VIVO'],
                time: '22:00'
            },
            {
                homeTeam: 'LA Clippers',
                awayTeam: 'Boston Celtics',
                channels: ['SporTV', 'TV Band', 'TNT Sports', 'Gaules'],
                time: '00:30'
            }
        ],
        '2022-12-13': [
            {
                homeTeam: 'Milwaukee Bucks',
                awayTeam: 'Golden State Warriors',
                channels: ['Amazon'],
                time: '21:30'
            },
            {
                homeTeam: 'Los Angeles Lakers',
                awayTeam: 'Boston Celtics',
                channels: ['Amazon'],
                time: '00:00'
            }
        ],
        '2022-12-14': [
            {
                homeTeam: 'Chicago Bulls',
                awayTeam: 'New York Knicks',
                channels: ['ESPN'],
                time: '21:30'
            },
            {
                homeTeam: 'LA Clippers',
                awayTeam: 'Minnesota Timberwolves',
                channels: ['ESPN'],
                time: '00:00'
            }
        ],
        '2022-12-16': [
            {
                homeTeam: 'Philadelphia 76ers',
                awayTeam: 'Golden State Warriors',
                channels: ['ESPN'],
                time: '21:30'
            },
            {
                homeTeam: 'Los Angeles Lakers',
                awayTeam: 'Denver Nuggets',
                channels: ['ESPN'],
                time: '00:00'
            }
        ],
        '2022-12-17': [
            {
                homeTeam: 'San Antonio Spurs',
                awayTeam: 'Miami Heat',
                channels: ['ESPN'],
                time: '19:00'
            }
        ],
        '2022-12-18': [
            {
                homeTeam: 'Los Angeles Lakers',
                awayTeam: 'Washington Wizards',
                channels: ['SporTV', 'TV Band', 'TNT Sports', 'Gaules'],
                time: '23:30'
            }
        ],
        '2022-12-19': [
            {
                homeTeam: 'New Orleans Pelicans',
                awayTeam: 'Milwaukee Bucks',
                channels: ['VIVO'],
                time: '22:00'
            },
            {
                homeTeam: 'Phoenix Suns',
                awayTeam: 'Los Angeles Lakers',
                channels: ['SporTV', 'TV Band', 'TNT Sports', 'Gaules'],
                time: '23:00'
            }
        ],
        '2022-12-20': [
            {
                homeTeam: 'New York Knicks',
                awayTeam: 'Golden State Warriors',
                channels: ['Amazon'],
                time: '21:30'
            },
            {
                homeTeam: 'Denver Nuggets',
                awayTeam: 'Memphis Grizzlies',
                channels: ['Amazon'],
                time: '00:00'
            }
        ],
        '2022-12-21': [
            {
                homeTeam: 'Brooklyn Nets',
                awayTeam: 'Golden State Warriors',
                channels: ['ESPN'],
                time: '21:30'
            }
        ],
        '2022-12-23': [
            {
                homeTeam: 'Phoenix Suns',
                awayTeam: 'Memphis Grizzlies',
                channels: ['ESPN'],
                time: '00:00'
            }
        ],
        '2022-12-25': [
            {
                homeTeam: 'New York Knicks',
                awayTeam: 'Philadelphia 76ers',
                channels: ['ESPN'],
                time: '14:00'
            },
            {
                homeTeam: 'Dallas Mavericks',
                awayTeam: 'Los Angeles Lakers',
                channels: ['ESPN'],
                time: '16:30'
            },
            {
                homeTeam: 'Boston Celtics',
                awayTeam: 'Milwaukee Bucks',
                channels: ['ESPN'],
                time: '19:00'
            },
            {
                homeTeam: 'Golden State Warriors',
                awayTeam: 'Memphis Grizzlies',
                channels: ['ESPN'],
                time: '22:00'
            },
            {
                homeTeam: 'Denver Nuggets',
                awayTeam: 'Phoenix Suns',
                channels: ['ESPN'],
                time: '00:30'
            }
        ],
        '2022-12-26': [
            {
                homeTeam: 'Cleveland Cavaliers',
                awayTeam: 'Brooklyn Nets',
                channels: ['VIVO'],
                time: '21:00'
            },
            {
                homeTeam: 'Portland Trail Blazers',
                awayTeam: 'Charlotte Hornets',
                channels: ['SporTV', 'TV Band', 'TNT Sports', 'Gaules'],
                time: '00:00'
            }
        ],
        '2022-12-27': [
            {
                homeTeam: 'Toronto Raptors',
                awayTeam: 'LA Clippers',
                channels: ['Amazon'],
                time: '21:30'
            },
            {
                homeTeam: 'Golden State Warriors',
                awayTeam: 'Charlotte Hornets',
                channels: ['Amazon'],
                time: '00:00'
            }
        ],
        '2022-12-28': [
            {
                homeTeam: 'Miami Heat',
                awayTeam: 'Los Angeles Lakers',
                channels: ['ESPN'],
                time: '21:30'
            }
        ],
        '2022-12-30': [
            {
                homeTeam: 'Denver Nuggets',
                awayTeam: 'Miami Heat',
                channels: ['ESPN'],
                time: '23:00'
            }
        ],
        '2023-01-01': [
            {
                homeTeam: 'Denver Nuggets',
                awayTeam: 'Boston Celtics',
                channels: ['SporTV', 'TNT Sports', 'Gaules'],
                time: '22:00'
            }
        ],
        '2023-01-02': [
            {
                homeTeam: 'Philadelphia 76ers',
                awayTeam: 'New Orleans Pelicans',
                channels: ['VIVO'],
                time: '21:00'
            },
            {
                homeTeam: 'Golden State Warriors',
                awayTeam: 'Atlanta Hawks',
                channels: ['SporTV', 'TV Band', 'TNT Sports', 'Gaules'],
                time: '00:00'
            }
        ],
        '2023-01-03': [
            {
                homeTeam: 'Milwaukee Bucks',
                awayTeam: 'Washington Wizards',
                channels: ['Amazon'],
                time: '22:00'
            }
        ],
        '2023-01-04': [
            {
                homeTeam: 'Toronto Raptors',
                awayTeam: 'Milwaukee Bucks',
                channels: ['ESPN'],
                time: '21:30'
            },
            {
                homeTeam: 'Los Angeles Lakers',
                awayTeam: 'Miami Heat',
                channels: ['ESPN'],
                time: '00:00'
            }
        ],
        '2023-01-05': [
            {
                homeTeam: 'Dallas Mavericks',
                awayTeam: 'Boston Celtics',
                channels: ['Amazon'],
                time: '21:30'
            },
            {
                homeTeam: 'Denver Nuggets',
                awayTeam: 'LA Clippers',
                channels: ['Amazon'],
                time: '00:00'
            }
        ],
        '2023-01-06': [
            {
                homeTeam: 'Philadelphia 76ers',
                awayTeam: 'Chicago Bulls',
                channels: ['ESPN'],
                time: '21:30'
            },
            {
                homeTeam: 'Phoenix Suns',
                awayTeam: 'Miami Heat',
                channels: ['ESPN'],
                time: '00:00'
            }
        ],
        '2023-01-07': [
            {
                homeTeam: 'Dallas Mavericks',
                awayTeam: 'New Orleans Pelicans',
                channels: ['Amazon'],
                time: '22:00'
            },
            {
                homeTeam: 'Golden State Warriors',
                awayTeam: 'Orlando Magic',
                channels: ['ESPN'],
                time: '22:30'
            }
        ],
        '2023-01-08': [
            {
                homeTeam: 'LA Clippers',
                awayTeam: 'Atlanta Hawks',
                channels: ['SporTV', 'TV Band', 'TNT Sports', 'Gaules'],
                time: '23:00'
            }
        ],
        '2023-01-09': [
            {
                homeTeam: 'Boston Celtics',
                awayTeam: 'Chicago Bulls',
                channels: ['VIVO'],
                time: '21:30'
            },
            {
                homeTeam: 'Denver Nuggets',
                awayTeam: 'Los Angeles Lakers',
                channels: ['SporTV', 'TV Band', 'TNT Sports', 'Gaules'],
                time: '23:00'
            }
        ],
        '2023-01-10': [
            {
                homeTeam: 'Philadelphia 76ers',
                awayTeam: 'Detroit Pistons',
                channels: ['Amazon'],
                time: '21:30'
            }
        ],
        '2023-01-11': [
            {
                homeTeam: 'Atlanta Hawks',
                awayTeam: 'Milwaukee Bucks',
                channels: ['ESPN'],
                time: '21:30'
            },
            {
                homeTeam: 'Sacramento Kings',
                awayTeam: 'Houston Rockets',
                channels: ['ESPN'],
                time: '00:00'
            }
        ],
        '2023-01-12': [
            {
                homeTeam: 'Brooklyn Nets',
                awayTeam: 'Boston Celtics',
                channels: ['Amazon'],
                time: '21:30'
            }
        ],
        '2023-01-13': [
            {
                homeTeam: 'San Antonio Spurs',
                awayTeam: 'Golden State Warriors',
                channels: ['ESPN'],
                time: '21:30'
            },
            {
                homeTeam: 'LA Clippers',
                awayTeam: 'Denver Nuggets',
                channels: ['ESPN'],
                time: '00:00'
            }
        ],
        '2023-01-14': [
            {
                homeTeam: 'Miami Heat',
                awayTeam: 'Milwaukee Bucks',
                channels: ['ESPN'],
                time: '15:00'
            },
            {
                homeTeam: 'Charlotte Hornets',
                awayTeam: 'Boston Celtics',
                channels: ['Amazon'],
                time: '21:00'
            }
        ],
        '2023-01-15': [
            {
                homeTeam: 'Los Angeles Lakers',
                awayTeam: 'Philadelphia 76ers',
                channels: ['SporTV', 'TV Band', 'TNT Sports', 'Gaules'],
                time: '23:30'
            }
        ],
        '2023-01-16': [
            {
                homeTeam: 'Charlotte Hornets',
                awayTeam: 'Boston Celtics',
                channels: ['VIVO'],
                time: '15:00'
            },
            {
                homeTeam: 'Los Angeles Lakers',
                awayTeam: 'Houston Rockets',
                channels: ['SporTV', 'TV Band', 'TNT Sports', 'Gaules'],
                time: '00:30'
            }
        ],
        '2023-01-17': [
            {
                homeTeam: 'Milwaukee Bucks',
                awayTeam: 'Toronto Raptors',
                channels: ['Amazon'],
                time: '21:30'
            },
            {
                homeTeam: 'LA Clippers',
                awayTeam: 'Philadelphia 76ers',
                channels: ['Amazon'],
                time: '00:00'
            }
        ],
        '2023-01-18': [
            {
                homeTeam: 'Dallas Mavericks',
                awayTeam: 'Atlanta Hawks',
                channels: ['ESPN'],
                time: '21:30'
            },
            {
                homeTeam: 'Denver Nuggets',
                awayTeam: 'Minnesota Timberwolves',
                channels: ['ESPN'],
                time: '00:00'
            }
        ],
        '2023-01-19': [
            {
                homeTeam: 'Boston Celtics',
                awayTeam: 'Golden State Warriors',
                channels: ['Amazon'],
                time: '21:30'
            },
            {
                homeTeam: 'Phoenix Suns',
                awayTeam: 'Brooklyn Nets',
                channels: ['Amazon'],
                time: '00:00'
            }
        ],
        '2023-01-20': [
            {
                homeTeam: 'Dallas Mavericks',
                awayTeam: 'Miami Heat',
                channels: ['ESPN'],
                time: '21:30'
            },
            {
                homeTeam: 'Los Angeles Lakers',
                awayTeam: 'Memphis Grizzlies',
                channels: ['ESPN'],
                time: '00:00'
            }
        ],
        '2023-01-21': [
            {
                homeTeam: 'Cleveland Cavaliers',
                awayTeam: 'Milwaukee Bucks',
                channels: ['Amazon'],
                time: '21:30'
            }
        ],
        '2023-01-22': [
            {
                homeTeam: 'Golden State Warriors',
                awayTeam: 'Brooklyn Nets',
                channels: ['SporTV', 'TNT Sports', 'Gaules'],
                time: '22:30'
            }
        ],
        '2023-01-23': [
            {
                homeTeam: 'Chicago Bulls',
                awayTeam: 'Atlanta Hawks',
                channels: ['VIVO'],
                time: '22:00'
            },
            {
                homeTeam: 'Utah Jazz',
                awayTeam: 'Charlotte Hornets',
                channels: ['SporTV', 'TV Band', 'TNT Sports', 'Gaules'],
                time: '23:00'
            }
        ],
        '2023-01-24': [
            {
                homeTeam: 'Miami Heat',
                awayTeam: 'Boston Celtics',
                channels: ['Amazon'],
                time: '21:30'
            },
            {
                homeTeam: 'Los Angeles Lakers',
                awayTeam: 'LA Clippers',
                channels: ['Amazon'],
                time: '00:00'
            }
        ],
        '2023-01-25': [
            {
                homeTeam: 'Philadelphia 76ers',
                awayTeam: 'Brooklyn Nets',
                channels: ['ESPN'],
                time: '21:30'
            },
            {
                homeTeam: 'Golden State Warriors',
                awayTeam: 'Memphis Grizzlies',
                channels: ['ESPN'],
                time: '00:00'
            }
        ],
        '2023-01-26': [
            {
                homeTeam: 'Charlotte Hornets',
                awayTeam: 'Chicago Bulls',
                channels: ['Amazon'],
                time: '21:30'
            },
            {
                homeTeam: 'Phoenix Suns',
                awayTeam: 'Dallas Mavericks',
                channels: ['Amazon'],
                time: '00:00'
            }
        ],
        '2023-01-27': [
            {
                homeTeam: 'Minnesota Timberwolves',
                awayTeam: 'Memphis Grizzlies',
                channels: ['ESPN'],
                time: '21:30'
            }
        ],
        '2023-01-28': [
            {
                homeTeam: 'Philadelphia 76ers',
                awayTeam: 'Denver Nuggets',
                channels: ['ESPN'],
                time: '17:00'
            },
            {
                homeTeam: 'Brooklyn Nets',
                awayTeam: 'New York Knicks',
                channels: ['ESPN'],
                time: '19:30'
            },
            {
                homeTeam: 'Atlanta Hawks',
                awayTeam: 'LA Clippers',
                channels: ['Amazon'],
                time: '21:30'
            },
            {
                homeTeam: 'Boston Celtics',
                awayTeam: 'Los Angeles Lakers',
                channels: ['ESPN'],
                time: '22:30'
            }
        ],
        '2023-01-30': [
            {
                homeTeam: 'Brooklyn Nets',
                awayTeam: 'Los Angeles Lakers',
                channels: ['VIVO'],
                time: '21:30'
            },
            {
                homeTeam: 'Phoenix Suns',
                awayTeam: 'Toronto Raptors',
                channels: ['SporTV', 'TV Band', 'TNT Sports', 'Gaules'],
                time: '23:00'
            }
        ],
        '2023-01-31': [
            {
                homeTeam: 'New York Knicks',
                awayTeam: 'Los Angeles Lakers',
                channels: ['Amazon'],
                time: '21:30'
            },
            {
                homeTeam: 'Denver Nuggets',
                awayTeam: 'New Orleans Pelicans',
                channels: ['Amazon'],
                time: '00:00'
            }
        ],
        '2023-02-01': [
            {
                homeTeam: 'Boston Celtics',
                awayTeam: 'Brooklyn Nets',
                channels: ['ESPN'],
                time: '21:30'
            },
            {
                homeTeam: 'Phoenix Suns',
                awayTeam: 'Atlanta Hawks',
                channels: ['ESPN'],
                time: '00:00'
            }
        ],
        '2023-02-02': [
            {
                homeTeam: 'Cleveland Cavaliers',
                awayTeam: 'Memphis Grizzlies',
                channels: ['Amazon'],
                time: '21:30'
            },
            {
                homeTeam: 'Milwaukee Bucks',
                awayTeam: 'LA Clippers',
                channels: ['Amazon'],
                time: '00:00'
            }
        ],
        '2023-02-03': [
            {
                homeTeam: 'Boston Celtics',
                awayTeam: 'Phoenix Suns',
                channels: ['ESPN'],
                time: '21:30'
            }
        ],
        '2023-02-04': [
            {
                homeTeam: 'New York Knicks',
                awayTeam: 'LA Clippers',
                channels: ['Amazon'],
                time: '21:00'
            },
            {
                homeTeam: 'Golden State Warriors',
                awayTeam: 'Dallas Mavericks',
                channels: ['ESPN'],
                time: '22:30'
            }
        ],
        '2023-02-05': [
            {
                homeTeam: 'New York Knicks',
                awayTeam: 'Philadelphia 76ers',
                channels: ['ESPN'],
                time: '20:00'
            },
            {
                homeTeam: 'Minnesota Timberwolves',
                awayTeam: 'Denver Nuggets',
                channels: ['SporTV', 'TNT Sports', 'Gaules'],
                time: '21:00'
            }
        ],
        '2023-02-06': [
            {
                homeTeam: 'Brooklyn Nets',
                awayTeam: 'LA Clippers',
                channels: ['VIVO'],
                time: '21:30'
            },
            {
                homeTeam: 'Portland Trail Blazers',
                awayTeam: 'Milwaukee Bucks',
                channels: ['SporTV', 'TV Band', 'TNT Sports', 'Gaules'],
                time: '00:00'
            }
        ],
        '2023-02-07': [
            {
                homeTeam: 'New Orleans Pelicans',
                awayTeam: 'Atlanta Hawks',
                channels: ['Amazon'],
                time: '21:30'
            },
            {
                homeTeam: 'Denver Nuggets',
                awayTeam: 'Minnesota Timberwolves',
                channels: ['Amazon'],
                time: '00:00'
            }
        ],
        '2023-02-08': [
            {
                homeTeam: 'Boston Celtics',
                awayTeam: 'Philadelphia 76ers',
                channels: ['ESPN'],
                time: '21:30'
            },
            {
                homeTeam: 'LA Clippers',
                awayTeam: 'Dallas Mavericks',
                channels: ['ESPN'],
                time: '00:00'
            }
        ],
        '2023-02-09': [
            {
                homeTeam: 'Brooklyn Nets',
                awayTeam: 'Chicago Bulls',
                channels: ['Amazon'],
                time: '21:30'
            },
            {
                homeTeam: 'Los Angeles Lakers',
                awayTeam: 'Milwaukee Bucks',
                channels: ['Amazon'],
                time: '00:00'
            }
        ],
        '2023-02-10': [
            {
                homeTeam: 'Boston Celtics',
                awayTeam: 'Charlotte Hornets',
                channels: ['ESPN'],
                time: '21:30'
            },
            {
                homeTeam: 'New Orleans Pelicans',
                awayTeam: 'Cleveland Cavaliers',
                channels: ['ESPN'],
                time: '00:00'
            }
        ],
        '2023-02-11': [
            {
                homeTeam: 'Cleveland Cavaliers',
                awayTeam: 'Chicago Bulls',
                channels: ['Amazon'],
                time: '22:00'
            },
            {
                homeTeam: 'Golden State Warriors',
                awayTeam: 'Los Angeles Lakers',
                channels: ['ESPN'],
                time: '22:30'
            }
        ],
        '2023-02-12': [
            {
                homeTeam: 'Boston Celtics',
                awayTeam: 'Memphis Grizzlies',
                channels: ['ESPN'],
                time: '16:00'
            }
        ],
        '2023-02-13': [
            {
                homeTeam: 'Miami Heat',
                awayTeam: 'Denver Nuggets',
                channels: ['VIVO'],
                time: '21:30'
            },
            {
                homeTeam: 'Golden State Warriors',
                awayTeam: 'Washington Wizards',
                channels: ['SporTV', 'TV Band', 'TNT Sports', 'Gaules'],
                time: '00:00'
            }
        ],
        '2023-02-14': [
            {
                homeTeam: 'Milwaukee Bucks',
                awayTeam: 'Boston Celtics',
                channels: ['Amazon'],
                time: '21:30'
            },
            {
                homeTeam: 'LA Clippers',
                awayTeam: 'Golden State Warriors',
                channels: ['Amazon'],
                time: '00:00'
            }
        ],
        '2023-02-15': [
            {
                homeTeam: 'Brooklyn Nets',
                awayTeam: 'Miami Heat',
                channels: ['ESPN'],
                time: '21:30'
            },
            {
                homeTeam: 'Los Angeles Lakers',
                awayTeam: 'New Orleans Pelicans',
                channels: ['ESPN'],
                time: '00:00'
            }
        ],
        '2023-02-16': [
            {
                homeTeam: 'Chicago Bulls',
                awayTeam: 'Milwaukee Bucks',
                channels: ['Amazon'],
                time: '21:30'
            },
            {
                homeTeam: 'Phoenix Suns',
                awayTeam: 'LA Clippers',
                channels: ['Amazon'],
                time: '00:00'
            }
        ],
        '2023-02-23': [
            {
                homeTeam: 'Philadelphia 76ers',
                awayTeam: 'Memphis Grizzlies',
                channels: ['Amazon'],
                time: '21:30'
            },
            {
                homeTeam: 'Los Angeles Lakers',
                awayTeam: 'Golden State Warriors',
                channels: ['Amazon'],
                time: '00:00'
            }
        ],
        '2023-02-24': [
            {
                homeTeam: 'Milwaukee Bucks',
                awayTeam: 'Miami Heat',
                channels: ['ESPN'],
                time: '21:30'
            },
            {
                homeTeam: 'Chicago Bulls',
                awayTeam: 'Brooklyn Nets',
                channels: ['ESPN'],
                time: '00:00'
            }
        ],
        '2023-02-25': [
            {
                homeTeam: 'Memphis Grizzlies',
                awayTeam: 'Denver Nuggets',
                channels: ['Amazon'],
                time: '22:00'
            },
            {
                homeTeam: 'Philadelphia 76ers',
                awayTeam: 'Boston Celtics',
                channels: ['ESPN'],
                time: '22:30'
            }
        ],
        '2023-02-26': [
            {
                homeTeam: 'Milwaukee Bucks',
                awayTeam: 'Phoenix Suns',
                channels: ['ESPN'],
                time: '15:00'
            },
            {
                homeTeam: 'Dallas Mavericks',
                awayTeam: 'Los Angeles Lakers',
                channels: ['ESPN'],
                time: '17:30'
            },
            {
                homeTeam: 'Golden State Warriors',
                awayTeam: 'Minnesota Timberwolves',
                channels: ['ESPN'],
                time: '21:30'
            },
            {
                homeTeam: 'Denver Nuggets',
                awayTeam: 'LA Clippers',
                channels: ['ESPN'],
                time: '00:00'
            }
        ],
        '2023-02-27': [
            {
                homeTeam: 'New York Knicks',
                awayTeam: 'Boston Celtics',
                channels: ['VIVO'],
                time: '21:30'
            }
        ],
        '2023-02-28': [
            {
                homeTeam: 'Atlanta Hawks',
                awayTeam: 'Washington Wizards',
                channels: ['Amazon'],
                time: '21:30'
            },
            {
                homeTeam: 'LA Clippers',
                awayTeam: 'Minnesota Timberwolves',
                channels: ['Amazon'],
                time: '00:00'
            }
        ],
        '2023-03-01': [
            {
                homeTeam: 'Boston Celtics',
                awayTeam: 'Cleveland Cavaliers',
                channels: ['ESPN'],
                time: '21:30'
            },
            {
                homeTeam: 'Portland Trail Blazers',
                awayTeam: 'New Orleans Pelicans',
                channels: ['ESPN'],
                time: '00:00'
            }
        ],
        '2023-03-02': [
            {
                homeTeam: 'Dallas Mavericks',
                awayTeam: 'Philadelphia 76ers',
                channels: ['Amazon'],
                time: '21:30'
            },
            {
                homeTeam: 'Golden State Warriors',
                awayTeam: 'LA Clippers',
                channels: ['Amazon'],
                time: '00:00'
            }
        ],
        '2023-03-03': [
            {
                homeTeam: 'Boston Celtics',
                awayTeam: 'Brooklyn Nets',
                channels: ['ESPN'],
                time: '21:30'
            },
            {
                homeTeam: 'Denver Nuggets',
                awayTeam: 'Memphis Grizzlies',
                channels: ['ESPN'],
                time: '00:00'
            }
        ],
        '2023-03-04': [
            {
                homeTeam: 'Miami Heat',
                awayTeam: 'Atlanta Hawks',
                channels: ['Amazon'],
                time: '22:00'
            },
            {
                homeTeam: 'Milwaukee Bucks',
                awayTeam: 'Philadelphia 76ers',
                channels: ['ESPN'],
                time: '22:30'
            }
        ],
        '2023-03-05': [
            {
                homeTeam: 'Dallas Mavericks',
                awayTeam: 'Phoenix Suns',
                channels: ['ESPN'],
                time: '15:00'
            },
            {
                homeTeam: 'Los Angeles Lakers',
                awayTeam: 'Golden State Warriors',
                channels: ['ESPN'],
                time: '17:30'
            },
            {
                homeTeam: 'Brooklyn Nets',
                awayTeam: 'Charlotte Hornets',
                channels: ['SporTV', 'TNT Sports', 'Gaules'],
                time: '20:00'
            },
            {
                homeTeam: 'Boston Celtics',
                awayTeam: 'New York Knicks',
                channels: ['ESPN'],
                time: '21:30'
            },
            {
                homeTeam: 'LA Clippers',
                awayTeam: 'Memphis Grizzlies',
                channels: ['ESPN'],
                time: '00:00'
            }
        ],
        '2023-03-06': [
            {
                homeTeam: 'Cleveland Cavaliers',
                awayTeam: 'Boston Celtics',
                channels: ['VIVO'],
                time: '21:00'
            },
            {
                homeTeam: 'Denver Nuggets',
                awayTeam: 'Toronto Raptors',
                channels: ['SporTV', 'TV Band', 'TNT Sports', 'Gaules'],
                time: '23:00'
            }
        ],
        '2023-03-07': [
            {
                homeTeam: 'Minnesota Timberwolves',
                awayTeam: 'Philadelphia 76ers',
                channels: ['Amazon'],
                time: '21:30'
            },
            {
                homeTeam: 'Los Angeles Lakers',
                awayTeam: 'Memphis Grizzlies',
                channels: ['Amazon'],
                time: '00:00'
            }
        ],
        '2023-03-08': [
            {
                homeTeam: 'New Orleans Pelicans',
                awayTeam: 'Dallas Mavericks',
                channels: ['ESPN'],
                time: '21:30'
            },
            {
                homeTeam: 'LA Clippers',
                awayTeam: 'Toronto Raptors',
                channels: ['ESPN'],
                time: '00:00'
            }
        ],
        '2023-03-09': [
            {
                homeTeam: 'Milwaukee Bucks',
                awayTeam: 'Brooklyn Nets',
                channels: ['Amazon'],
                time: '21:30'
            },
            {
                homeTeam: 'Memphis Grizzlies',
                awayTeam: 'Golden State Warriors',
                channels: ['Amazon'],
                time: '00:00'
            }
        ],
        '2023-03-10': [
            {
                homeTeam: 'Los Angeles Lakers',
                awayTeam: 'Toronto Raptors',
                channels: ['ESPN'],
                time: '00:30'
            }
        ],
        '2023-03-11': [
            {
                homeTeam: 'Memphis Grizzlies',
                awayTeam: 'Dallas Mavericks',
                channels: ['Amazon'],
                time: '22:00'
            },
            {
                homeTeam: 'Golden State Warriors',
                awayTeam: 'Milwaukee Bucks',
                channels: ['ESPN'],
                time: '22:30'
            }
        ],
        '2023-03-12': [
            {
                homeTeam: 'Los Angeles Lakers',
                awayTeam: 'New York Knicks',
                channels: ['ESPN'],
                time: '22:00'
            }
        ],
        '2023-03-13': [
            {
                homeTeam: 'Atlanta Hawks',
                awayTeam: 'Minnesota Timberwolves',
                channels: ['VIVO'],
                time: '20:30'
            },
            {
                homeTeam: 'Dallas Mavericks',
                awayTeam: 'Memphis Grizzlies',
                channels: ['ESPN'],
                time: '20:30'
            },
            {
                homeTeam: 'Golden State Warriors',
                awayTeam: 'Phoenix Suns',
                channels: ['ESPN'],
                time: '23:00'
            },
            {
                homeTeam: 'Sacramento Kings',
                awayTeam: 'Milwaukee Bucks',
                channels: ['SporTV', 'TV Band', 'TNT Sports', 'Gaules'],
                time: '23:00'
            }
        ],
        '2023-03-14': [
            {
                homeTeam: 'Toronto Raptors',
                awayTeam: 'Denver Nuggets',
                channels: ['Amazon'],
                time: '20:30'
            },
            {
                homeTeam: 'Phoenix Suns',
                awayTeam: 'Milwaukee Bucks',
                channels: ['Amazon'],
                time: '23:00'
            }
        ],
        '2023-03-15': [
            {
                homeTeam: 'Cleveland Cavaliers',
                awayTeam: 'Philadelphia 76ers',
                channels: ['ESPN'],
                time: '20:30'
            },
            {
                homeTeam: 'LA Clippers',
                awayTeam: 'Golden State Warriors',
                channels: ['ESPN'],
                time: '23:00'
            }
        ],
        '2023-03-16': [
            {
                homeTeam: 'Detroit Pistons',
                awayTeam: 'Denver Nuggets',
                channels: ['Amazon'],
                time: '20:00'
            },
            {
                homeTeam: 'Phoenix Suns',
                awayTeam: 'Orlando Magic',
                channels: ['Amazon'],
                time: '23:00'
            }
        ],
        '2023-03-17': [
            {
                homeTeam: 'Los Angeles Lakers',
                awayTeam: 'Dallas Mavericks',
                channels: ['ESPN'],
                time: '23:30'
            }
        ],
        '2023-03-18': [
            {
                homeTeam: 'Memphis Grizzlies',
                awayTeam: 'Golden State Warriors',
                channels: ['Amazon'],
                time: '21:00'
            }
        ],
        '2023-03-19': [
            {
                homeTeam: 'Los Angeles Lakers',
                awayTeam: 'Orlando Magic',
                channels: ['SporTV', 'TNT Sports', 'Gaules'],
                time: '22:30'
            }
        ],
        '2023-03-20': [
            {
                homeTeam: 'Memphis Grizzlies',
                awayTeam: 'Dallas Mavericks',
                channels: ['VIVO'],
                time: '21:00'
            }
        ],
        '2023-03-21': [
            {
                homeTeam: 'Brooklyn Nets',
                awayTeam: 'Cleveland Cavaliers',
                channels: ['Amazon'],
                time: '20:30'
            },
            {
                homeTeam: 'Sacramento Kings',
                awayTeam: 'Boston Celtics',
                channels: ['Amazon'],
                time: '23:00'
            }
        ],
        '2023-03-22': [
            {
                homeTeam: 'Dallas Mavericks',
                awayTeam: 'Golden State Warriors',
                channels: ['ESPN'],
                time: '20:30'
            },
            {
                homeTeam: 'Los Angeles Lakers',
                awayTeam: 'Phoenix Suns',
                channels: ['ESPN'],
                time: '23:00'
            }
        ],
        '2023-03-23': [
            {
                homeTeam: 'Orlando Magic',
                awayTeam: 'New York Knicks',
                channels: ['Amazon'],
                time: '20:00'
            },
            {
                homeTeam: 'LA Clippers',
                awayTeam: 'Oklahoma City Thunder',
                channels: ['Amazon'],
                time: '23:30'
            }
        ],
        '2023-03-24': [
            {
                homeTeam: 'Golden State Warriors',
                awayTeam: 'Philadelphia 76ers',
                channels: ['ESPN'],
                time: '23:00'
            }
        ],
        '2023-03-25': [
            {
                homeTeam: 'Miami Heat',
                awayTeam: 'Brooklyn Nets',
                channels: ['Amazon'],
                time: '21:00'
            },
            {
                homeTeam: 'Denver Nuggets',
                awayTeam: 'Milwaukee Bucks',
                channels: ['ESPN'],
                time: '22:00'
            }
        ],
        '2023-03-26': [
            {
                homeTeam: 'Golden State Warriors',
                awayTeam: 'Minnesota Timberwolves',
                channels: ['SporTV', 'TNT Sports', 'Gaules'],
                time: '21:30'
            }
        ],
        '2023-03-27': [
            {
                homeTeam: 'Portland Trail Blazers',
                awayTeam: 'New Orleans Pelicans',
                channels: ['VIVO'],
                time: '23:00'
            },
            {
                homeTeam: 'LA Clippers',
                awayTeam: 'Chicago Bulls',
                channels: ['SporTV', 'TV Band', 'TNT Sports', 'Gaules'],
                time: '23:30'
            }
        ],
        '2023-03-28': [
            {
                homeTeam: 'Toronto Raptors',
                awayTeam: 'Miami Heat',
                channels: ['Amazon'],
                time: '20:30'
            },
            {
                homeTeam: 'Golden State Warriors',
                awayTeam: 'New Orleans Pelicans',
                channels: ['Amazon'],
                time: '23:00'
            }
        ],
        '2023-03-29': [
            {
                homeTeam: 'Philadelphia 76ers',
                awayTeam: 'Dallas Mavericks',
                channels: ['ESPN'],
                time: '20:30'
            },
            {
                homeTeam: 'Phoenix Suns',
                awayTeam: 'Minnesota Timberwolves',
                channels: ['ESPN'],
                time: '23:00'
            }
        ],
        '2023-03-30': [
            {
                homeTeam: 'Milwaukee Bucks',
                awayTeam: 'Boston Celtics',
                channels: ['Amazon'],
                time: '20:30'
            },
            {
                homeTeam: 'Denver Nuggets',
                awayTeam: 'New Orleans Pelicans',
                channels: ['Amazon'],
                time: '23:00'
            }
        ],
        '2023-03-31': [
            {
                homeTeam: 'Memphis Grizzlies',
                awayTeam: 'LA Clippers',
                channels: ['ESPN'],
                time: '21:00'
            }
        ],
        '2023-04-01': [
            {
                homeTeam: 'Miami Heat',
                awayTeam: 'Dallas Mavericks',
                channels: ['ESPN'],
                time: '20:30'
            },
            {
                homeTeam: 'New Orleans Pelicans',
                awayTeam: 'LA Clippers',
                channels: ['Amazon'],
                time: '21:30'
            }
        ],
        '2023-04-02': [
            {
                homeTeam: 'Milwaukee Bucks',
                awayTeam: 'Philadelphia 76ers',
                channels: ['SporTV', 'TNT Sports', 'Gaules'],
                time: '21:00'
            }
        ],
        '2023-04-04': [
            {
                homeTeam: 'Philadelphia 76ers',
                awayTeam: 'Boston Celtics',
                channels: ['Amazon'],
                time: '21:00'
            }
        ],
        '2023-04-05': [
            {
                homeTeam: 'Milwaukee Bucks',
                awayTeam: 'Chicago Bulls',
                channels: ['ESPN'],
                time: '20:30'
            },
            {
                homeTeam: 'LA Clippers',
                awayTeam: 'Los Angeles Lakers',
                channels: ['ESPN'],
                time: '23:00'
            }
        ],
        '2023-04-06': [
            {
                homeTeam: 'Philadelphia 76ers',
                awayTeam: 'Miami Heat',
                channels: ['Amazon'],
                time: '20:30'
            },
            {
                homeTeam: 'Phoenix Suns',
                awayTeam: 'Denver Nuggets',
                channels: ['Amazon'],
                time: '23:00'
            }
        ],
        '2023-04-07': [
            {
                homeTeam: 'Los Angeles Lakers',
                awayTeam: 'Phoenix Suns',
                channels: ['ESPN'],
                time: '23:30'
            }
        ],
        '2023-04-08': [
            {
                homeTeam: 'Utah Jazz',
                awayTeam: 'Denver Nuggets',
                channels: ['ESPN'],
                time: '16:30'
            },
            {
                homeTeam: 'LA Clippers',
                awayTeam: 'Portland Trail Blazers',
                channels: ['Amazon'],
                time: '17:00'
            }
        ],
        '2023-04-09': [
            {
                homeTeam: 'Portland Trail Blazers',
                awayTeam: 'Golden State Warriors',
                channels: ['SporTV', 'TNT Sports', 'Gaules'],
                time: '16:30'
            }
        ]
    }
}