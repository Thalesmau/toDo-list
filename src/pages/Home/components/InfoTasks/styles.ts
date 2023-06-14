import styled from 'styled-components'

export const InfoTasksContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 2rem auto 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

interface InfoTasksContentProps {
  variant: 'blue' | 'purple'
}

export const InfoTasksContent = styled.div<InfoTasksContentProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  strong {
    color: ${(props) =>
      props.variant === 'blue'
        ? props.theme['blue-primary']
        : props.theme['purple-primary']};
    font-weight: bold;
    font-size: 0.875rem;
  }

  span {
    background: ${(props) => props.theme['gray-400']};
    color: ${(props) => props.theme['gray-100']};
    font-weight: bold;
    font-size: 0.75rem;
    padding: 0.125rem 0.5rem;
    border-radius: 999px;
  }
`
