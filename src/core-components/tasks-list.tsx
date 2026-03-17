import Button from "../components/button";
import PlusIcon from "../assets/icons/Plus-Regular.svg?react"
import TaskItem from "./task-item";

export default function TasksList(){

  return (
    <>
    <Button icon={PlusIcon} className="w-full">Nova Tarefa</Button>
    <section className="space-y-1">
      <TaskItem/>
      <TaskItem/>
      <TaskItem/>
      <TaskItem/>
    </section>
    </>
  )
}