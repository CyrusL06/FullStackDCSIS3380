import "./App.css";
import BoardHeader from "./components/taskStudio/BoardHeader";
import TaskFormPanel from "./components/taskStudio/TaskFormPanel";
import TaskToolbar from "./components/taskStudio/TaskToolbar";
import TaskListSection from "./components/taskStudio/TaskListSection";
import WiringNote from "./components/taskStudio/WiringNote";
import { demoTasks } from "./assets/demoTasks";
import { useState } from "react";

function App() {

    const [tasks, setTasks] = useState(demoTasks);

  const completedCount = tasks.filter((task) => Boolean(task.status)).length
  const activeCount = tasks.length - completedCount;




  // 1,Form ready to take i value, state that have this
  //Inside the form Section but have 

  const onAdd = (newTask) => {
    const update = ((prev) => [newTask, ...prev])
    setTasks(update);
    console.log(tasks)
  }

  //2, Delete
  const onDelete = (id) => {
    const update = tasks.filter((task) => task.id !== id)
    setTasks(update);

  }

  //3, Update - Hardest 
  //ID to track which one pressed
  //Tap intp data which is inputted
  //Grab the old prev.data

 const [editTaskId, setEditTaskId] = useState(null)
 const [editDraft, setEditDraft] = useState(null)

 //Grabs the original data 
const onEditStart = (task) => {
    setEditTaskId(task.id)
      setEditDraft(
        {
            title: task.title ?? "",
            description: task.description ?? "",
            course: task.course ?? "",
            due: task.due ?? "",
            priority: task.priority ?? "",
            status: task.status ?? "",
            statusClass: task.statusClass ?? "",
        }
      )
}

  //OnCHange grab the changed name and value
  const onEditChange = (name, value) => {
    setEditDraft((prev) => ({...prev, [name]:value}));
  }

  const onEditSave = (id) => {
    if(!editDraft) return;

      const updateTask = {
        title: editDraft.title.trim(),
        description: editDraft.description ?? "",
        course: editDraft.course ?? "",
        due: editDraft.due ?? "",
        priority: editDraft.priority ?? "",
        status:  editDraft.status ?? "",
        statusClass: editDraft.statusClass ?? "",
      }

      setTasks((prev) => prev.map((task) => (task.id === id ? updateTask : task)));
      onEditCancel();
  }


  const onEditCancel = () => {
    setEditDraft(null)
    setEditTaskId(null)
  }

  const onToggleStrike = (id) => {
    setTasks((prev) => prev.map((task) => task.id === id ? {...task, status: !(task.status)} : task ))
  }

  return (
    <main className="todo-shell">
      <div className="ambient ambient--one" aria-hidden="true" />
      <div className="ambient ambient--two" aria-hidden="true" />
      <section className="todo-board">
        <BoardHeader
          totalTasks={tasks.length}
          activeCount={activeCount}
          completedCount={completedCount}
        />
        {/* Data Input here */}
        <TaskFormPanel onAdd={onAdd}/>
        {/* Search Here */}
        <TaskToolbar />
        {/* Edit and Delete Button */}
        <TaskListSection
         onEditSave = {onEditSave}
         onEditStart = {onEditStart}
         onEditChange = {onEditChange}
         onEditCancel = {onEditCancel}
         editingTaskId = {editTaskId}
           editDraft={editDraft}
        onToggleStrike = {onToggleStrike}

         onDelete= {onDelete} 
         tasks={tasks}
         
         
         />

        <WiringNote />
      </section>
    </main>
  );
}

export default App;
