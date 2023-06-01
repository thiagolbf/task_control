import styled from "styled-components";

export const TaskContainer = styled.div`
  max-width: 46rem;
  margin: auto;

  padding: 0 0.5rem;
`;

export const TaskData = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  margin-top: 4rem;
`;

export const CreatedTask = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  > span:first-child {
    font-size: 0.85rem;
    color: ${(props) => props.theme.blue};
    font-weight: 700;
  }
`;

export const ConcludedTask = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  > span:first-child {
    font-size: 0.85rem;
    color: ${(props) => props.theme.purpleDark};
    font-weight: 700;
  }
`;

export const DataTask = styled.div`
  padding: 0.2rem 0.5rem;

  background-color: ${(props) => props.theme.taskBackground};

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 999px;

  > span {
    font-size: 0.75rem;
    color: ${(props) => props.theme.primaryFont};
    font-weight: 700;
  }
`;

export const DescribedTasks = styled.div`
  margin-top: 24px;

  border-top: 1px solid ${(props) => props.theme.taskBackground};
`;

export const NoTasks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: 64px;
  > img {
    margin-bottom: 16px;
  }

  > p {
    color: ${(props) => props.theme.secundaryFont};
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
  }

  > p:last-child {
    font-weight: 400;
  }
`;
