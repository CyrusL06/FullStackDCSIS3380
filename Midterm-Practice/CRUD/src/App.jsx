import "./App.css";

const demoTasks = [
  {
    id: "task-1",
    title: "Review React component lifecycle",
    description: "Write examples for mount, update, and unmount scenarios.",
    course: "CSIS 3380",
    due: "Feb 25",
    priority: "High",
    status: "To Do",
    statusClass: "todo",
  },
  {
    id: "task-2",
    title: "Practice SQL joins with sample data",
    description: "Build 5 join queries and explain each result set.",
    course: "Database",
    due: "Feb 26",
    priority: "Medium",
    status: "In Progress",
    statusClass: "in-progress",
  },
  {
    id: "task-3",
    title: "Create API route notes",
    description: "Summarize GET, POST, PUT, and DELETE examples.",
    course: "Backend",
    due: "Feb 27",
    priority: "Low",
    status: "Done",
    statusClass: "done",
  },
];

function App() {
  const completedCount = demoTasks.filter((task) => task.statusClass === "done").length;
  const activeCount = demoTasks.length - completedCount;

  return (
    <main className="todo-shell">
      <div className="ambient ambient--one" aria-hidden="true" />
      <div className="ambient ambient--two" aria-hidden="true" />
      <section className="todo-board">
        <header className="board-header">
          <p className="eyebrow">CSIS 3380 Midterm Practice</p>
          <h1>Study Task Studio</h1>
          <p className="subtitle">
            UI-only CRUD scaffold. Add your create, read, update, and delete logic by
            wiring handlers to the action hooks.
          </p>
          <div className="header-stats">
            <article className="stat-card">
              <span>Total Tasks</span>
              <strong>{demoTasks.length}</strong>
            </article>
            <article className="stat-card">
              <span>Active</span>
              <strong>{activeCount}</strong>
            </article>
            <article className="stat-card">
              <span>Completed</span>
              <strong>{completedCount}</strong>
            </article>
          </div>
        </header>

        <section className="input-panel" aria-label="Task form">
          <h2>Create or Edit Task</h2>
          <form className="task-form" data-form="task">
            <label className="field">
              <span>Task Title</span>
              <input name="title" type="text" placeholder="Ex: Review state management patterns" />
            </label>

            <label className="field">
              <span>Course</span>
              <input name="course" type="text" placeholder="Ex: CSIS 3380" />
            </label>

            <label className="field">
              <span>Due Date</span>
              <input name="dueDate" type="date" />
            </label>

            <label className="field">
              <span>Priority</span>
              <select name="priority" defaultValue="Medium">
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </label>

            <label className="field field-wide">
              <span>Details</span>
              <textarea
                name="description"
                rows="3"
                placeholder="Add notes, formulas, or practice questions here."
              />
            </label>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary" data-action="create-task">
                Add Task
              </button>
              <button type="button" className="btn btn-ghost" data-action="reset-form">
                Reset
              </button>
            </div>
          </form>
        </section>

        <section className="toolbar" aria-label="Filters">
          <label className="field field-inline">
            <span>Search</span>
            <input
              name="search"
              type="search"
              placeholder="Find a task..."
              data-filter="search"
            />
          </label>

          <label className="field field-inline">
            <span>Status</span>
            <select name="status" defaultValue="All" data-filter="status">
              <option>All</option>
              <option>To Do</option>
              <option>In Progress</option>
              <option>Done</option>
            </select>
          </label>

          <label className="field field-inline">
            <span>Sort By</span>
            <select name="sortBy" defaultValue="Due Date" data-filter="sort">
              <option>Due Date</option>
              <option>Priority</option>
              <option>Alphabetical</option>
            </select>
          </label>
        </section>

        <section className="task-section" aria-label="Task list">
          <div className="section-head">
            <h2>Task List</h2>
            <button type="button" className="ghost-link" data-action="clear-completed">
              Clear Completed
            </button>
          </div>

          <ul className="task-list">
            {demoTasks.map((task) => (
              <li key={task.id} className={`task-card status-${task.statusClass}`}>
                <div className="task-main">
                  <label className="task-check">
                    <input
                      type="checkbox"
                      defaultChecked={task.statusClass === "done"}
                      data-action="toggle-task"
                      data-task-id={task.id}
                    />
                    <span className="check-indicator" />
                  </label>
                  <div className="task-copy">
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <div className="task-meta">
                      <span className="pill">{task.course}</span>
                      <span className={`pill priority-${task.priority.toLowerCase()}`}>
                        {task.priority} Priority
                      </span>
                      <span className="pill">{task.due}</span>
                      <span className={`pill status-pill status-${task.statusClass}`}>
                        {task.status}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="task-actions">
                  <button type="button" className="action edit" data-action="edit-task" data-task-id={task.id}>
                    Edit
                  </button>
                  <button type="button" className="action delete" data-action="delete-task" data-task-id={task.id}>
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <aside className="wiring-note" aria-label="CRUD wiring map">
          <h2>Hook These For Your Midterm</h2>
          <ol>
            <li>
              Connect form submit (`data-action="create-task"`) to your Create handler.
            </li>
            <li>
              Load real tasks from state/database in place of <code>demoTasks</code>.
            </li>
            <li>Use Edit/Delete buttons for Update and Delete handlers by `task.id`.</li>
            <li>Wire search/filter/sort controls to your Read query logic.</li>
          </ol>
        </aside>
      </section>
    </main>
  );
}

export default App;
