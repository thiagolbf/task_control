import { useState } from "react";

import { GlobalStyle } from "./styles/global";

import { ThemeProvider } from "styled-components";
import { darkTheme } from "./styles/themes/dark";
import { lightTheme } from "./styles/themes/light";

import { Header } from "./components/Header";
import { AddNewTask } from "./components/NewTask";
import { TaskContent } from "./components/TaskContainer";

function App() {
  const storedTheme = localStorage.getItem("@THEME");
  const initialTheme = typeof storedTheme === "string" ? storedTheme : "light";
  const [change, setChange] = useState<string>(initialTheme);

  const changeTheme = () => {
    if (change === "dark") {
      setChange("light");
      localStorage.setItem("@THEME", "light");
    } else {
      setChange("dark");
      localStorage.setItem("@THEME", "dark");
    }
  };

  return (
    <>
      <ThemeProvider theme={change === "dark" ? darkTheme : lightTheme}>
        <Header changeTheme={changeTheme} />
        <AddNewTask />
        <TaskContent />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
