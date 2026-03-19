import Button from "../components/button";
import PlusIcon from "../assets/icons/Plus-Regular.svg?react"
import TaskItem from "./task-item";
import useTasks from "../hooks/use-tasks";
import useTask from "../hooks/use-task";
import { TaskState } from "../models/task";

export default function TasksList(){

  const { tasks } = useTasks()
  console.log(tasks)
  const { prepareTask } = useTask()

  function handleNewTask(){
    prepareTask()
  }

  return (
    <>
    <Button
    disabled={tasks.some((task)=> task.state === TaskState.Creating)}
    icon={PlusIcon} className="w-full" onClick={handleNewTask}>Nova Tarefa</Button>
    <section className="space-y-1">
      {tasks.map((task)=> (
        <TaskItem key={task.id} task={task}/>))}
    

    </section>
    </>
  )
}