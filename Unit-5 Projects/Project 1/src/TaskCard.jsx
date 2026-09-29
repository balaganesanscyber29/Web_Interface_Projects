import React from 'react'
import './TaskCard.css'

// A single task row: checkbox, text, optional meta text, delete button.
// `onDelete` is optional \u2014 pass nothing to hide the delete button
// (used for default daily tasks, which can't be removed).
export default function TaskCard({ task, onToggle, onDelete, meta }) {
  return (
    <div className={'task-card' + (task.completed ? ' task-card-done' : '')}>
      <button
        type="button"
        className="task-check"
        aria-label={task.completed ? 'Mark as not done' : 'Mark as done'}
        onClick={() => onToggle(task.id)}
      >
        {task.completed && (
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
            <path d="M1 5l3.2 3.2L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>

      <div className="task-body">
        <p className="task-text">{task.text}</p>
        {meta && <span className="task-meta">{meta}</span>}
      </div>

      {task.type === 'important' && <span className="task-flag" title="Important" />}

      {onDelete && (
        <button
          type="button"
          className="task-delete"
          aria-label="Delete task"
          onClick={() => onDelete(task.id)}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </div>
  )
}
