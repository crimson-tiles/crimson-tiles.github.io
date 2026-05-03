import meet1 from './assets/meetups/meet1.webp'
import meet3 from './assets/meetups/meet3.webp'
import meet4 from './assets/meetups/meet4.webp'
import meet5 from './assets/meetups/meet5.webp'

export const DISCORD_URL = 'https://discord.gg/VfrKPsDtpq'

export const TRACKER_URL =
  'https://docs.google.com/spreadsheets/d/1U3zPgrLYeT6eOGruk7jHX344aFOSDj1Tq0ZzKItFYgk/edit'

export const LEADERBOARD_CSV_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vTQJlnZV3wXdJOYVsvENnTuGrL3C1_YIgsQXZ5TcOspjEW2HzFAJfeLZvLswc1Ll6JPefqV_ygAmwxJ/pub?output=csv'

export const GAMES_CSV_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vTQJlnZV3wXdJOYVsvENnTuGrL3C1_YIgsQXZ5TcOspjEW2HzFAJfeLZvLswc1Ll6JPefqV_ygAmwxJ/pub?gid=914931465&single=true&output=csv'

export const RANKED_MIN_GAMES = 5

export type Season = {
  id: string
  label: string
  start: string
  end: string
}

// UA academic-calendar seasons. start/end are approximate boundaries — tighten if it ever matters.
export const SEASONS: Season[] = [
  { id: 'spring-2026', label: 'spring 2026', start: '2026-01-12', end: '2026-05-08' },
]

export function currentSeason(today: Date = new Date()): Season {
  const t = today.toISOString().slice(0, 10)
  return SEASONS.find((s) => t >= s.start && t <= s.end) ?? SEASONS[SEASONS.length - 1]
}

export function previousSeasons(today: Date = new Date()): Season[] {
  const cur = currentSeason(today)
  return SEASONS.filter((s) => s.end < cur.start).reverse()
}

export const SEASON_LABEL = currentSeason().label

export const GITHUB_URL = 'https://github.com/crimson-tiles'

export const NEXT_MEETING = 'tbd - keep an eye on discord'

// dot next to "next:" in the nav. online = regular schedule running,
// away = ad-hoc / between seasons / location uncertain, busy = off / canceled.
export const MEETING_DOT_PRESETS = {
  online: '#4ADE80',
  away: '#FACC15',
  busy: '#EF4444',
} as const

export type MeetingDotStatus = keyof typeof MEETING_DOT_PRESETS

export const MEETING_DOT_STATUS: MeetingDotStatus = 'away'
export const MEETING_DOT_COLOR = MEETING_DOT_PRESETS[MEETING_DOT_STATUS]

export type MeetupItem = {
  src: string
  alt: string
  position?: string
}

export type Officer = {
  role: string
  name: string
  discord?: string
}

export type ScheduleItem = {
  title: string
  time: string
  location: string
  description: string
}

export type ProjectStatus = 'shipped' | 'in-progress' | 'wanted'

export type Project = {
  name: string
  status: ProjectStatus
  blurb: string
  tech?: string
  url?: string
}

export const MEETUPS: MeetupItem[] = [
  { src: meet5, alt: 'jeffrey commits a chombo' },
  { src: meet4, alt: 'tim\'s chinitsu sanbaiman' },
  { src: meet1, alt: 'will got a dope ass suuankou', position: '50% 85%' },
  { src: meet3, alt: 'joel\'s first yakuman, thirteen orphans' },
]

export const OFFICERS: Officer[] = [
  { role: 'president', name: 'joseff' },
  { role: 'officer', name: 'will' },
  { role: 'officer', name: 'noah' },
]

export const SCHEDULE: ScheduleItem[] = [
  {
    title: 'mondays on campus',
    time: '6 - 10 pm',
    location: 'UA Student Center',
    description:
      "every week during the semester. beginners welcome every time, we have sets and can teach from scratch. just show up.",
  },
  {
    title: 'house games',
    time: '4-7 nights / week',
    location: "someone's place",
    description:
      "fairly frequent impromptu pickup games at members' houses. ping the discord and someone'll loop you in.",
  },
  {
    title: 'summer',
    time: 'tbd',
    location: 'tbd',
    description:
      "we're still figuring out where and when we'll meet over the summer. it'll be more ad hoc than the semester schedule — keep an eye on discord.",
  },
  {
    title: 'online',
    time: 'ad hoc',
    location: 'Mahjong Soul',
    description:
      "nothing official, but people spin up lobbies in the discord. ping the channel if you want to play.",
  },
]

export const PROJECTS: Project[] = [
  {
    name: 'this website',
    status: 'shipped',
    blurb:
      "what you're looking at. good first-PR territory: typo fixes, copy edits, new sections, animations, dark mode all welcome.",
    tech: 'react, typescript, vite',
    url: 'https://github.com/crimson-tiles/crimson-tiles.github.io',
  },
  {
    name: 'point-stick scoring',
    status: 'in-progress',
    blurb:
      "camera over the table reads point sticks and tracks the score automatically. early prototype, lots of room. we're trying classical CV with color blocking and geometric filtering, but there's interest in training a lightweight ONNX model instead/in addition.",
    tech: 'opencv, python',
  },
  {
    name: 'club discord bot',
    status: 'in-progress',
    blurb:
      "scoring + standings slash commands, with more on the way. joseff's project. don't know rust? perfect excuse to pick it up.",
    tech: 'rust, serenity',
    url: 'https://github.com/crimson-tiles/discord-bot',
  },
  {
    name: 'ELO tracker',
    status: 'shipped',
    blurb:
      "the spreadsheet + published csv that powers the leaderboard, and the python script that logs games and calculates elo",
    tech: 'google sheets',
    url: 'https://crimson-tiles.github.io/#/leaderboard',
  },
]

export const PROJECT_WISHLIST: string[] = [
  'in-browser scoring calculator (han/fu → payouts)',
  'yaku reference page using the tile sprites we already have',
  'tournament bracket page',
  'dark mode',
]

