import TrashIcon from "./assets/icons/Trash-Regular.svg?react";
import Text from "./components/text";
import Icon from "./components/icon";
import SpinnerIcon from "./assets/icons/spinner.svg?react"
import { Badge } from "./components/badge";
import Button from "./components/button";
import PlusIcon from "./assets/icons/Plus-Regular.svg?react"
import ButtonIcon from "./components/button-icon";
import InputText from "./components/inputText";
import InputCheckbox from "./components/input-checkbox";
import Card from "./components/Card";
import Container from "./components/container";
import Skeleton from "./components/skeleton";

export default function App() {
	return (
		<Container>

		<div className="grid gap-10">
			<div className="flex flex-col gap-2">
				<Text variant="body-md" className="text-pink-base">
					Olá Mundo!
				</Text>
				<Text className="text-green-base">Olá Mundo!</Text>
				<Text variant="body-sm-bold">Olá Mundo!</Text>
			</div>
			<div className="flex gap-1">
				<Icon svg={TrashIcon} className="fill-green-base" />
				<Icon svg={SpinnerIcon} animate/>
			</div>
			<div className="flex gap-1">
				<Badge variant={"secondary"}>5</Badge>
				<Badge variant={"primary"}>2 de 5</Badge>
				<Badge loading>5</Badge>
			</div>
			<div>
				<Button icon={PlusIcon}>Nova tarefa</Button>
			</div>
			<div className="flex gap-1">
				<ButtonIcon icon={TrashIcon} variant={"primary"}/>
				<ButtonIcon icon={TrashIcon} variant={"secondary"}/>
				<ButtonIcon icon={TrashIcon} variant={"tertinary"}/>
				<ButtonIcon icon={TrashIcon} loading/>
			</div>
			<div>
				<InputText size={"md"} />
			</div>
			<div className="flex gap-1">
				<InputCheckbox/>
				<InputCheckbox loading/>
			</div>

			<div>
				<Card size={"md"}>Olá mundo</Card>
			</div>
			<div className="space-y-2">
			  <Skeleton className="h-6"/>
			  <Skeleton className="h-6"/>
			  <Skeleton className="h-6 w-96"/>
			</div>
		</div>
		</Container>
	);
}
