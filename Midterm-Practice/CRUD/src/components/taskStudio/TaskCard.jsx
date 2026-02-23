
const TaskCard = ({ task, onDelete,
   onEditSave = () => {},
   onEditStart = () => {},
   onEditChange = () => {},
  onEditCancel = () => {} ,
  isEditing = false ,
  editDraft,
onToggleStrike}) => 
    {

  //Add this...
  if(isEditing){
     return (
    <li className={`task-card status-${task.statusClass}`}>
      <div className="task-main">
        <div className="task-copy">
          <input
            type="text"
            value={editDraft?.title ?? ""}
            onChange={(e) => onEditChange("title", e.target.value)}
            placeholder="Task title"
          />
          <textarea
            rows="2"
            value={editDraft?.description ?? ""}
            onChange={(e) => onEditChange("description", e.target.value)}
            placeholder="Task details"
          />
          <input
            type="text"
            value={editDraft?.course ?? ""}
            onChange={(e) => onEditChange("course", e.target.value)}
            placeholder="Course"
          />
          <input
            type="text"
            value={editDraft?.due ?? ""}
            onChange={(e) => onEditChange("due", e.target.value)}
            placeholder="Due (ex: Feb 25)"
          />
          <select
            value={editDraft?.priority ?? "Medium"}
            onChange={(e) => onEditChange("priority", e.target.value)}
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>
      </div>

      <div className="task-actions">
        <button type="button" className="action edit" onClick={() => onEditSave(task.id)}>
          Save
        </button>
        <button type="button" className="action delete" onClick={onEditCancel}>
          Cancel
        </button>
      </div>
    </li>
  );}

    //StrikeThrough variation....
 const isStrike = Boolean(task.status);




  return (
 <li className={`task-card ${task.status ? "status-done" : "status-todo"}`}>
      <div className="task-main">
        <label className="task-check">
          <input
            type="checkbox"
            checked={Boolean(task.status)}

            data-action="toggle-task"
            data-task-id={task.id}
            
            onChange={() => onToggleStrike(task.id)}
          />
          <span className="check-indicator" />
        </label>
        <div className="task-copy">
          <h3 className={{ textDecoration: isStrike ? "line-through": "none" }}>{task.title}</h3>
          <p>{task.description}</p>
          <div className="task-meta">
            <span className="pill">{task.course}</span>
            <span className={`pill priority-${task.priority.toLowerCase()}`}>
              {task.priority} Priority
            </span>
            <span className="pill">{task.due}</span>
          {/* CHANGED */}
        <span className={`pill status-pill status-${task.statusClass}`}>
          {task.status ? "Done" : "To Do"}
        </span>

          </div>
        </div>
      </div>

      <div className="task-actions">
        <button onClick={() => onEditStart(task)} type="button" className="action edit" data-action="edit-task" data-task-id={task.id}>
          Edit
        </button>
        <button
          type="button"
          className="action delete"
          data-action="delete-task"
          data-task-id={task.id}
          
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskCard;
