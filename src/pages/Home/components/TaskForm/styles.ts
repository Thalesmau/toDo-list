import styled from 'styled-components'

export const TaskContainer = styled.form`
  display: flex;
  gap: 0.5rem;
  max-width: 1120px;
  margin: 0 auto;

  margin-top: -1.75rem;

  input {
    flex: 1;
    border: 0;
    border-radius: 8px;
    padding: 1rem;
    background: ${(props) => props.theme['gray-500']};
    color: ${(props) => props.theme['gray-200']};

    &::placeholder {
      color: ${(props) => props.theme['gray-300']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    font-size: 0.875rem;
    font-weight: bold;
    border: 0;
    border-radius: 8px;
    padding: 1rem;
    background: ${(props) => props.theme['blue-dark']};
    color: ${(props) => props.theme['gray-100']};
  }
`
