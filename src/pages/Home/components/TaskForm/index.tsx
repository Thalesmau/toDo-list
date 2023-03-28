import { TaskContainer } from './styles'
import { PlusCircle } from 'phosphor-react'

export function TaskForm() {
  return (
    <TaskContainer>
      <input type="text" placeholder="Adicione uma nova tarefa" />

      <button>
        Criar
        <PlusCircle size={16} />
      </button>
    </TaskContainer>
  )
}
