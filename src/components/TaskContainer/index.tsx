import {
  TaskContainer,
  TaskData,
  CreatedTask,
  ConcludedTask,
  DataTask,
  DescribedTasks,
  NoTasks,
} from "./style";

import ClipBoard from "../../assets/Clipboard.svg";
import { Task } from "../Task";

import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

export const TaskContent = () => {
  const { tasks } = useContext(TaskContext);

  const totalConcluded = tasks.reduce((count, task) => {
    if (task.concluded) {
      return count + 1;
    }
    return count;
  }, 0);

  return (
    <TaskContainer>
      <TaskData>
        <CreatedTask>
          <span>Tarefas criadas</span>{" "}
          <DataTask>
            <span>{tasks.length}</span>
          </DataTask>
        </CreatedTask>
        <ConcludedTask>
          <span>Concluídas</span>
          <DataTask>
            <span>
              {tasks.length} de {totalConcluded}
            </span>
          </DataTask>
        </ConcludedTask>
      </TaskData>

      <DescribedTasks>
        {tasks.length === 0 ? (
          <>
            <NoTasks>
              <img src={ClipBoard} alt="" />
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </NoTasks>
          </>
        ) : (
          <>
            {tasks.map((value, index) => {
              return (
                <Task
                  key={value.id}
                  concluded={value.concluded}
                  content={value.content}
                  id={value.id}
                />
              );
            })}
          </>
        )}
      </DescribedTasks>
    </TaskContainer>
  );
};
