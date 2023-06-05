import {
  Container,
  TaskContent,
  MarkTask,
  UnMarkTask,
  Content,
  ConcludedContent,
  DeleteTask,
} from "./style";

import { Trash, Check } from "phosphor-react";

import { TaskContext } from "../../context/TaskContext";
import { useContext } from "react";

interface TaskProps {
  concluded: boolean;
  content: string;
  id: string;
}

export const Task = ({ content, concluded, id }: TaskProps) => {
  const { changeTaskStatus, concludedTask } = useContext(TaskContext);

  const formattedTime = id.slice(0, id.length - 4);

  const newFormat = formattedTime.replace(",", " às");

  return (
    <Container>
      <TaskContent>
        {concluded ? (
          <UnMarkTask
            onClick={() =>
              changeTaskStatus({
                concluded: concluded,
                content: content,
                id: id,
              })
            }
          >
            <Check color="#FFFF" weight="bold" size={12} />
          </UnMarkTask>
        ) : (
          <MarkTask
            onClick={() =>
              changeTaskStatus({
                concluded: concluded,
                content: content,
                id: id,
              })
            }
          />
        )}

        {concluded ? (
          <ConcludedContent>{content}</ConcludedContent>
        ) : (
          <Content>{content}</Content>
        )}

        <DeleteTask
          onClick={() =>
            concludedTask({
              concluded: concluded,
              content: content,
              id: id,
            })
          }
        >
          <Trash weight="bold" size={17} />
        </DeleteTask>
      </TaskContent>
      <p>Tarefa criada: {newFormat}</p>
    </Container>
  );
};
