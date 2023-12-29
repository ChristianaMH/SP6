//Part 2: Task App
import "./styles.css";
import React, { useState } from "react";

export interface Task {
  id: number | string;
  title: string;
  description: string;
  completed: boolean;
}

const items: Task[] = [
  {
    id: Date.now(),
    title: "Title 1",
    description: "description 1",
    completed: false,
  },
  {
    id: Date.now(),
    title: "Title 2",
    description: "description 2",
    completed: false,
  },
  {
    id: Date.now(),
    title: "Title 3",
    description: "description 3",
    completed: false,
  },
];

const TaskForm: React.FC<{ onAddTask: (newTask: Task) => void }> = ({
  onAddTask,
}) => {
  const [newTask, setNewTask] = useState<Task>({
    id: Date.now(),
    title: "",
    description: "",
    completed: false,
  });

  const handleInputChanges = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value,
    });
  };

  const addTask = () => {
    onAddTask(newTask);
    setNewTask({
      id: Date.now(),
      title: "",
      description: "",
      completed: false,
    });
  };

  return (
    <div>
      <h2>Add a New Task:</h2>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter a title"
          value={newTask.title}
          onChange={handleInputChanges}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          type="text"
          id="description"
          name="description"
          placeholder="Enter a description"
          value={newTask.description}
          onChange={handleInputChanges}
        />
      </div>
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(items);

  const addTask = (newTask: Task) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleTaskCompletion = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            <span>
              <strong>{task.title}</strong>: {task.description}
            </span>
          </li>
        ))}
      </ul>
      <TaskForm onAddTask={addTask} />
    </div>
  );
};

export default TaskList;
