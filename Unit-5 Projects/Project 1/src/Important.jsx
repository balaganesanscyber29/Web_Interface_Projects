import React, { useMemo, useState } from 'react'
import { useTasks } from './TasksContext.jsx'
import TaskCard from './TaskCard.jsx'
import TaskForm from './TaskForm.jsx'
import Calendar from './Calendar.jsx'
import { todayISO, formatFriendly } from './dateUtils.js'
import './Pages.css'

export default function Important() {
  const { tasks, addTask, toggleTask, deleteTask } = useTasks()
  const [selectedDate, setSelectedDate] = useState(todayISO())

  const importantTasks = useMemo(
    () => tasks.filter((t) => t.type === 'important'),
    [tasks]
  )

  const markedDates = useMemo(
    () => new Set(importantTasks.map((t) => t.date)),
    [importantTasks]
  )

  const tasksForSelectedDate = importantTasks.filter((t) => t.date === selectedDate)

  function handleAdd(text) {
    addTask({ text, type: 'important', date: selectedDate })
  }

  return (
    <div>
      <div className="page-header">
        <h1>Important</h1>
        <p>Pick a date on the calendar to see or add important tasks.</p>
      </div>

      <div className="important-grid">
        <div className="card">
          <Calendar
            selectedDate={selectedDate}
            onSelectDate={setSelectedDate}
            markedDates={markedDates}
          />
        </div>

        <section className="card page-panel">
          <h3 className="section-title">{formatFriendly(selectedDate)}</h3>
          <TaskForm onAdd={handleAdd} placeholder="Add an important task for this date\u2026" />
          {tasksForSelectedDate.length === 0 ? (
            <div className="empty-state">Nothing important set for this date yet.</div>
          ) : (
            tasksForSelectedDate.map((task) => (
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
