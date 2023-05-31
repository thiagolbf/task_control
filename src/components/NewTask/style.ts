import styled from "styled-components";

export const NewTaskContainer = styled.div`
  max-width: 46rem;
  margin: auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  gap: 0.5rem;

  margin-top: -1.5rem;
  padding: 0 0.5rem;

  > input {
    flex: 1;
    padding: 1rem;
    border: transparent;
    border-radius: 8px;

    background-color: ${(props) => props.theme.taskBackground};
    color: ${(props) => props.theme.primaryFont};

    ::placeholder {
      font-size: 1rem;
      color: ${(props) => props.theme.secundaryFont};
    }

    :focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme.blueDark};
    }
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    border: transparent;
    padding: 1rem;
    border-radius: 8px;
    font-weight: 700;
    cursor: pointer;

    background-color: ${(props) => props.theme.blueDark};
    color: ${(props) => props.theme.buttonText};
    /* transition: background-color 0.2s; */

    :hover {
      background-color: ${(props) => props.theme.blue};
      transition: background-color 0.2s;
    }
  }

  @media screen {
  }
`;
