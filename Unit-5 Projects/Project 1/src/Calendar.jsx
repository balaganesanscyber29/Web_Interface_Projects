import React, { useState } from 'react'
import {
  getMonthMatrix,
  formatISO,
  todayISO,
  WEEKDAY_LABELS,
  MONTH_LABELS,
} from './dateUtils.js'
import './Calendar.css'

// A live monthly calendar. `markedDates` is a Set of 'YYYY-MM-DD'
// strings for days that should show a dot (i.e. have tasks).
export default function Calendar({ selectedDate, onSelectDate, markedDates }) {
  const now = new Date()
  const [viewYear, setViewYear] = useState(now.getFullYear())
  const [viewMonth, setViewMonth] = useState(now.getMonth())

  const matrix = getMonthMatrix(viewYear, viewMonth)
  const today = todayISO()

  function goPrevMonth() {
    if (viewMonth === 0) {
      setViewMonth(11)
      setViewYear((y) => y - 1)
    } else {
      setViewMonth((m) => m - 1)
    }
  }

  function goNextMonth() {
    if (viewMonth === 11) {
      setViewMonth(0)
      setViewYear((y) => y + 1)
    } else {
      setViewMonth((m) => m + 1)
    }
  }

  function goToday() {
    setViewYear(now.getFullYear())
    setViewMonth(now.getMonth())
    onSelectDate(today)
  }

  return (
    <div className="calendar">
      <div className="calendar-header">
        <h3>
          {MONTH_LABELS[viewMonth]} {viewYear}
        </h3>
        <div className="calendar-nav">
          <button type="button" onClick={goPrevMonth} aria-label="Previous month">‹</button>
          <button type="button" className="calendar-today-btn" onClick={goToday}>Today</button>
          <button type="button" onClick={goNextMonth} aria-label="Next month">›</button>
        </div>
      </div>

      <div className="calendar-weekdays">
        {WEEKDAY_LABELS.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>

      <div className="calendar-grid">
        {matrix.flat().map((date) => {
          const iso = formatISO(date)
          const inMonth = date.getMonth() === viewMonth
          const isToday = iso === today
          const isSelected = iso === selectedDate
          const hasTasks = markedDates.has(iso)

          return (
            <button
              type="button"
              key={iso}
              className={
                'calendar-day' +
                (!inMonth ? ' calendar-day-muted' : '') +
                (isToday ? ' calendar-day-today' : '') +
                (isSelected ? ' calendar-day-selected' : '')
              }
              onClick={() => onSelectDate(iso)}
            >
              <span>{date.getDate()}</span>
              {hasTasks && <span className="calendar-dot" />}
            </button>
          )
        })}
      </div>
    </div>
  )
}
