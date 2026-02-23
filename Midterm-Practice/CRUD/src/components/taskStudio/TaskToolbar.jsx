const TaskToolbar = () => {
  return (
    <section className="toolbar" aria-label="Filters">
      <label className="field field-inline">
        <span>Search</span>
        <input name="search" type="search" placeholder="Find a task..." data-filter="search" />
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
  );
};

export default TaskToolbar;
