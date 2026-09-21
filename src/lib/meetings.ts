import { MEETINGS, type Meeting } from '../config'

const CLUB_TZ = 'America/Chicago'

const clockFormat = new Intl.DateTimeFormat('en-CA', {
  timeZone: CLUB_TZ,
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  hourCycle: 'h23',
})

const dayFormat = (opts: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat('en-US', { timeZone: 'UTC', ...opts })

function clubClock(now: Date) {
  const p = Object.fromEntries(clockFormat.formatToParts(now).map((x) => [x.type, x.value]))
  return { date: `${p.year}-${p.month}-${p.day}`, time: `${p.hour}:${p.minute}` }
}

const dayOf = (date: string) => new Date(`${date}T00:00:00Z`)

export function upcomingMeetings(now: Date = new Date()): Meeting[] {
  const { date, time } = clubClock(now)
  const stamp = `${date}T${time}`
  return MEETINGS.filter((m) => `${m.date}T${m.end}` > stamp).sort((a, b) =>
    `${a.date}T${a.start}`.localeCompare(`${b.date}T${b.start}`),
  )
}

export function dateParts(date: string) {
  const d = dayOf(date)
  return {
    dow: dayFormat({ weekday: 'short' }).format(d).toLowerCase(),
    day: dayFormat({ day: 'numeric' }).format(d),
    mon: dayFormat({ month: 'short' }).format(d).toLowerCase(),
  }
}

function clock(t: string) {
  const [h, m] = t.split(':').map(Number)
  const hour = h % 12 || 12
  return { label: m === 0 ? `${hour}` : `${hour}:${String(m).padStart(2, '0')}`, suffix: h >= 12 ? 'pm' : 'am' }
}

export function timeRange(start: string, end: string) {
  const s = clock(start)
  const e = clock(end)
  return s.suffix === e.suffix
    ? `${s.label} - ${e.label} ${e.suffix}`
    : `${s.label} ${s.suffix} - ${e.label} ${e.suffix}`
}

export function relativeDay(date: string, now: Date = new Date()) {
  const days = Math.round((dayOf(date).getTime() - dayOf(clubClock(now).date).getTime()) / 86_400_000)
  if (days <= 0) return 'today'
  if (days === 1) return 'tomorrow'
  if (days < 14) return `in ${days} days`
  return `in ${Math.round(days / 7)} weeks`
}

export function nextMeetingLabel(now: Date = new Date()) {
  const next = upcomingMeetings(now)[0]
  if (!next) return null
  const { dow, mon, day } = dateParts(next.date)
  return `${dow} ${mon} ${day} - ${next.room}`
}

export function calendarUrl(m: Meeting) {
  const stamp = (t: string) => `${m.date.replace(/-/g, '')}T${t.replace(':', '')}00`
  const q = new URLSearchParams({
    action: 'TEMPLATE',
    text: 'Crimson Tiles',
    dates: `${stamp(m.start)}/${stamp(m.end)}`,
    ctz: CLUB_TZ,
    location: `${m.room}, ${m.building}, University of Alabama`,
  })
  return `https://calendar.google.com/calendar/render?${q}`
}
