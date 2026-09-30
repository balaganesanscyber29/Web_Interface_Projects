import './App.css'

function App() {
  const base = import.meta.env.BASE_URL

  const units = [
    {
      name: 'Unit 1',
      projects: [
        {
          name: 'Project 1',
          path: `${base}projects/counter.html`,
        },
        {
          name: 'Project 2',
          path: `${base}projects/Student_Profile.html`,
        },
      ],
    },
    {
      name: 'Unit 2',
      projects: [
        {
          name: 'Project 1',
          path: `${base}projects/unit2-project1/index.html`,
        },
        {
          name: 'Project 2',
          path: `${base}projects/unit2-project2/index.html`,
        },
      ],
    },
    {
      name: 'Unit 3',
      projects: [
        {
          name: 'Project 1',
          path: `${base}projects/unit3-project1/index.html`,
        },
        {
          name: 'Project 2',
          path: `${base}projects/unit3-project2/index.html`,
        },
      ],
    },
    {
      name: 'Unit 4',
      projects: [
        {
          name: 'Project 1',
          path: `${base}projects/unit4-project1/index.html`,
        },
        {
          name: 'Project 2',
          path: `${base}projects/unit4-project2/index.html`,
        },
      ],
    },
    {
      name: 'Unit 5',
      projects: [
        {
          name: 'Project 1',
          path: `${base}projects/unit5-project1/index.html`,
        },
        {
          name: 'Project 2',
          path: `${base}projects/unit5-project2/index.html`,
        },
      ],
    },
  ]

  return (
    <div className="app">
      <header className="header">
        <p className="tag">WEB INTERFACE</p>

        <h1>Project Collection</h1>

        <p className="subtitle">
          Explore all my Web Interface projects, organized unit by unit.
        </p>
      </header>

      <main className="container">
        <h2>Select a Unit</h2>

        <div className="unit-grid">
          {units.map((unit, index) => (
            <section className="unit-card" key={unit.name}>
              <div className="unit-number">0{index + 1}</div>

              <h3>{unit.name}</h3>

              <p>{unit.projects.length} Projects</p>

              <div className="project-list">
                {unit.projects.map((project) => (
                  <button
                    className="project-button"
                    key={project.name}
                    onClick={() => window.open(project.path, '_blank')}
                  >
                    <span>{project.name}</span>
                    <span className="arrow">→</span>
                  </button>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <footer>
        <p>Web Interface Projects • 5 Units • 10 Projects</p>
      </footer>
    </div>
  )
}

export default App