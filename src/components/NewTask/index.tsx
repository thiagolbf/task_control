import { NewTaskContainer } from "./style";

import { PlusCircle } from "phosphor-react";

export const AddNewTask = () => {
  return (
    <NewTaskContainer>
      <input placeholder="Adicione uma nova tarefa" />
      <button>
        Criar <PlusCircle size={20} />
      </button>
    </NewTaskContainer>
  );
};
