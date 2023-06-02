import styled from "styled-components";

export const Container = styled.div`
  & + & {
    margin-top: 0.75rem;
  }

  background-color: ${(props) => props.theme.taskBackground};

  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.75rem;

  > button:first-child {
  }
`;

export const MarkTask = styled.button`
  width: 20px;
  height: 20px;

  border-radius: 20px;

  background-color: transparent;
  cursor: pointer;

  outline: none;

  border: 2px solid ${(props) => props.theme.blue};

  :hover {
    background-color: ${(props) => props.theme.bodyBackground};
    border: 2px solid ${(props) => props.theme.blueDark};

    transition: background-color, border, 0.5s;
  }
`;

export const UnMarkTask = styled.button`
  width: 20px;
  height: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;

  background-color: ${(props) => props.theme.purpleDark};
  cursor: pointer;

  outline: none;

  border: 2px solid ${(props) => props.theme.purpleDark};

  :hover {
    border: 2px solid ${(props) => props.theme.purple};
    background-color: ${(props) => props.theme.purple};
    transition: background-color, border, 0.5s;
  }
`;

export const Content = styled.p`
  flex: 1;
  color: ${(props) => props.theme.primaryFont};

  font-size: 0.85rem;
`;

export const ConcludedContent = styled.p`
  flex: 1;
  color: ${(props) => props.theme.secundaryFont};

  font-size: 0.85rem;

  text-decoration: line-through;
`;

export const DeleteTask = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  background-color: transparent;
  border: none;

  > svg {
    color: ${(props) => props.theme.secundaryFont};
  }

  > svg:hover {
    color: ${(props) => props.theme.danger};
  }
`;
