const BoardHeader = ({ totalTasks, activeCount, completedCount }) => {
  return (
    <header className="board-header">
      <p className="eyebrow">CSIS 3380 Midterm Practice</p>
      <h1>Study Task Studio</h1>
      <p className="subtitle">
        UI-only CRUD scaffold. Add your create, read, update, and delete logic by wiring
        handlers to the action hooks.
      </p>
      <div className="header-stats">
        <article className="stat-card">
          <span>Total Tasks</span>
          <strong>{totalTasks}</strong>
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
  );
};

export default BoardHeader;
