import { HeaderContainer, Title, ToggleTheme } from "./style";

// import Switch from "react-switch";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

import Logo from "../../assets/rocket.svg";

import Switch from "react-switch";

interface HeaderProps {
  changeTheme: () => void;
  actualTheme: string;
}

export const Header = ({ changeTheme, actualTheme }: HeaderProps) => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <HeaderContainer>
        <img src={Logo} alt="" />
        <Title>
          <span>task</span>
          <span>control</span>
        </Title>

        {/* <button onClick={() => changeTheme()}>Trocar tema</button> */}
        <ToggleTheme>
          <Switch
            onChange={() => changeTheme()}
            checked={actualTheme === "dark"}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            onColor={theme.blueDark}
            className="toggleTheme"
          />
        </ToggleTheme>
      </HeaderContainer>
    </>
  );
};
