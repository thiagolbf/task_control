import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  background-color: ${(props) => props.theme.headerBackground};

  padding: 3.8rem 0 5.6rem 0;

  /* > button {
    position: absolute;
    right: 1rem;
    top: 1rem;
  } */
`;

export const ToggleTheme = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
`;

export const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 900;

  span:first-child {
    color: ${(props) => props.theme.blue};
  }

  span:last-child {
    color: ${(props) => props.theme.purpleDark};
  }
`;
