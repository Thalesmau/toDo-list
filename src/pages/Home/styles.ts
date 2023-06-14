import styled from 'styled-components'

export const TasksContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
`

export const TasksTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0px 0.75rem;

  td {
    background: ${(props) => props.theme['gray-500']};
    color: ${(props) => props.theme['gray-100']};
    font-size: 0.875rem;
    line-height: 1.4;
    padding: 1rem;

    &:first-child {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }

    &:last-child {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  }

  button[type='button'] {
    background: transparent;
    border: 0;
    border-radius: 4px;
    line-height: 0;
    padding: 0.5rem;
    color: ${(props) => props.theme['gray-300']};
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme['gray-400']};
      color: ${(props) => props.theme['danger-primary']};
      transition: background-color 0.2s;
    }
  }
`

export const CheckTasks = styled.input`
  background: ${(props) => props.theme['gray-400']};
`
