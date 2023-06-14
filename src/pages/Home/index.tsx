// import { Clipboard } from 'phosphor-react'
import { Trash } from 'phosphor-react'
import { Header } from '../../components/Header'
import { TaskForm } from './components/TaskForm'
import { TasksContainer, TasksTable } from './styles'
import * as Checkbox from '@radix-ui/react-checkbox'
import { InfoTasks } from './components/InfoTasks'

export function Home() {
  return (
    <div>
      <Header />
      <TaskForm />

      <InfoTasks />

      <TasksContainer>
        <TasksTable>
          <tbody>
            <tr>
              <td>
                <Checkbox.Root>
                  <Checkbox.Indicator />
                </Checkbox.Root>
              </td>
              <td>
                Integer urna interdum massa libero auctor neque turpis turpis
                semper. Duis vel sed fames integer.
              </td>
              <td>
                <button type="button">
                  <Trash size={24} />
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <Checkbox.Root>
                  <Checkbox.Indicator />
                </Checkbox.Root>
              </td>
              <td>
                Integer urna interdum massa libero auctor neque turpis turpis
                semper. Duis vel sed fames integer.
              </td>
              <td>
                <button type="button">
                  <Trash size={24} />
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <Checkbox.Root>
                  <Checkbox.Indicator />
                </Checkbox.Root>
              </td>
              <td>
                Integer urna interdum massa libero auctor neque turpis turpis
                semper. Duis vel sed fames integer.
              </td>
              <td>
                <button type="button">
                  <Trash size={24} />
                </button>
              </td>
            </tr>
          </tbody>
        </TasksTable>
      </TasksContainer>
    </div>
  )
}
