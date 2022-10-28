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
        "2022-10-18": [
            {
                homeTeam: "Philadelphia 76ers",
                awayTeam: "Boston Celtics",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "20:30"
            },
            {
                homeTeam: "Los Angeles Lakers",
                awayTeam: "Golden State Warriors",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "23:00"
            }
        ],
        "2022-10-19": [
            {
                homeTeam: "New York Knicks",
                awayTeam: "Memphis Grizzlies",
                channels: [
                    "ESPN 2"
                ],
                time: "20:30"
            },
            {
                homeTeam: "Dallas Mavericks",
                awayTeam: "Phoenix Suns",
                channels: [
                    "ESPN 2"
                ],
                time: "23:00"
            }
        ],
        "2022-10-20": [
            {
                homeTeam: "Milwaukee Bucks",
                awayTeam: "Philadelphia 76ers",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "20:30"
            },
            {
                homeTeam: "Los Angeles Clippers",
                awayTeam: "Los Angeles Lakers",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "23:00"
            }
        ],
        "2022-10-21": [
            {
                homeTeam: "Boston Celtics",
                awayTeam: "Miami Heat",
                channels: [
                    "ESPN 2"
                ],
                time: "20:30"
            },
            {
                homeTeam: "Denver Nuggets",
                awayTeam: "Golden State Warriors",
                channels: [
                    "ESPN 2"
                ],
                time: "23:00"
            }
        ],
        "2022-10-22": [
            {
                homeTeam: "Memphis Grizzlies",
                awayTeam: "Dallas Mavericks",
                channels: [
                    "ESPN 2"
                ],
                time: "21:30"
            }
        ],
        "2022-10-23": [
            {
                homeTeam: "Phoenix Suns",
                awayTeam: "Los Angeles Clippers",
                channels: [
                    "TNT",
                    "SporTV 2",
                    "Gaules",
                    "Facebook da CNN Brasil"
                ],
                time: "23:00"
            }
        ],
        "2022-10-24": [
            {
                homeTeam: "Denver Nuggets",
                awayTeam: "Portland Trail Blazers",
                channels: [
                    "Band",
                    "TNT",
                    "SporTV 2",
                    "Gaules",
                    "Facebook da CNN Brasil"
                ],
                time: "23:00"
            }
        ],
        "2022-10-25": [
            {
                homeTeam: "Dallas Mavericks",
                awayTeam: "New Orleans Pelicans",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "20:30"
            },
            {
                homeTeam: "Golden State Warriors",
                awayTeam: "Phoenix Suns",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "23:00"
            }
        ],
        "2022-10-26": [
            {
                homeTeam: "Brooklyn Nets",
                awayTeam: "Milwaukee Bucks",
                channels: [
                    "ESPN 2"
                ],
                time: "20:30"
            },
            {
                homeTeam: "Los Angeles Lakers",
                awayTeam: "Denver Nuggets",
                channels: [
                    "ESPN 2"
                ],
                time: "23:00"
            }
        ],
        "2022-10-28": [
            {
                homeTeam: "Indiana Pacers",
                awayTeam: "Washington Wizards",
                channels: [
                    "ESPN 2"
                ],
                time: "20:30"
            },
            {
                homeTeam: "New Orleans Pelicans",
                awayTeam: "Phoenix Suns",
                channels: [
                    "ESPN 2"
                ],
                time: "23:00"
            }
        ],
        "2022-10-29": [
            {
                homeTeam: "Memphis Grizzlies",
                awayTeam: "Utah Jazz",
                channels: [
                    "ESPN 2"
                ],
                time: "22:00"
            }
        ],
        "2022-10-30": [
            {
                homeTeam: "Denver Nuggets",
                awayTeam: "Los Angeles Lakers",
                channels: [
                    "TNT",
                    "SporTV 2",
                    "Gaules",
                    "Facebook da CNN Brasil"
                ],
                time: "22:30"
            }
        ],
        "2022-10-31": [
            {
                homeTeam: "Houston Rockets",
                awayTeam: "Los Angeles Clippers",
                channels: [
                    "Band",
                    "TNT",
                    "SporTV 2",
                    "Gaules",
                    "Facebook da CNN Brasil"
                ],
                time: "23:30"
            }
        ],
        "2022-11-01": [
            {
                homeTeam: "Orlando Magic",
                awayTeam: "Oklahoma City Thunder",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "20:30"
            },
            {
                homeTeam: "Minnesota Timberwolves",
                awayTeam: "Phoenix Suns",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "23:00"
            }
        ],
        "2022-11-02": [
            {
                homeTeam: "Boston Celtics",
                awayTeam: "Cleveland Cavaliers",
                channels: [
                    "ESPN 2"
                ],
                time: "20:30"
            },
            {
                homeTeam: "Memphis Grizzlies",
                awayTeam: "Portland Trail Blazers",
                channels: [
                    "ESPN 2"
                ],
                time: "23:00"
            }
        ],
        "2022-11-04": [
            {
                homeTeam: "Chicago Bulls",
                awayTeam: "Boston Celtics",
                channels: [
                    "ESPN 2"
                ],
                time: "20:30"
            },
            {
                homeTeam: "Milwaukee Bucks",
                awayTeam: "Minnesota Timberwolves",
                channels: [
                    "ESPN 2"
                ],
                time: "23:00"
            }
        ],
        "2022-11-05": [
            {
                homeTeam: "Boston Celtics",
                awayTeam: "New York Knicks",
                channels: [
                    "ESPN 2"
                ],
                time: "20:30"
            }
        ],
        "2022-11-06": [
            {
                homeTeam: "Cleveland Cavaliers",
                awayTeam: "Los Angeles Lakers",
                channels: [
                    "TNT",
                    "SporTV 2",
                    "Gaules",
                    "Facebook da CNN Brasil"
                ],
                time: "17:30"
            }
        ],
        "2022-11-07": [
            {
                homeTeam: "Sacramento Kings",
                awayTeam: "Golden State Warriors",
                channels: [
                    "Band",
                    "TNT",
                    "SporTV 2",
                    "Gaules",
                    "Facebook da CNN Brasil"
                ],
                time: "00:00"
            }
        ],
        "2022-11-09": [
            {
                homeTeam: "New York Knicks",
                awayTeam: "Brooklyn Nets",
                channels: [
                    "ESPN 2"
                ],
                time: "21:30"
            }
        ],
        "2022-11-10": [
            {
                homeTeam: "Philadelphia 76ers",
                awayTeam: "Atlanta Hawks",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "21:30"
            }
        ],
        "2022-11-11": [
            {
                homeTeam: "Minnesota Timberwolves",
                awayTeam: "Memphis Grizzlies",
                channels: [
                    "ESPN 2"
                ],
                time: "23:30"
            }
        ],
        "2022-11-12": [
            {
                homeTeam: "Atlanta Hawks",
                awayTeam: "Philadelphia 76ers",
                channels: [
                    "ESPN 2"
                ],
                time: "21:30"
            }
        ],
        "2022-11-13": [
            {
                homeTeam: "Brooklyn Nets",
                awayTeam: "Los Angeles Lakers",
                channels: [
                    "Band",
                    "TNT",
                    "SporTV 2",
                    "Gaules",
                    "Facebook da CNN Brasil"
                ],
                time: "23:30"
            }
        ],
        "2022-11-14": [
            {
                homeTeam: "San Antonio Spurs",
                awayTeam: "Golden State Warriors",
                channels: [
                    "Band",
                    "TNT",
                    "SporTV 2",
                    "Gaules",
                    "Facebook da CNN Brasil"
                ],
                time: "00:00"
            }
        ],
        "2022-11-15": [
            {
                homeTeam: "Memphis Grizzlies",
                awayTeam: "New Orleans Pelicans",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "21:30"
            },
            {
                homeTeam: "New York Knicks",
                awayTeam: "Utah Jazz",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "00:00"
            }
        ],
        "2022-11-16": [
            {
                homeTeam: "Boston Celtics",
                awayTeam: "Atlanta Hawks",
                channels: [
                    "ESPN 2"
                ],
                time: "21:30"
            },
            {
                homeTeam: "Golden State Warriors",
                awayTeam: "Phoenix Suns",
                channels: [
                    "ESPN 2"
                ],
                time: "00:00"
            }
        ],
        "2022-11-18": [
            {
                homeTeam: "Milwaukee Bucks",
                awayTeam: "Philadelphia 76ers",
                channels: [
                    "ESPN 2"
                ],
                time: "21:30"
            },
            {
                homeTeam: "New York Knicks",
                awayTeam: "Golden State Warriors",
                channels: [
                    "ESPN 2"
                ],
                time: "00:00"
            }
        ],
        "2022-11-19": [
            {
                homeTeam: "Utah Jazz",
                awayTeam: "Portland Trail Blazers",
                channels: [
                    "ESPN 2"
                ],
                time: "00:00"
            }
        ],
        "2022-11-21": [
            {
                homeTeam: "Utah Jazz",
                awayTeam: "Los Angeles Clippers",
                channels: [
                    "Band",
                    "TNT",
                    "SporTV 2",
                    "Gaules",
                    "Facebook da CNN Brasil"
                ],
                time: "00:00"
            }
        ],
        "2022-11-22": [
            {
                homeTeam: "Brooklyn Nets",
                awayTeam: "Philadelphia 76ers",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "21:30"
            },
            {
                homeTeam: "Los Angeles Lakers",
                awayTeam: "Phoenix Suns",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "00:00"
            }
        ],
        "2022-11-23": [
            {
                homeTeam: "Dallas Mavericks",
                awayTeam: "Boston Celtics",
                channels: [
                    "ESPN 2"
                ],
                time: "21:30"
            },
            {
                homeTeam: "Los Angeles Clippers",
                awayTeam: "Golden State Warriors",
                channels: [
                    "ESPN 2"
                ],
                time: "00:00"
            }
        ],
        "2022-11-25": [
            {
                homeTeam: "Utah Jazz",
                awayTeam: "Golden State Warriors",
                channels: [
                    "ESPN 2"
                ],
                time: "00:00"
            }
        ],
        "2022-11-26": [
            {
                homeTeam: "Los Angeles Lakers",
                awayTeam: "San Antonio Spurs",
                channels: [
                    "ESPN 2"
                ],
                time: "22:00"
            }
        ],
        "2022-11-27": [
            {
                homeTeam: "Dallas Mavericks",
                awayTeam: "Milwaukee Bucks",
                channels: [
                    "TNT",
                    "SporTV 2",
                    "Gaules",
                    "Facebook da CNN Brasil"
                ],
                time: "22:00"
            }
        ],
        "2022-11-28": [
            {
                homeTeam: "Indiana Pacers",
                awayTeam: "Los Angeles Lakers",
                channels: [
                    "Band",
                    "TNT",
                    "SporTV 2",
                    "Gaules",
                    "Facebook da CNN Brasil"
                ],
                time: "00:00"
            }
        ],
        "2022-11-29": [
            {
                homeTeam: "Golden State Warriors",
                awayTeam: "Dallas Mavericks",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "21:30"
            },
            {
                homeTeam: "Los Angeles Clippers",
                awayTeam: "Portland Trail Blazers",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "00:00"
            }
        ],
        "2022-11-30": [
            {
                homeTeam: "Chicago Bulls",
                awayTeam: "Phoenix Suns",
                channels: [
                    "ESPN 2"
                ],
                time: "23:00"
            }
        ],
        "2022-12-02": [
            {
                homeTeam: "Los Angeles Lakers",
                awayTeam: "Milwaukee Bucks",
                channels: [
                    "ESPN 2"
                ],
                time: "21:30"
            },
            {
                homeTeam: "Chicago Bulls",
                awayTeam: "Golden State Warriors",
                channels: [
                    "ESPN 2"
                ],
                time: "00:00"
            }
        ],
        "2022-12-03": [
            {
                homeTeam: "Milwaukee Bucks",
                awayTeam: "Charlotte Hornets",
                channels: [
                    "ESPN 2"
                ],
                time: "20:00"
            }
        ],
        "2022-12-04": [
            {
                homeTeam: "Boston Celtics",
                awayTeam: "Brooklyn Nets",
                channels: [
                    "TNT",
                    "SporTV 2",
                    "Gaules",
                    "Facebook da CNN Brasil"
                ],
                time: "20:00"
            }
        ],
        "2022-12-05": [
            {
                homeTeam: "Phoenix Suns",
                awayTeam: "Dallas Mavericks",
                channels: [
                    "Band",
                    "TNT",
                    "SporTV 2",
                    "Gaules",
                    "Facebook da CNN Brasil"
                ],
                time: "22:30"
            }
        ],
        "2022-12-06": [
            {
                homeTeam: "Los Angeles Lakers",
                awayTeam: "Cleveland Cavaliers",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "21:30"
            },
            {
                homeTeam: "Dallas Mavericks",
                awayTeam: "Denver Nuggets",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "00:00"
            }
        ],
        "2022-12-07": [
            {
                homeTeam: "Atlanta Hawks",
                awayTeam: "New York Knicks",
                channels: [
                    "ESPN 2"
                ],
                time: "21:30"
            }
        ],
        "2022-12-09": [
            {
                homeTeam: "Los Angeles Lakers",
                awayTeam: "Philadelphia 76ers",
                channels: [
                    "ESPN 2"
                ],
                time: "21:30"
            },
            {
                homeTeam: "Milwaukee Bucks",
                awayTeam: "Dallas Mavericks",
                channels: [
                    "ESPN 2"
                ],
                time: "00:00"
            }
        ],
        "2022-12-10": [
            {
                homeTeam: "Boston Celtics",
                awayTeam: "Golden State Warriors",
                channels: [
                    "ESPN 2"
                ],
                time: "22:30"
            }
        ],
        "2022-12-12": [
            {
                homeTeam: "Boston Celtics",
                awayTeam: "Los Angeles Clippers",
                channels: [
                    "Band",
                    "TNT",
                    "SporTV 2",
                    "Gaules",
                    "Facebook da CNN Brasil"
                ],
                time: "00:00"
            }
        ],
        "2022-12-13": [
            {
                homeTeam: "Golden State Warriors",
                awayTeam: "Milwaukee Bucks",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "21:30"
            },
            {
                homeTeam: "Boston Celtics",
                awayTeam: "Los Angeles Lakers",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "00:00"
            }
        ],
        "2022-12-14": [
            {
                homeTeam: "New York Knicks",
                awayTeam: "Chicago Bulls",
                channels: [
                    "ESPN 2"
                ],
                time: "21:30"
            }
        ],
        "2022-12-16": [
            {
                homeTeam: "Golden State Warriors",
                awayTeam: "Philadelphia 76ers",
                channels: [
                    "ESPN 2"
                ],
                time: "21:30"
            },
            {
                homeTeam: "Denver Nuggets",
                awayTeam: "Los Angeles Lakers",
                channels: [
                    "ESPN 2"
                ],
                time: "00:00"
            }
        ],
        "2022-12-17": [
            {
                homeTeam: "Miami Heat",
                awayTeam: "San Antonio Spurs",
                channels: [
                    "ESPN 2"
                ],
                time: "19:00"
            }
        ],
        "2022-12-18": [
            {
                homeTeam: "Washington Wizards",
                awayTeam: "Los Angeles Lakers",
                channels: [
                    "Band",
                    "TNT",
                    "SporTV 2",
                    "Gaules",
                    "Facebook da CNN Brasil"
                ],
                time: "23:30"
            }
        ],
        "2022-12-19": [
            {
                homeTeam: "Los Angeles Lakers",
                awayTeam: "Phoenix Suns",
                channels: [
                    "Band",
                    "TNT",
                    "SporTV 2",
                    "Gaules",
                    "Facebook da CNN Brasil"
                ],
                time: "23:00"
            }
        ],
        "2022-12-20": [
            {
                homeTeam: "Golden State Warriors",
                awayTeam: "New York Knicks",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "21:30"
            },
            {
                homeTeam: "Memphis Grizzlies",
                awayTeam: "Denver Nuggets",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "00:00"
            }
        ],
        "2022-12-21": [
            {
                homeTeam: "Golden State Warriors",
                awayTeam: "Brooklyn Nets",
                channels: [
                    "ESPN 2"
                ],
                time: "21:30"
            }
        ],
        "2022-12-23": [
            {
                homeTeam: "Memphis Grizzlies",
                awayTeam: "Phoenix Suns",
                channels: [
                    "ESPN 2"
                ],
                time: "00:00"
            }
        ],
        "2022-12-25": [
            {
                homeTeam: "Philadelphia 76ers",
                awayTeam: "New York Knicks",
                channels: [
                    "ESPN 2"
                ],
                time: "14:00"
            },
            {
                homeTeam: "Milwaukee Bucks",
                awayTeam: "Boston Celtics",
                channels: [
                    "ESPN 2"
                ],
                time: "19:00"
            },
            {
                homeTeam: "Phoenix Suns",
                awayTeam: "Denver Nuggets",
                channels: [
                    "ESPN 2"
                ],
                time: "00:00"
            }
        ],
        "2022-12-26": [
            {
                homeTeam: "Charlotte Hornets",
                awayTeam: "Portland Trail Blazers",
                channels: [
                    "Band",
                    "TNT",
                    "SporTV 2",
                    "Gaules",
                    "Facebook da CNN Brasil"
                ],
                time: "00:00"
            }
        ],
        "2022-12-27": [
            {
                homeTeam: "Los Angeles Clippers",
                awayTeam: "Toronto Raptors",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "21:30"
            },
            {
                homeTeam: "Charlotte Hornets",
                awayTeam: "Golden State Warriors",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "00:00"
            }
        ],
        "2022-12-28": [
            {
                homeTeam: "Los Angeles Lakers",
                awayTeam: "Miami Heat",
                channels: [
                    "ESPN 2"
                ],
                time: "21:30"
            }
        ],
        "2022-12-30": [
            {
                homeTeam: "Miami Heat",
                awayTeam: "Denver Nuggets",
                channels: [
                    "ESPN 2"
                ],
                time: "23:00"
            }
        ],
        "2023-01-01": [
            {
                homeTeam: "Boston Celtics",
                awayTeam: "Denver Nuggets",
                channels: [
                    "TNT",
                    "SporTV 2",
                    "Gaules",
                    "Facebook da CNN Brasil"
                ],
                time: "22:00"
            }
        ],
        "2023-01-02": [
            {
                homeTeam: "Atlanta Hawks",
                awayTeam: "Golden State Warriors",
                channels: [
                    "Band",
                    "TNT",
                    "SporTV 2",
                    "Gaules",
                    "Facebook da CNN Brasil"
                ],
                time: "00:00"
            }
        ],
        "2023-01-03": [
            {
                homeTeam: "Washington Wizards",
                awayTeam: "Milwaukee Bucks",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "22:00"
            }
        ],
        "2023-01-04": [
            {
                homeTeam: "Milwaukee Bucks",
                awayTeam: "Toronto Raptors",
                channels: [
                    "ESPN 2"
                ],
                time: "21:30"
            },
            {
                homeTeam: "Miami Heat",
                awayTeam: "Los Angeles Lakers",
                channels: [
                    "ESPN 2"
                ],
                time: "00:00"
            }
        ],
        "2023-01-05": [
            {
                homeTeam: "Boston Celtics",
                awayTeam: "Dallas Mavericks",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "21:30"
            },
            {
                homeTeam: "Los Angeles Clippers",
                awayTeam: "Denver Nuggets",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "00:00"
            }
        ],
        "2023-01-06": [
            {
                homeTeam: "Chicago Bulls",
                awayTeam: "Philadelphia 76ers",
                channels: [
                    "ESPN 2"
                ],
                time: "21:30"
            },
            {
                homeTeam: "Miami Heat",
                awayTeam: "Phoenix Suns",
                channels: [
                    "ESPN 2"
                ],
                time: "00:00"
            }
        ],
        "2023-01-07": [
            {
                homeTeam: "New Orleans Pelicans",
                awayTeam: "Dallas Mavericks",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "22:00"
            },
            {
                homeTeam: "Orlando Magic",
                awayTeam: "Golden State Warriors",
                channels: [
                    "ESPN 2"
                ],
                time: "22:30"
            }
        ],
        "2023-01-08": [
            {
                homeTeam: "Atlanta Hawks",
                awayTeam: "Los Angeles Clippers",
                channels: [
                    "Band",
                    "TNT",
                    "SporTV 2",
                    "Gaules",
                    "Facebook da CNN Brasil"
                ],
                time: "23:00"
            }
        ],
        "2023-01-09": [
            {
                homeTeam: "Los Angeles Lakers",
                awayTeam: "Denver Nuggets",
                channels: [
                    "Band",
                    "TNT",
                    "SporTV 2",
                    "Gaules",
                    "Facebook da CNN Brasil"
                ],
                time: "23:00"
            }
        ],
        "2023-01-10": [
            {
                homeTeam: "Detroit Pistons",
                awayTeam: "Philadelphia 76ers",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "21:30"
            }
        ],
        "2023-01-11": [
            {
                homeTeam: "Milwaukee Bucks",
                awayTeam: "Atlanta Hawks",
                channels: [
                    "ESPN 2"
                ],
                time: "21:30"
            },
            {
                homeTeam: "Houston Rockets",
                awayTeam: "Sacramento Kings",
                channels: [
                    "ESPN 2"
                ],
                time: "00:00"
            }
        ],
        "2023-01-12": [
            {
                homeTeam: "Boston Celtics",
                awayTeam: "Brooklyn Nets",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "21:30"
            }
        ],
        "2023-01-13": [
            {
                homeTeam: "Golden State Warriors",
                awayTeam: "San Antonio Spurs",
                channels: [
                    "ESPN 2"
                ],
                time: "21:30"
            },
            {
                homeTeam: "Denver Nuggets",
                awayTeam: "Los Angeles Clippers",
                channels: [
                    "ESPN 2"
                ],
                time: "00:00"
            }
        ],
        "2023-01-14": [
            {
                homeTeam: "Milwaukee Bucks",
                awayTeam: "Miami Heat",
                channels: [
                    "ESPN 2"
                ],
                time: "15:00"
            },
            {
                homeTeam: "Boston Celtics",
                awayTeam: "Charlotte Hornets",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "21:00"
            }
        ],
        "2023-01-15": [
            {
                homeTeam: "Philadelphia 76ers",
                awayTeam: "Los Angeles Lakers",
                channels: [
                    "Band",
                    "TNT",
                    "SporTV 2",
                    "Gaules",
                    "Facebook da CNN Brasil"
                ],
                time: "23:30"
            }
        ],
        "2023-01-16": [
            {
                homeTeam: "Houston Rockets",
                awayTeam: "Los Angeles Lakers",
                channels: [
                    "Band",
                    "TNT",
                    "SporTV 2",
                    "Gaules",
                    "Facebook da CNN Brasil"
                ],
                time: "00:00"
            }
        ],
        "2023-01-17": [
            {
                homeTeam: "Toronto Raptors",
                awayTeam: "Milwaukee Bucks",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "21:30"
            },
            {
                homeTeam: "Philadelphia 76ers",
                awayTeam: "Los Angeles Clippers",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "00:00"
            }
        ],
        "2023-01-18": [
            {
                homeTeam: "Atlanta Hawks",
                awayTeam: "Dallas Mavericks",
                channels: [
                    "ESPN 2"
                ],
                time: "21:30"
            },
            {
                homeTeam: "Minnesota Timberwolves",
                awayTeam: "Denver Nuggets",
                channels: [
                    "ESPN 2"
                ],
                time: "00:00"
            }
        ],
        "2023-01-19": [
            {
                homeTeam: "Golden State Warriors",
                awayTeam: "Boston Celtics",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "21:30"
            },
            {
                homeTeam: "Brooklyn Nets",
                awayTeam: "Phoenix Suns",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "00:00"
            }
        ],
        "2023-01-20": [
            {
                homeTeam: "Miami Heat",
                awayTeam: "Dallas Mavericks",
                channels: [
                    "ESPN 2"
                ],
                time: "21:30"
            },
            {
                homeTeam: "Memphis Grizzlies",
                awayTeam: "Los Angeles Lakers",
                channels: [
                    "ESPN 2"
                ],
                time: "00:00"
            }
        ],
        "2023-01-21": [
            {
                homeTeam: "Milwaukee Bucks",
                awayTeam: "Cleveland Cavaliers",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "21:30"
            }
        ],
        "2023-01-22": [
            {
                homeTeam: "Brooklyn Nets",
                awayTeam: "Golden State Warriors",
                channels: [
                    "TNT",
                    "SporTV 2",
                    "Gaules",
                    "Facebook da CNN Brasil"
                ],
                time: "22:30"
            }
        ],
        "2023-01-23": [
            {
                homeTeam: "Charlotte Hornets",
                awayTeam: "Utah Jazz",
                channels: [
                    "Band",
                    "TNT",
                    "SporTV 2",
                    "Gaules",
                    "Facebook da CNN Brasil"
                ],
                time: "23:00"
            }
        ],
        "2023-01-24": [
            {
                homeTeam: "Boston Celtics",
                awayTeam: "Miami Heat",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "21:30"
            },
            {
                homeTeam: "Los Angeles Clippers",
                awayTeam: "Los Angeles Lakers",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "00:00"
            }
        ],
        "2023-01-25": [
            {
                homeTeam: "Brooklyn Nets",
                awayTeam: "Philadelphia 76ers",
                channels: [
                    "ESPN 2"
                ],
                time: "21:30"
            },
            {
                homeTeam: "Memphis Grizzlies",
                awayTeam: "Golden State Warriors",
                channels: [
                    "ESPN 2"
                ],
                time: "00:00"
            }
        ],
        "2023-01-26": [
            {
                homeTeam: "Chicago Bulls",
                awayTeam: "Charlotte Hornets",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "21:30"
            },
            {
                homeTeam: "Dallas Mavericks",
                awayTeam: "Phoenix Suns",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "00:00"
            }
        ],
        "2023-01-27": [
            {
                homeTeam: "Memphis Grizzlies",
                awayTeam: "Minnesota Timberwolves",
                channels: [
                    "ESPN 2"
                ],
                time: "21:30"
            }
        ],
        "2023-01-28": [
            {
                homeTeam: "Denver Nuggets",
                awayTeam: "Philadelphia 76ers",
                channels: [
                    "ESPN 2"
                ],
                time: "17:00"
            },
            {
                homeTeam: "New York Knicks",
                awayTeam: "Brooklyn Nets",
                channels: [
                    "ESPN 2"
                ],
                time: "19:30"
            },
            {
                homeTeam: "Los Angeles Clippers",
                awayTeam: "Atlanta Hawks",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "21:30"
            }
        ],
        "2023-01-30": [
            {
                homeTeam: "Toronto Raptors",
                awayTeam: "Phoenix Suns",
                channels: [
                    "Band",
                    "TNT",
                    "SporTV 2",
                    "Gaules",
                    "Facebook da CNN Brasil"
                ],
                time: "23:00"
            }
        ],
        "2023-01-31": [
            {
                homeTeam: "Los Angeles Lakers",
                awayTeam: "New York Knicks",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "21:30"
            },
            {
                homeTeam: "New Orleans Pelicans",
                awayTeam: "Denver Nuggets",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "00:00"
            }
        ],
        "2023-02-01": [
            {
                homeTeam: "Brooklyn Nets",
                awayTeam: "Boston Celtics",
                channels: [
                    "ESPN 2"
                ],
                time: "21:30"
            }
        ],
        "2023-02-02": [
            {
                homeTeam: "Memphis Grizzlies",
                awayTeam: "Cleveland Cavaliers",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "21:30"
            },
            {
                homeTeam: "Los Angeles Clippers",
                awayTeam: "Milwaukee Bucks",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "00:00"
            }
        ],
        "2023-02-04": [
            {
                homeTeam: "Los Angeles Clippers",
                awayTeam: "New York Knicks",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "21:00"
            },
            {
                homeTeam: "Dallas Mavericks",
                awayTeam: "Golden State Warriors",
                channels: [
                    "ESPN 2"
                ],
                time: "22:30"
            }
        ],
        "2023-02-05": [
            {
                homeTeam: "Philadelphia 76ers",
                awayTeam: "New York Knicks",
                channels: [
                    "ESPN 2"
                ],
                time: "20:00"
            },
            {
                homeTeam: "Denver Nuggets",
                awayTeam: "Minnesota Timberwolves",
                channels: [
                    "TNT",
                    "SporTV 2",
                    "Gaules",
                    "Facebook da CNN Brasil"
                ],
                time: "21:00"
            }
        ],
        "2023-02-06": [
            {
                homeTeam: "Milwaukee Bucks",
                awayTeam: "Portland Trail Blazers",
                channels: [
                    "Band",
                    "TNT",
                    "SporTV 2",
                    "Gaules",
                    "Facebook da CNN Brasil"
                ],
                time: "00:00"
            }
        ],
        "2023-02-07": [
            {
                homeTeam: "Atlanta Hawks",
                awayTeam: "New Orleans Pelicans",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "21:30"
            },
            {
                homeTeam: "Minnesota Timberwolves",
                awayTeam: "Denver Nuggets",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "00:00"
            }
        ],
        "2023-02-08": [
            {
                homeTeam: "Philadelphia 76ers",
                awayTeam: "Boston Celtics",
                channels: [
                    "ESPN 2"
                ],
                time: "21:30"
            },
            {
                homeTeam: "Dallas Mavericks",
                awayTeam: "Los Angeles Clippers",
                channels: [
                    "ESPN 2"
                ],
                time: "00:00"
            }
        ],
        "2023-02-09": [
            {
                homeTeam: "Chicago Bulls",
                awayTeam: "Brooklyn Nets",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "21:30"
            },
            {
                homeTeam: "Milwaukee Bucks",
                awayTeam: "Los Angeles Lakers",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "00:00"
            }
        ],
        "2023-02-10": [
            {
                homeTeam: "Charlotte Hornets",
                awayTeam: "Boston Celtics",
                channels: [
                    "ESPN 2"
                ],
                time: "21:30"
            },
            {
                homeTeam: "Cleveland Cavaliers",
                awayTeam: "New Orleans Pelicans",
                channels: [
                    "ESPN 2"
                ],
                time: "00:00"
            }
        ],
        "2023-02-11": [
            {
                homeTeam: "Chicago Bulls",
                awayTeam: "Cleveland Cavaliers",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "22:00"
            },
            {
                homeTeam: "Los Angeles Lakers",
                awayTeam: "Golden State Warriors",
                channels: [
                    "ESPN 2"
                ],
                time: "22:30"
            }
        ],
        "2023-02-12": [
            {
                homeTeam: "Memphis Grizzlies",
                awayTeam: "Boston Celtics",
                channels: [
                    "ESPN 2"
                ],
                time: "16:00"
            }
        ],
        "2023-02-13": [
            {
                homeTeam: "Washington Wizards",
                awayTeam: "Golden State Warriors",
                channels: [
                    "Band",
                    "TNT",
                    "SporTV 2",
                    "Gaules",
                    "Facebook da CNN Brasil"
                ],
                time: "00:00"
            }
        ],
        "2023-02-14": [
            {
                homeTeam: "Boston Celtics",
                awayTeam: "Milwaukee Bucks",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "21:30"
            },
            {
                homeTeam: "Golden State Warriors",
                awayTeam: "Los Angeles Clippers",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "00:00"
            }
        ],
        "2023-02-15": [
            {
                homeTeam: "Miami Heat",
                awayTeam: "Brooklyn Nets",
                channels: [
                    "ESPN 2"
                ],
                time: "21:30"
            },
            {
                homeTeam: "New Orleans Pelicans",
                awayTeam: "Los Angeles Lakers",
                channels: [
                    "ESPN 2"
                ],
                time: "00:00"
            }
        ],
        "2023-02-16": [
            {
                homeTeam: "Milwaukee Bucks",
                awayTeam: "Chicago Bulls",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "21:30"
            },
            {
                homeTeam: "Los Angeles Clippers",
                awayTeam: "Phoenix Suns",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "00:00"
            }
        ],
        "2023-02-23": [
            {
                homeTeam: "Memphis Grizzlies",
                awayTeam: "Philadelphia 76ers",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "21:30"
            },
            {
                homeTeam: "Golden State Warriors",
                awayTeam: "Los Angeles Lakers",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "00:00"
            }
        ],
        "2023-02-24": [
            {
                homeTeam: "Miami Heat",
                awayTeam: "Milwaukee Bucks",
                channels: [
                    "ESPN 2"
                ],
                time: "21:30"
            },
            {
                homeTeam: "Brooklyn Nets",
                awayTeam: "Chicago Bulls",
                channels: [
                    "ESPN 2"
                ],
                time: "00:00"
            }
        ],
        "2023-02-25": [
            {
                homeTeam: "Denver Nuggets",
                awayTeam: "Memphis Grizzlies",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "22:00"
            },
            {
                homeTeam: "Boston Celtics",
                awayTeam: "Philadelphia 76ers",
                channels: [
                    "ESPN 2"
                ],
                time: "22:30"
            }
        ],
        "2023-02-26": [
            {
                homeTeam: "Phoenix Suns",
                awayTeam: "Milwaukee Bucks",
                channels: [
                    "ESPN 2"
                ],
                time: "15:00"
            },
            {
                homeTeam: "Los Angeles Lakers",
                awayTeam: "Dallas Mavericks",
                channels: [
                    "ESPN 2"
                ],
                time: "17:30"
            },
            {
                homeTeam: "Minnesota Timberwolves",
                awayTeam: "Golden State Warriors",
                channels: [
                    "ESPN 2"
                ],
                time: "21:30"
            },
            {
                homeTeam: "Los Angeles Clippers",
                awayTeam: "Denver Nuggets",
                channels: [
                    "ESPN 2"
                ],
                time: "00:00"
            }
        ],
        "2023-02-28": [
            {
                homeTeam: "Washington Wizards",
                awayTeam: "Atlanta Hawks",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "21:30"
            },
            {
                homeTeam: "Minnesota Timberwolves",
                awayTeam: "Los Angeles Clippers",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "00:00"
            }
        ],
        "2023-03-01": [
            {
                homeTeam: "Cleveland Cavaliers",
                awayTeam: "Boston Celtics",
                channels: [
                    "ESPN 2"
                ],
                time: "21:30"
            },
            {
                homeTeam: "New Orleans Pelicans",
                awayTeam: "Portland Trail Blazers",
                channels: [
                    "ESPN 2"
                ],
                time: "00:00"
            }
        ],
        "2023-03-02": [
            {
                homeTeam: "Philadelphia 76ers",
                awayTeam: "Dallas Mavericks",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "21:30"
            },
            {
                homeTeam: "Los Angeles Clippers",
                awayTeam: "Golden State Warriors",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "00:00"
            }
        ],
        "2023-03-03": [
            {
                homeTeam: "Brooklyn Nets",
                awayTeam: "Boston Celtics",
                channels: [
                    "ESPN 2"
                ],
                time: "21:30"
            },
            {
                homeTeam: "Memphis Grizzlies",
                awayTeam: "Denver Nuggets",
                channels: [
                    "ESPN 2"
                ],
                time: "00:00"
            }
        ],
        "2023-03-04": [
            {
                homeTeam: "Atlanta Hawks",
                awayTeam: "Miami Heat",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "22:00"
            },
            {
                homeTeam: "Philadelphia 76ers",
                awayTeam: "Milwaukee Bucks",
                channels: [
                    "ESPN 2"
                ],
                time: "22:30"
            }
        ],
        "2023-03-05": [
            {
                homeTeam: "Phoenix Suns",
                awayTeam: "Dallas Mavericks",
                channels: [
                    "ESPN 2"
                ],
                time: "15:00"
            },
            {
                homeTeam: "Golden State Warriors",
                awayTeam: "Los Angeles Lakers",
                channels: [
                    "ESPN 2"
                ],
                time: "17:30"
            },
            {
                homeTeam: "Charlotte Hornets",
                awayTeam: "Brooklyn Nets",
                channels: [
                    "TNT",
                    "SporTV 2",
                    "Gaules",
                    "Facebook da CNN Brasil"
                ],
                time: "20:00"
            },
            {
                homeTeam: "New York Knicks",
                awayTeam: "Boston Celtics",
                channels: [
                    "ESPN 2"
                ],
                time: "21:30"
            },
            {
                homeTeam: "Memphis Grizzlies",
                awayTeam: "Los Angeles Clippers",
                channels: [
                    "ESPN 2"
                ],
                time: "00:00"
            }
        ],
        "2023-03-06": [
            {
                homeTeam: "Toronto Raptors",
                awayTeam: "Denver Nuggets",
                channels: [
                    "Band",
                    "TNT",
                    "SporTV 2",
                    "Gaules",
                    "Facebook da CNN Brasil"
                ],
                time: "23:00"
            }
        ],
        "2023-03-07": [
            {
                homeTeam: "Philadelphia 76ers",
                awayTeam: "Minnesota Timberwolves",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "21:30"
            },
            {
                homeTeam: "Memphis Grizzlies",
                awayTeam: "Los Angeles Lakers",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "00:00"
            }
        ],
        "2023-03-08": [
            {
                homeTeam: "Dallas Mavericks",
                awayTeam: "New Orleans Pelicans",
                channels: [
                    "ESPN 2"
                ],
                time: "21:30"
            },
            {
                homeTeam: "Toronto Raptors",
                awayTeam: "Los Angeles Clippers",
                channels: [
                    "ESPN 2"
                ],
                time: "00:00"
            }
        ],
        "2023-03-09": [
            {
                homeTeam: "Brooklyn Nets",
                awayTeam: "Milwaukee Bucks",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "21:30"
            },
            {
                homeTeam: "Golden State Warriors",
                awayTeam: "Memphis Grizzlies",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "00:00"
            }
        ],
        "2023-03-10": [
            {
                homeTeam: "Toronto Raptors",
                awayTeam: "Los Angeles Lakers",
                channels: [
                    "ESPN 2"
                ],
                time: "00:00"
            }
        ],
        "2023-03-11": [
            {
                homeTeam: "Dallas Mavericks",
                awayTeam: "Memphis Grizzlies",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "22:00"
            },
            {
                homeTeam: "Milwaukee Bucks",
                awayTeam: "Golden State Warriors",
                channels: [
                    "ESPN 2"
                ],
                time: "22:30"
            }
        ],
        "2023-03-12": [
            {
                homeTeam: "New York Knicks",
                awayTeam: "Los Angeles Lakers",
                channels: [
                    "ESPN 2"
                ],
                time: "22:00"
            }
        ],
        "2023-03-13": [
            {
                homeTeam: "Memphis Grizzlies",
                awayTeam: "Dallas Mavericks",
                channels: [
                    "ESPN 2"
                ],
                time: "20:30"
            },
            {
                homeTeam: "Phoenix Suns",
                awayTeam: "Golden State Warriors",
                channels: [
                    "ESPN 2"
                ],
                time: "23:00"
            },
            {
                homeTeam: "Milwaukee Bucks",
                awayTeam: "Sacramento Kings",
                channels: [
                    "Band",
                    "TNT",
                    "SporTV 2",
                    "Gaules",
                    "Facebook da CNN Brasil"
                ],
                time: "23:00"
            }
        ],
        "2023-03-14": [
            {
                homeTeam: "Denver Nuggets",
                awayTeam: "Toronto Raptors",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "20:30"
            },
            {
                homeTeam: "Milwaukee Bucks",
                awayTeam: "Phoenix Suns",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "23:00"
            }
        ],
        "2023-03-15": [
            {
                homeTeam: "Philadelphia 76ers",
                awayTeam: "Cleveland Cavaliers",
                channels: [
                    "ESPN 2"
                ],
                time: "20:30"
            },
            {
                homeTeam: "Golden State Warriors",
                awayTeam: "Los Angeles Clippers",
                channels: [
                    "ESPN 2"
                ],
                time: "23:00"
            }
        ],
        "2023-03-16": [
            {
                homeTeam: "Denver Nuggets",
                awayTeam: "Detroit Pistons",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "20:00"
            },
            {
                homeTeam: "Orlando Magic",
                awayTeam: "Phoenix Suns",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "23:00"
            }
        ],
        "2023-03-17": [
            {
                homeTeam: "Dallas Mavericks",
                awayTeam: "Los Angeles Lakers",
                channels: [
                    "ESPN 2"
                ],
                time: "23:30"
            }
        ],
        "2023-03-18": [
            {
                homeTeam: "Golden State Warriors",
                awayTeam: "Memphis Grizzlies",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "21:00"
            }
        ],
        "2023-03-19": [
            {
                homeTeam: "Orlando Magic",
                awayTeam: "Los Angeles Lakers",
                channels: [
                    "TNT",
                    "SporTV 2",
                    "Gaules",
                    "Facebook da CNN Brasil"
                ],
                time: "22:30"
            }
        ],
        "2023-03-21": [
            {
                homeTeam: "Cleveland Cavaliers",
                awayTeam: "Brooklyn Nets",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "20:30"
            },
            {
                homeTeam: "Boston Celtics",
                awayTeam: "Sacramento Kings",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "23:00"
            }
        ],
        "2023-03-22": [
            {
                homeTeam: "Golden State Warriors",
                awayTeam: "Dallas Mavericks",
                channels: [
                    "ESPN 2"
                ],
                time: "20:30"
            },
            {
                homeTeam: "Phoenix Suns",
                awayTeam: "Los Angeles Lakers",
                channels: [
                    "ESPN 2"
                ],
                time: "23:00"
            }
        ],
        "2023-03-23": [
            {
                homeTeam: "New York Knicks",
                awayTeam: "Orlando Magic",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "20:00"
            },
            {
                homeTeam: "Oklahoma City Thunder",
                awayTeam: "Los Angeles Clippers",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "23:30"
            }
        ],
        "2023-03-24": [
            {
                homeTeam: "Philadelphia 76ers",
                awayTeam: "Golden State Warriors",
                channels: [
                    "ESPN 2"
                ],
                time: "23:00"
            }
        ],
        "2023-03-25": [
            {
                homeTeam: "Brooklyn Nets",
                awayTeam: "Miami Heat",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "21:00"
            },
            {
                homeTeam: "Milwaukee Bucks",
                awayTeam: "Denver Nuggets",
                channels: [
                    "ESPN 2"
                ],
                time: "22:00"
            }
        ],
        "2023-03-26": [
            {
                homeTeam: "Minnesota Timberwolves",
                awayTeam: "Golden State Warriors",
                channels: [
                    "TNT",
                    "SporTV 2",
                    "Gaules",
                    "Facebook da CNN Brasil"
                ],
                time: "21:30"
            }
        ],
        "2023-03-27": [
            {
                homeTeam: "Chicago Bulls",
                awayTeam: "Los Angeles Clippers",
                channels: [
                    "Band",
                    "TNT",
                    "SporTV 2",
                    "Gaules",
                    "Facebook da CNN Brasil"
                ],
                time: "23:30"
            }
        ],
        "2023-03-28": [
            {
                homeTeam: "Miami Heat",
                awayTeam: "Toronto Raptors",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "20:30"
            },
            {
                homeTeam: "New Orleans Pelicans",
                awayTeam: "Golden State Warriors",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "23:00"
            }
        ],
        "2023-03-29": [
            {
                homeTeam: "Dallas Mavericks",
                awayTeam: "Philadelphia 76ers",
                channels: [
                    "ESPN 2"
                ],
                time: "20:30"
            },
            {
                homeTeam: "Minnesota Timberwolves",
                awayTeam: "Phoenix Suns",
                channels: [
                    "ESPN 2"
                ],
                time: "23:00"
            }
        ],
        "2023-03-30": [
            {
                homeTeam: "Boston Celtics",
                awayTeam: "Milwaukee Bucks",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "20:30"
            },
            {
                homeTeam: "New Orleans Pelicans",
                awayTeam: "Denver Nuggets",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "23:00"
            }
        ],
        "2023-03-31": [
            {
                homeTeam: "Los Angeles Clippers",
                awayTeam: "Memphis Grizzlies",
                channels: [
                    "ESPN 2"
                ],
                time: "21:00"
            }
        ],
        "2023-04-01": [
            {
                homeTeam: "Dallas Mavericks",
                awayTeam: "Miami Heat",
                channels: [
                    "ESPN 2"
                ],
                time: "20:30"
            },
            {
                homeTeam: "Los Angeles Clippers",
                awayTeam: "New Orleans Pelicans",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "21:30"
            }
        ],
        "2023-04-02": [
            {
                homeTeam: "Philadelphia 76ers",
                awayTeam: "Milwaukee Bucks",
                channels: [
                    "TNT",
                    "SporTV 2",
                    "Gaules",
                    "Facebook da CNN Brasil"
                ],
                time: "21:00"
            }
        ],
        "2023-04-04": [
            {
                homeTeam: "Boston Celtics",
                awayTeam: "Philadelphia 76ers",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "21:00"
            }
        ],
        "2023-04-05": [
            {
                homeTeam: "Chicago Bulls",
                awayTeam: "Milwaukee Bucks",
                channels: [
                    "ESPN 2"
                ],
                time: "20:30"
            },
            {
                homeTeam: "Los Angeles Lakers",
                awayTeam: "Los Angeles Clippers",
                channels: [
                    "ESPN 2"
                ],
                time: "23:00"
            }
        ],
        "2023-04-06": [
            {
                homeTeam: "Miami Heat",
                awayTeam: "Philadelphia 76ers",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "20:30"
            },
            {
                homeTeam: "Denver Nuggets",
                awayTeam: "Phoenix Suns",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "23:00"
            }
        ],
        "2023-04-07": [
            {
                homeTeam: "Phoenix Suns",
                awayTeam: "Los Angeles Lakers",
                channels: [
                    "ESPN 2"
                ],
                time: "23:30"
            }
        ],
        "2023-04-08": [
            {
                homeTeam: "Denver Nuggets",
                awayTeam: "Utah Jazz",
                channels: [
                    "ESPN 2"
                ],
                time: "16:30"
            },
            {
                homeTeam: "Portland Trail Blazers",
                awayTeam: "Los Angeles Clippers",
                channels: [
                    "Amazon Prime Video"
                ],
                time: "17:00"
            }
        ],
        "2023-04-09": [
            {
                homeTeam: "Golden State Warriors",
                awayTeam: "Portland Trail Blazers",
                channels: [
                    "TNT",
                    "SporTV 2",
                    "Gaules",
                    "Facebook da CNN Brasil"
                ],
                time: "16:30"
            }
        ]
    }
}