import React, { useMemo } from 'react'
import { useTasks } from './TasksContext.jsx'
import './Pages.css'

export default function Dashboard() {
  const { tasks } = useTasks()

  const stats = useMemo(() => {
    const total = tasks.length
    const completed = tasks.filter((t) => t.completed).length
    const pending = total - completed
    const important = tasks.filter((t) => t.type === 'important').length
    const importantDone = tasks.filter((t) => t.type === 'important' && t.completed).length
    const rate = total === 0 ? 0 : Math.round((completed / total) * 100)

    const byType = ['daily', 'weekly', 'important'].map((type) => {
      const typeTasks = tasks.filter((t) => t.type === type)
      const typeDone = typeTasks.filter((t) => t.completed).length
      return {
        type,
        total: typeTasks.length,
        done: typeDone,
        rate: typeTasks.length === 0 ? 0 : Math.round((typeDone / typeTasks.length) * 100),
      }
    })

    return { total, completed, pending, important, importantDone, rate, byType }
  }, [tasks])

  return (
    <div>
      <div className="page-header">
        <h1>Dashboard</h1>
        <p>A quick look at how things are going.</p>
      </div>

      <div className="stat-grid">
        <div className="card stat-card">
          <div className="stat-value">{stats.total}</div>
          <div className="stat-label">Total tasks</div>
        </div>
        <div className="card stat-card">
          <div className="stat-value">{stats.completed}</div>
          <div className="stat-label">Completed</div>
        </div>
        <div className="card stat-card">
          <div className="stat-value">{stats.pending}</div>
          <div className="stat-label">Pending</div>
        </div>
        <div className="card stat-card">
          <div className="stat-value">{stats.important}</div>
          <div className="stat-label">Important</div>
        </div>
      </div>

      <div className="card page-panel">
        <h3 className="section-title">Overall progress</h3>
        <div className="dashboard-progress-row">
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${stats.rate}%` }} />
          </div>
          <span className="dashboard-progress-label">{stats.rate}%</span>
        </div>

        <h3 className="section-title" style={{ marginTop: 24 }}>By category</h3>
        {stats.byType.map(({ type, total, done, rate }) => (
          <div key={type} className="dashboard-category-row">
            <span className="dashboard-category-name">{type}</span>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${rate}%` }} />
            </div>
            <span className="dashboard-category-count">{done}/{total}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
