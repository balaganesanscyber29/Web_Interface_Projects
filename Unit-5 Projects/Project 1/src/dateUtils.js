// Small collection of date helpers used across the app.
// No date library needed \u2014 just plain JS Date math.

export function formatISO(date) {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

export function todayISO() {
  return formatISO(new Date())
}

export function parseISO(iso) {
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(y, m - 1, d)
}

export function isSameDay(isoA, isoB) {
  return isoA === isoB
}

// Monday-start week that contains `date`.
export function getStartOfWeek(date = new Date()) {
  const d = new Date(date)
  const day = d.getDay() // 0 = Sunday ... 6 = Saturday
  const diff = (day === 0 ? -6 : 1) - day // shift so Monday is day 0
  d.setDate(d.getDate() + diff)
  d.setHours(0, 0, 0, 0)
  return d
}

export function getWeekDates(date = new Date()) {
  const start = getStartOfWeek(date)
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(start)
    d.setDate(start.getDate() + i)
    return d
  })
}

export function isDateInCurrentWeek(iso) {
  const target = parseISO(iso)
  const weekDates = getWeekDates(new Date())
  const startISO = formatISO(weekDates[0])
  const endISO = formatISO(weekDates[6])
  return iso >= startISO && iso <= endISO
}

export const WEEKDAY_LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
export const MONTH_LABELS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

// Returns a 6x7 grid of Date objects covering the full month view
// (including the trailing/leading days from neighbor months).
export function getMonthMatrix(year, month) {
  const firstOfMonth = new Date(year, month, 1)
  const startDate = getStartOfWeek(firstOfMonth)

  const matrix = []
  let cursor = new Date(startDate)
  for (let week = 0; week < 6; week++) {
    const row = []
    for (let day = 0; day < 7; day++) {
      row.push(new Date(cursor))
      cursor.setDate(cursor.getDate() + 1)
    }
    matrix.push(row)
  }
  return matrix
}

export function formatFriendly(iso) {
  const d = parseISO(iso)
  return d.toLocaleDateString(undefined, {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  })
}
