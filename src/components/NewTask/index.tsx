import { NewTaskContainer } from "./style";

import { PlusCircle } from "phosphor-react";

import { useContext, useState } from "react";
import { TaskContext } from "../../context/TaskContext";

export const AddNewTask = () => {
  const [taskContent, setTaskContent] = useState<string>("");

  const { addNewTask } = useContext(TaskContext);

  const handleNewContent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskContent(event.target.value);
  };

  const handleAddNewTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      fractionalSecondDigits: 3,
    };

    const id = date.toLocaleTimeString(undefined, options);

    addNewTask({ content: taskContent, concluded: false, id: id });
    setTaskContent("");
  };

  return (
    <NewTaskContainer>
      <form onSubmit={handleAddNewTask}>
        <input
          placeholder="Adicione uma nova tarefa"
          onChange={handleNewContent}
          value={taskContent}
        />
        <button type="submit">
          Criar <PlusCircle size={20} />
        </button>
      </form>
    </NewTaskContainer>
  );
};
