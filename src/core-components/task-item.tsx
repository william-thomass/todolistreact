import ButtonIcon from "../components/button-icon";
import Text from "../components/text";
import TrashIcon from "../assets/icons/Trash-Regular.svg?react"
import PincelIcon from "../assets/icons/PencilSimple-Regular.svg?react"
import XIcon from "../assets/icons/X-Regular.svg?react"
import CheckIcon from "../assets/icons/Check-Regular.svg?react"
import Card from "../components/Card";
import InputCheckbox from "../components/input-checkbox";
import React from "react";
import InputText from "../components/inputText";
import { TaskState, type Task } from "../models/task";
import { cx } from "class-variance-authority";

export interface TaskItemProps{
  task:Task;
}

export default function TaskItem({task}:TaskItemProps){

  const [isEditing, setIsEditing] = React.useState(
    task?.state === TaskState.Creating
  )

  const [taskTitle, setTaskTitle] = React.useState("")

  function handleEditing(){
    setIsEditing(true)
  }

  function handleCancelEdit(){
    setIsEditing(false)
  }

  function handleTaskTitle(e:React.ChangeEvent<HTMLInputElement>){
    setTaskTitle(e.target.value || "")
    
  }

  function handleSaveTask(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    console.log({id: task.id, title:taskTitle})
    setIsEditing(false)
  }

  return(
    <Card size={"md"} >
      {!isEditing ? (
  <div className="flex items-center gap-4">
      <InputCheckbox 
      value={task?.concluded?.toString()}
      checked={task?.concluded}
      />
      <Text className={cx("flex-1",{"line-through":task?.concluded})}>{task?.title}</Text>
    <div>
      <ButtonIcon variant={"tertinary"} icon={TrashIcon}/>
      <ButtonIcon variant={"tertinary"} icon={PincelIcon} onClick={handleEditing}/>
    </div>
  </div>
    ) : ( 
      <form onSubmit={handleSaveTask} className="flex items-center gap-4">
      <InputText className="flex-1" 
      onChange={handleTaskTitle}
      required
      autoFocus
      />
      <div className="flex gap-1">
      <ButtonIcon type="button" variant={"secondary"} icon={XIcon} onClick={handleCancelEdit}/>
      <ButtonIcon type="submit" variant={"primary"} icon={CheckIcon}/>
    </div>
      </form>
    )}
    </Card>
  )
}