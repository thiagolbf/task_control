import {
  Container,
  MarkTask,
  UnMarkTask,
  Content,
  ConcludedContent,
  DeleteTask,
} from "./style";

import { Trash, Check } from "phosphor-react";

interface TaskProps {
  concluded: boolean;
}

export const Task = ({ concluded }: TaskProps) => {
  return (
    <Container>
      {concluded ? (
        <UnMarkTask>
          <Check color="#FFFF" weight="bold" size={12} />
        </UnMarkTask>
      ) : (
        <MarkTask />
      )}

      {concluded ? (
        <ConcludedContent>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo saepe,
          eos
        </ConcludedContent>
      ) : (
        <Content>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo saepe,
          eos
        </Content>
      )}

      <DeleteTask>
        <Trash weight="bold" size={17} />
      </DeleteTask>
    </Container>
  );
};
