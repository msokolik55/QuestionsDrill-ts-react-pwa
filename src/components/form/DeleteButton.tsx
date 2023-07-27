import { Button } from "@mui/material";
import { Dispatch, ReactElement, SetStateAction } from "react";

interface IDeleteButtonProps {
	disabled: boolean;
	value: number;
	setter: Dispatch<SetStateAction<number[]>>;
	icon: ReactElement;
}

const DeleteButton = (props: IDeleteButtonProps) => {
	return (
		<Button
			onClick={() => {
				props.setter((curr) =>
					curr.filter((item) => item !== props.value)
				);
			}}
			disabled={props.disabled}
		>
			{props.icon}
		</Button>
	);
};

export default DeleteButton;
