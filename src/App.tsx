import TrashIcon from "./assets/icons/Trash-Regular.svg?react";
import Text from "./components/text";
import Icon from "./components/icon";
import SpinnerIcon from "./assets/icons/spinner.svg?react"
import { Badge } from "./components/badge";
import Button from "./components/button";
import PlusIcon from "./assets/icons/Plus-Regular.svg?react"

export default function App() {
	return (
		<div className="grid gap-3">
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
			<div>
				<Badge variant={"secondary"}>5</Badge>
				<Badge variant={"primary"}>2 de 5</Badge>
			</div>
			<div>
				<Button icon={PlusIcon}>Nova tarefa</Button>
			</div>
		</div>
	);
}
