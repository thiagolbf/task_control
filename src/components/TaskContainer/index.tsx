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

export const TaskContent = () => {
  return (
    <TaskContainer>
      <TaskData>
        <CreatedTask>
          <span>Tarefas criadas</span>{" "}
          <DataTask>
            <span>0</span>
          </DataTask>
        </CreatedTask>
        <ConcludedTask>
          <span>Concluídas</span>
          <DataTask>
            <span>2 de 5</span>
          </DataTask>
        </ConcludedTask>
      </TaskData>

      <DescribedTasks>
        <NoTasks>
          <img src={ClipBoard} alt="" />
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </NoTasks>
      </DescribedTasks>
    </TaskContainer>
  );
};
