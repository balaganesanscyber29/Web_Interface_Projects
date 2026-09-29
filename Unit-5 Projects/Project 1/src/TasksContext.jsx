import React, { createContext, useContext, useEffect, useState } from 'react'
import {
  loadTasks,
  saveTasks,
  loadDailyDefaults,
  uid,
} from './storage.js'
import { todayISO } from './dateUtils.js'

const TasksContext = createContext(null)

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState(() => loadTasks())

  // Persist to localStorage whenever tasks change.
  useEffect(() => {
    saveTasks(tasks)
  }, [tasks])

  // Make sure today's recurring default tasks exist.
  // Runs once on load; if the app stays open past midnight, the
  // Daily page also calls this again so the list catches up.
  useEffect(() => {
    ensureDailyDefaults()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function ensureDailyDefaults() {
    const today = todayISO()
    const templates = loadDailyDefaults()

    setTasks((prev) => {
      const existingIds = new Set(
        prev
          .filter((t) => t.isDefault && t.date === today)
          .map((t) => t.templateId)
      )
      const missing = templates
        .filter((tpl) => !existingIds.has(tpl.id))
        .map((tpl) => ({
          id: uid(),
          templateId: tpl.id,
          text: tpl.text,
          type: 'daily',
          date: today,
          completed: false,
          completedAt: null,
          createdAt: new Date().toISOString(),
          isDefault: true,
        }))
      return missing.length ? [...prev, ...missing] : prev
    })
  }

  function addTask({ text, type, date, isDefault = false }) {
    if (!text || !text.trim()) return
    const newTask = {
      id: uid(),
      templateId: null,
      text: text.trim(),
      type,
      date,
      completed: false,
      completedAt: null,
      createdAt: new Date().toISOString(),
      isDefault,
    }
    setTasks((prev) => [...prev, newTask])
  }

  function toggleTask(id) {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id
          ? {
              ...t,
              completed: !t.completed,
              completedAt: !t.completed ? new Date().toISOString() : null,
            }
          : t
      )
    )
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((t) => t.id !== id))
  }

  const value = {
    tasks,
    addTask,
    toggleTask,
    deleteTask,
    ensureDailyDefaults,
  }

  return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
}

export function useTasks() {
  const ctx = useContext(TasksContext)
  if (!ctx) throw new Error('useTasks must be used inside a TasksProvider')
  return ctx
}
