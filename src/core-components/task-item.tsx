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

export default function TaskItem(){

  const [isEditing, setIsEditing] = React.useState(false)

  function handleEditing(){
    setIsEditing(true)
  }

  function handleCancelEdit(){
    setIsEditing(false)
  }

  return(
    <Card size={"md"} className="flex items-center gap-4">
      {!isEditing ? (
      <>
      <InputCheckbox />
      <Text className="flex-1">🛒 Fazer compras da semana</Text>
    <div>
      <ButtonIcon variant={"tertinary"} icon={TrashIcon}/>
      <ButtonIcon variant={"tertinary"} icon={PincelIcon} onClick={handleEditing}/>
    </div>
    </>
    ) : ( 
      <>
      <InputText className="flex-1"/>
      <div className="flex gap-1">
      <ButtonIcon variant={"secondary"} icon={XIcon} onClick={handleCancelEdit}/>
      <ButtonIcon variant={"primary"} icon={CheckIcon}/>
    </div>
      </>
    )}
    </Card>
  )
}