import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { TasksProvider } from './TasksContext.jsx'
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import Daily from './Daily.jsx'
import Weekly from './Weekly.jsx'
import Important from './Important.jsx'
import Dashboard from './Dashboard.jsx'

export default function App() {
  return (
    <TasksProvider>
      <div className="app-shell">
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/daily" element={<Daily />} />
            <Route path="/weekly" element={<Weekly />} />
            <Route path="/important" element={<Important />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </TasksProvider>
  )
}
