import TaskCard from "./TaskCard";

const TaskListSection = ({ tasks , onDelete,
   onEditSave ,
  onEditStart ,
   onEditChange,
  onEditCancel ,
  editingTaskId,
editDraft, 
onToggleStrike }) => {
  return (
    <section className="task-section" aria-label="Task list">
      <div className="section-head">
        <h2>Task List</h2>
        <button type="button" className="ghost-link" data-action="clear-completed">
          Clear Completed
        </button>
      </div>

      <ul className="task-list">
        {tasks.map((task) => (
          <TaskCard
           onDelete= {onDelete}
            key={task.id} 
            task={task} 
  
            isEditing={editingTaskId === task.id}
            editDraft = {editDraft}
            onEditSave = {onEditSave}
            onEditStart ={onEditStart}
            onEditChange ={onEditChange}
            onEditCancel ={onEditCancel}
            
            onToggleStrike={onToggleStrike}
            />
        ))}
      </ul>
    </section>
  );
};

export default TaskListSection;
