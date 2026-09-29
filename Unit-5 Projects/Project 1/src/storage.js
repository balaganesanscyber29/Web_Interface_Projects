// Simple localStorage helpers. Everything is stored as JSON strings.

const TASKS_KEY = 'tend_tasks_v1'
const DEFAULTS_KEY = 'tend_daily_defaults_v1'

// A task looks like:
// {
//   id: string,
//   text: string,
//   type: 'daily' | 'weekly' | 'important',
//   date: 'YYYY-MM-DD',      // day the task belongs to
//   completed: boolean,
//   completedAt: string | null, // ISO timestamp
//   createdAt: string,          // ISO timestamp
//   isDefault: boolean          // true for recurring daily defaults
// }

export function uid() {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36)
}

export function loadTasks() {
  try {
    const raw = localStorage.getItem(TASKS_KEY)
    return raw ? JSON.parse(raw) : []
  } catch (err) {
    console.error('Could not read tasks from localStorage', err)
    return []
  }
}

export function saveTasks(tasks) {
  try {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks))
  } catch (err) {
    console.error('Could not save tasks to localStorage', err)
  }
}

// Templates for the tasks that should appear every single day.
// Feel free to edit this seed list to fit your own routine.
const DEFAULT_SEED = [
  { id: 'default-1', text: 'Drink a glass of water' },
  { id: 'default-2', text: 'Review today\u2019s schedule' },
  { id: 'default-3', text: 'Tidy up workspace' },
]

export function loadDailyDefaults() {
  try {
    const raw = localStorage.getItem(DEFAULTS_KEY)
    return raw ? JSON.parse(raw) : DEFAULT_SEED
  } catch (err) {
    console.error('Could not read daily defaults from localStorage', err)
    return DEFAULT_SEED
  }
}

export function saveDailyDefaults(defaults) {
  try {
    localStorage.setItem(DEFAULTS_KEY, JSON.stringify(defaults))
  } catch (err) {
    console.error('Could not save daily defaults to localStorage', err)
  }
}
