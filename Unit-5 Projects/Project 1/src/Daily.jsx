import React, { useMemo } from 'react'
import { useTasks } from './TasksContext.jsx'
import TaskCard from './TaskCard.jsx'
import TaskForm from './TaskForm.jsx'
import { todayISO } from './dateUtils.js'
import './Pages.css'

export default function Daily() {
  const { tasks, addTask, toggleTask, deleteTask } = useTasks()
  const today = todayISO()

  const todaysTasks = useMemo(
    () => tasks.filter((t) => t.type === 'daily' && t.date === today),
    [tasks, today]
  )
  const defaults = todaysTasks.filter((t) => t.isDefault)
  const extras = todaysTasks.filter((t) => !t.isDefault)

  function handleAdd(text) {
    addTask({ text, type: 'daily', date: today, isDefault: false })
  }

  return (
    <div>
      <div className="page-header">
        <h1>Daily</h1>
        <p>Your routine for today, plus anything extra you add.</p>
      </div>

      <div className="page-grid">
        <section className="card page-panel">
          <h3 className="section-title">Every day</h3>
          {defaults.length === 0 ? (
            <div className="empty-state">No default tasks set up.</div>
          ) : (
            defaults.map((task) => (
              <TaskCard key={task.id} task={task} onToggle={toggleTask} />
            ))
          )}
        </section>

        <section className="card page-panel">
          <h3 className="section-title">Just for today</h3>
          <TaskForm onAdd={handleAdd} placeholder="Add a task for today\u2026" />
          {extras.length === 0 ? (
            <div className="empty-state">No extra tasks yet. Add one above.</div>
          ) : (
            extras.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onToggle={toggleTask}
                onDelete={deleteTask}
              />
            ))
          )}
        </section>
      </div>
    </div>
  )
}
