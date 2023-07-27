import { Box, TextField } from "@mui/material";
import { Remove } from "@mui/icons-material";
import { Dispatch, SetStateAction } from "react";
import DeleteButton from "./DeleteButton";

interface IPropsOption {
	idx: number;
	questionIdx: number;
	count: number;
	setOptions: Dispatch<SetStateAction<number[]>>;
}

const Option = (props: IPropsOption) => {
	return (
		<Box>
			<DeleteButton
				disabled={props.count <= 1}
				setter={props.setOptions}
				value={props.idx}
				icon={<Remove />}
			/>
			<TextField
				aria-aria-label="Option text field"
				required={true}
				multiline={true}
				label="Option"
				name={`qst-${props.questionIdx}-opt-${props.idx}`}
				size="small"
			/>
		</Box>
	);
};

export default Option;
