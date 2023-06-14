import { InfoTasksContainer, InfoTasksContent } from './styles'

export function InfoTasks() {
  return (
    <InfoTasksContainer>
      <InfoTasksContent variant="blue">
        <strong>Tarefas criadas</strong>
        <span>3</span>
      </InfoTasksContent>
      <InfoTasksContent variant="purple">
        <strong>Concluídas</strong>
        <span>2 de 3</span>
      </InfoTasksContent>
    </InfoTasksContainer>
  )
}
