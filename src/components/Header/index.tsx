import { HeaderContainer, Title } from "./style";

// import Switch from "react-switch";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

import Logo from "../../assets/rocket.svg";

interface HeaderProps {
  changeTheme: () => void;
}

export const Header = ({ changeTheme }: HeaderProps) => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <HeaderContainer>
        <img src={Logo} alt="" />
        <Title>
          <span>task</span>
          <span>control</span>
        </Title>

        <button onClick={() => changeTheme()}>Trocar tema</button>
      </HeaderContainer>
    </>
  );
};
