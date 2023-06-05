import { ReactNode, useState, createContext } from "react";

import moment from "moment";

interface TaskProviderProps {
  children: ReactNode;
}

interface Task {
  id: string;
  content: string;
  concluded: boolean;
}

interface TaskContextType {
  addNewTask: (task: Task) => void;
  concludedTask: (task: Task) => void;
  changeTaskStatus: (task: Task) => void;
  tasks: Task[];
}

export const TaskContext = createContext<TaskContextType>(
  {} as TaskContextType
);

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const sortTask = (task: Task[]) => {
    task.sort((taskA, taskB) => {
      // Order by conclusion (tasks concluded first)
      if (taskA.concluded && !taskB.concluded) {
        return 1;
      }
      if (!taskA.concluded && taskB.concluded) {
        return -1;
      }

      const momentA = moment(taskA.id, "HH:mm:ss.SSS");
      const momentB = moment(taskB.id, "HH:mm:ss.SSS");

      // Order by hour
      // (its important to concluded earliest task first)
      // (New tasks will be the last)
      if (momentA.isBefore(momentB)) {
        return -1;
      }
      if (momentA.isAfter(momentB)) {
        return 1;
      }
      return 0;
    });
  };

  const addNewTask = (task: Task) => {
    setTasks((state) => {
      const tasks = [...state, task];

      sortTask(tasks);

      return tasks;
    });
  };

  const changeTaskStatus = (task: Task) => {
    const filteredTask = tasks.find((value) => value.id === task.id);

    if (filteredTask?.concluded) {
      const updateTasks = tasks.map((value) => {
        if (value.id === filteredTask?.id) {
          return {
            concluded: false,
            content: filteredTask.content,
            id: filteredTask.id,
          };
        }
        return value;
      });
      sortTask(updateTasks);
      setTasks(() => {
        return updateTasks;
      });
    } else {
      const updateTasks = tasks.map((value) => {
        if (value.id === filteredTask?.id) {
          return {
            concluded: true,
            content: filteredTask.content,
            id: filteredTask.id,
          };
        }
        return value;
      });

      sortTask(updateTasks);
      setTasks(() => {
        return updateTasks;
      });
    }
  };

  const concludedTask = (task: Task) => {
    const filteredTask = tasks.find((value) => value.id === task.id);

    const updateTask = tasks.filter((value) => value.id !== filteredTask?.id);

    setTasks(updateTask);
  };

  return (
    <TaskContext.Provider
      value={{ addNewTask, changeTaskStatus, concludedTask, tasks }}
    >
      {children}
    </TaskContext.Provider>
  );
};
