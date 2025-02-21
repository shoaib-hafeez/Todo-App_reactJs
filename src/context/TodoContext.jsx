import { createContext, useState } from "react";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState('Pending');
  const [filterStatus, setFilterStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  

  return (
    <TodoContext.Provider value={{
      tasks,
      setTasks,
      title,
      setTitle,
      category,
      setCategory, 
      status,
      setStatus,
      filterStatus,
      setFilterStatus,
      searchQuery,
      setSearchQuery,
    }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoProvider };
