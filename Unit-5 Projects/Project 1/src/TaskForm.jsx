import React, { useState } from 'react'
import './TaskForm.css'

// Small inline "add task" form. Calls onAdd(text) on submit and
// clears itself. Kept deliberately generic so Daily, Weekly and
// Important pages can all reuse it.
export default function TaskForm({ onAdd, placeholder = 'Add a task\u2026' }) {
  const [text, setText] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!text.trim()) return
    onAdd(text)
    setText('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={placeholder}
        aria-label="New task"
      />
      <button type="submit" className="task-form-submit">
        Add
      </button>
    </form>
  )
}
