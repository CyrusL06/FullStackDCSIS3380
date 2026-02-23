const WiringNote = () => {
  return (
    <aside className="wiring-note" aria-label="CRUD wiring map">
      <h2>Hook These For Your Midterm</h2>
      <ol>
        <li>Connect form submit (`data-action="create-task"`) to your Create handler.</li>
        <li>
          Load real tasks from state/database in place of <code>demoTasks</code>.
        </li>
        <li>Use Edit/Delete buttons for Update and Delete handlers by `task.id`.</li>
        <li>Wire search/filter/sort controls to your Read query logic.</li>
      </ol>
    </aside>
  );
};

export default WiringNote;
