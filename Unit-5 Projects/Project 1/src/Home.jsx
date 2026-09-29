import React, { useMemo } from 'react'
import { useTasks } from './TasksContext.jsx'
import TaskCard from './TaskCard.jsx'
import { todayISO, formatFriendly } from './dateUtils.js'
import './Pages.css'

export default function Home() {
  const { tasks, toggleTask } = useTasks()
  const today = todayISO()

  const recentlyCompleted = useMemo(
    () =>
      tasks
        .filter((t) => t.completed)
        .sort((a, b) => new Date(b.completedAt) - new Date(a.completedAt))
        .slice(0, 6),
    [tasks]
  )

  const upcoming = useMemo(
    () =>
      tasks
        .filter(
          (t) =>
            !t.completed &&
            (t.type === 'weekly' || t.type === 'important') &&
            t.date >= today
        )
        .sort((a, b) => a.date.localeCompare(b.date))
        .slice(0, 6),
    [tasks, today]
  )

  return (
    <div>
      <div className="page-header">
        <h1>Welcome back</h1>
        <p>Here's what you've finished lately, and what's coming up.</p>
      </div>

      <div className="page-grid">
        <section className="card page-panel">
          <h3 className="section-title">Recently completed</h3>
          {recentlyCompleted.length === 0 ? (
            <div className="empty-state">Nothing completed yet. Go check something off!</div>
          ) : (
            recentlyCompleted.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onToggle={toggleTask}
                meta={task.completedAt ? `Completed ${formatFriendly(task.date)}` : null}
              />
            ))
          )}
        </section>

        <section className="card page-panel">
          <h3 className="section-title">Upcoming</h3>
          {upcoming.length === 0 ? (
            <div className="empty-state">No upcoming weekly or important tasks.</div>
          ) : (
            upcoming.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onToggle={toggleTask}
                meta={formatFriendly(task.date)}
              />
            ))
          )}
        </section>
      </div>
    </div>
  )
}
