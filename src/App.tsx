import { useState } from "react";

import { ThemeProvider } from "styled-components";
import { darkTheme } from "./styles/themes/dark";
import { lightTheme } from "./styles/themes/light";
import { Header } from "./components/Header";

function App() {
  const [change, setChange] = useState(false);

  console.log(change);
  return (
    <>
      <ThemeProvider theme={change ? darkTheme : lightTheme}>
        <h1>teste</h1>
        <button onClick={() => setChange(!change)}>Trocar</button>
        <Header />
      </ThemeProvider>
    </>
  );
}

export default App;
