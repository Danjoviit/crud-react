import { useEffect, useState } from "react";
import { getAll } from "../api/tasks.api";
import { TasksPage } from "../pages/TasksPage";

export function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const res = await getAll();
      setTasks(res.data);
    }
    loadTasks();
  }, []);

  return (
    <div>
      {tasks?.map((task) => (
        <div>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}
