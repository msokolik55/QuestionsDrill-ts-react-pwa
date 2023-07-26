import { Box, Button, TextField } from "@mui/material";
import { Remove } from "@mui/icons-material";
import { Dispatch, SetStateAction } from "react";

interface IPropsOption {
	idx: number;
	questionIdx: number;
	setOptions: Dispatch<SetStateAction<number[]>>;
}

const Option = (props: IPropsOption) => {
	return (
		<Box>
			<Button
				onClick={() => {
					props.setOptions((curr) =>
						curr.filter((item) => item !== props.idx)
					);
				}}
			>
				<Remove />
			</Button>
			<TextField
				required={true}
				multiline={true}
				// style={{ width: "80%" }}
				label="Option"
				name={`qst-${props.questionIdx}-opt-${props.idx}`}
				size="small"
			/>
		</Box>
	);
};

export default Option;
