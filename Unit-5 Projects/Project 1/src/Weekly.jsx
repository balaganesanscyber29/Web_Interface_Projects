import React, { useMemo, useState } from 'react'
import { useTasks } from './TasksContext.jsx'
import TaskCard from './TaskCard.jsx'
import {
  getWeekDates,
  formatISO,
  todayISO,
  WEEKDAY_LABELS,
} from './dateUtils.js'
import './Pages.css'

export default function Weekly() {
  const { tasks, addTask, toggleTask, deleteTask } = useTasks()
  const today = todayISO()
  const weekDates = useMemo(() => getWeekDates(new Date()), [])

  const [text, setText] = useState('')
  const [dayIndex, setDayIndex] = useState(
    Math.max(0, weekDates.findIndex((d) => formatISO(d) === today))
  )

  const weekTasksByDay = weekDates.map((date) => {
    const iso = formatISO(date)
    return {
      iso,
      date,
      tasks: tasks.filter((t) => t.type === 'weekly' && t.date === iso),
    }
  })

  function handleSubmit(e) {
    e.preventDefault()
    if (!text.trim()) return
    const targetISO = formatISO(weekDates[dayIndex])
    addTask({ text, type: 'weekly', date: targetISO })
    setText('')
  }

  return (
    <div>
      <div className="page-header">
        <h1>Weekly</h1>
        <p>Everything planned for this week, Monday through Sunday.</p>
      </div>

      <form className="task-form" onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a task for this week\u2026"
          aria-label="New weekly task"
        />
        <select
          value={dayIndex}
          onChange={(e) => setDayIndex(Number(e.target.value))}
          aria-label="Day of week"
          className="weekly-day-select"
        >
          {weekDates.map((d, i) => (
            <option key={i} value={i}>
              {WEEKDAY_LABELS[i]} {d.getDate()}
            </option>
          ))}
        </select>
        <button type="submit" className="task-form-submit">Add</button>
      </form>

      <div className="weekly-columns">
        {weekTasksByDay.map(({ iso, date, tasks: dayTasks }) => (
          <div key={iso} className={'card weekly-column' + (iso === today ? ' weekly-column-today' : '')}>
            <div className="weekly-column-header">
              <span className="weekly-column-day">{WEEKDAY_LABELS[weekDates.findIndex((d) => formatISO(d) === iso)]}</span>
              <span className="weekly-column-date">{date.getDate()}</span>
            </div>
            {dayTasks.length === 0 ? (
              <div className="empty-state">No tasks</div>
            ) : (
              dayTasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onToggle={toggleTask}
                  onDelete={deleteTask}
                />
              ))
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
