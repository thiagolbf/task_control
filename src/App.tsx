import { useState } from "react";

import { GlobalStyle } from "./styles/global";

import { ThemeProvider } from "styled-components";
import { darkTheme } from "./styles/themes/dark";
import { lightTheme } from "./styles/themes/light";
import { Header } from "./components/Header";

function App() {
  const [change, setChange] = useState(true);

  const changeTheme = () => {
    setChange(!change);
  };

  console.log(change);
  return (
    <>
      <ThemeProvider theme={change ? darkTheme : lightTheme}>
        <Header changeTheme={changeTheme} />
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
