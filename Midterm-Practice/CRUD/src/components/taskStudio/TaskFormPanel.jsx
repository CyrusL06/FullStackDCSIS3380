import { useState } from "react";

const TaskFormPanel = ({onAdd}) => {


  const initial = {
    title: "",
    description:"",
    course:"",
    due:"",
    priority:"",
    status: false,
    statusClass: "todo",
  }

  const [form, setForm] = useState(initial)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit= (e) => {
    //Prevent refresh
    e.preventDefault();
      //Returns an objecy
      const newTask = {
        
        id: `m${Date.now()}`,
        title: form.title,
        description:form.description ,
        course: form.course,
        due: form.due,
        priority:form.priority,
        status:  form.status,
        statusClass: form.statusClass,
       
      }

      onAdd(newTask)
      setForm(initial)


  }


  return (

    <section className="input-panel" aria-label="Task form">
      <h2>Create or Edit Task</h2>
      <form onSubmit={handleSubmit} className="task-form" data-form="task">
        <label className="field">
          <span>Task Title</span>
          <input value={form.title}  name="title" type="text" placeholder="Ex: Review state management patterns"  onChange={handleChange}/>
        </label>

        <label className="field">
          <span>Course</span>
          <input value={form.course} name="course" type="text" placeholder="Ex: CSIS 3380" onChange={handleChange}/>
        </label>

        <label className="field">
          <span>Due Date</span>
          <input value={form.due} name="due" type="date"onChange={handleChange} />
        </label>

        <label className="field">
          <span>Priority</span>
          <select value={form.priority} name="priority" defaultValue="Medium" onChange={handleChange}>
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
            value={form.description}
onChange={handleChange}           />
        </label>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary" data-action="create-task">
            Add Task
          </button>
          <button onClick={() => setForm(initial)} type="button" className="btn btn-ghost" data-action="reset-form">
            Reset
          </button>
        </div>
      </form>
    </section>
  );
};

export default TaskFormPanel;
