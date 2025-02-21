import React, { useContext , useEffect} from "react";
import { TodoContext } from "../context/TodoContext";
import Clock from "../Clock";

const Todos = () => {
  const {
    tasks,
    setTasks,
    title,
    setTitle,
    category,
    setCategory,
    status,
    setStatus,
    setFilterStatus,
    filterStatus,
    searchQuery,
    setSearchQuery,
  } = useContext(TodoContext)


  const addTask = (e) => {
    e.preventDefault();

    const newTask = {
      title,
      category,
      status,
    };

    setTasks([...tasks, newTask]);
    setTitle("");
    setCategory("");
    setStatus("Pending");
  };


  const editTask = (index) => {
    const editTask = tasks[index];
    const editTitle = prompt("Edit Task Title:", editTask.title);
    const editCategory = prompt("Edit Category:", editTask.category);
    if (editTitle != '' && editCategory != '') {
      const updatedTasks = tasks.map((task, i) =>
        i === index ? { ...task, title: editTitle, category: editCategory } : task
      );
      setTasks(updatedTasks);
    }
  }

  const deleteTask = (index) => {
    const deletedTasks = tasks.filter((task, i) => i !== index);
    setTasks(deletedTasks);
  }

  const updateTaskStatus = (index, value) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, status: value } : task
    );
    setTasks(updatedTasks);
  }

  const filteredTasks = tasks.filter(task => {
    const statusMatch = filterStatus === 'All' || task.status === filterStatus;
    const titleMatch = task.title.toLowerCase().includes(searchQuery.toLowerCase());
    return statusMatch && titleMatch;
  });
  console.log(filteredTasks);



  return (
    <div className="todo_container">
      <h1 style={{ backgroundColor:"black", color: "white", width:'100%', maxWidth:'90%',margin:'auto'}}>....Todo List....</h1>
      <div className="todo_form">
        <form onSubmit={addTask}>
          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />

          <button type="submit" style={{ marginLeft: "5px" }}>
            Add Task
          </button>
        </form>
      </div>

    <div style={{width: '100%', maxWidth: '90%', margin: 'auto'}}>
      <hr />
    </div>

      <div className="filters_container">
        <div className="search_filter">
          <input
            type="text"
            placeholder="Search by Title"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ marginLeft: '10px' }}
          />
        </div>
        <div className="status_filter">
          <label style={{ marginRight: '10px' }}>
            Filter by Status: {" "}
            <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}  style={{ marginRight: '5px', padding: '5px' }}>
              <option value="All">All</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </label>
        </div>
      </div>

      {/*yaha hum array ki list display karva rhy hen */}
      <div className="tasks_container">
        {/* <h2 style={{marginTop: '20px'}}>Task List</h2> */}
        {filteredTasks.map((task, index) => (
          // <TodoCard task={task} key={index}/>
          <div key={index} className="task_card"   style={{
            backgroundColor: task.status === "Completed" ? "lightgreen" : "orange",
         }} >
            <p>
              <strong>Title:</strong>  {task.title}
            </p>
            <p>
              <strong>Category:</strong>  {task.category}
            </p>
            <p>
              <strong>Status:</strong>  {task.status}
            </p>
            <div className="task_actions">
              <button onClick={() => editTask(index)} style={{ marginRight: '5px', border: '3px solid green' }}>
                Edit
              </button>
              <button onClick={() => deleteTask(index)} style={{ marginRight: '5px', border: '3px solid red' }}>
                Delete
              </button>
              <select
                style={{ marginRight: '5px', padding: '5px'
                 }}
                value={task.status}
                onChange={(e) => updateTaskStatus(index, e.target.value)}
              >
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>

        ))}

      </div>
    </div>
  );
};

export default Todos;
