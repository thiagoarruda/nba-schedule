export interface Team {
  fullName: string;
  shortName: string;
  logoFile: string;
}

export class Teams {
  public static getTeam(fullName: string): Team {
    return this.teamData.find((team => team.fullName === fullName)) ?? { fullName: "Time Desconhecido", shortName: "Desconhecido", logoFile: 'unknown.svg' };
  }

  private static teamData: Team[] = [
    {
      fullName: 'Philadelphia 76ers',
      shortName: '76ers',
      logoFile: '76ers.svg'
    },
    {
      fullName: 'Boston Celtics',
      shortName: 'Celtics',
      logoFile: 'celtics.svg'
    },
    {
      fullName: 'Los Angeles Lakers',
      shortName: 'Lakers',
      logoFile: 'lakers.svg'
    },
    {
      fullName: 'Golden State Warriors',
      shortName: 'Warriors',
      logoFile: 'warriors.svg'
    },
    {
      fullName: 'New York Knicks',
      shortName: 'Knicks',
      logoFile: 'knicks.svg'
    },
    {
      fullName: 'Memphis Grizzlies',
      shortName: 'Grizzlies',
      logoFile: 'grizzlies.svg'
    },
    {
      fullName: 'Dallas Mavericks',
      shortName: 'Mavericks',
      logoFile: 'mavericks.svg'
    },
    { fullName: 'Phoenix Suns', shortName: 'Suns', logoFile: 'suns.svg' },
    {
      fullName: 'Milwaukee Bucks',
      shortName: 'Bucks',
      logoFile: 'bucks.svg'
    },
    {
      fullName: 'Los Angeles Clippers',
      shortName: 'Clippers',
      logoFile: 'clippers.svg'
    },
    { fullName: 'Miami Heat', shortName: 'Heat', logoFile: 'heat.svg' },
    {
      fullName: 'Denver Nuggets',
      shortName: 'Nuggets',
      logoFile: 'nuggets.svg'
    },
    {
      fullName: 'Portland Trail Blazers',
      shortName: 'Trail Blazers',
      logoFile: 'trailblazers.svg'
    },
    {
      fullName: 'New Orleans Pelicans',
      shortName: 'Pelicans',
      logoFile: 'pelicans.svg'
    },
    { fullName: 'Brooklyn Nets', shortName: 'Nets', logoFile: 'nets.svg' },
    {
      fullName: 'Indiana Pacers',
      shortName: 'Pacers',
      logoFile: 'pacers.svg'
    },
    {
      fullName: 'Washington Wizards',
      shortName: 'Wizards',
      logoFile: 'wizards.svg'
    },
    { fullName: 'Utah Jazz', shortName: 'Jazz', logoFile: 'jazz.svg' },
    {
      fullName: 'Houston Rockets',
      shortName: 'Rockets',
      logoFile: 'rockets.svg'
    },
    {
      fullName: 'Orlando Magic',
      shortName: 'Magic',
      logoFile: 'magic.svg'
    },
    {
      fullName: 'Oklahoma City Thunder',
      shortName: 'Thunder',
      logoFile: 'thunder.svg'
    },
    {
      fullName: 'Minnesota Timberwolves',
      shortName: 'Timberwolves',
      logoFile: 'timberwolves.svg'
    },
    {
      fullName: 'Cleveland Cavaliers',
      shortName: 'Cavaliers',
      logoFile: 'cavaliers.svg'
    },
    {
      fullName: 'Chicago Bulls',
      shortName: 'Bulls',
      logoFile: 'bulls.svg'
    },
    {
      fullName: 'Sacramento Kings',
      shortName: 'Kings',
      logoFile: 'kings.svg'
    },
    {
      fullName: 'Atlanta Hawks',
      shortName: 'Hawks',
      logoFile: 'hawks.svg'
    },
    {
      fullName: 'San Antonio Spurs',
      shortName: 'Spurs',
      logoFile: 'spurs.svg'
    },
    {
      fullName: 'Charlotte Hornets',
      shortName: 'Hornets',
      logoFile: 'hornets.svg'
    },
    {
      fullName: 'Toronto Raptors',
      shortName: 'Raptors',
      logoFile: 'raptors.svg'
    },
    {
      fullName: 'Detroit Pistons',
      shortName: 'Pistons',
      logoFile: 'pistons.svg'
    }
  ]
}