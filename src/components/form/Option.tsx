import { Button } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface IPropsOption {
	idx: number;
	questionIdx: number;
	setOptions: Dispatch<SetStateAction<number[]>>;
}

const Option = (props: IPropsOption) => {
	return (
		<>
			<Button
				onClick={() => {
					props.setOptions((curr) =>
						curr.filter((item) => item !== props.idx)
					);
				}}
			>
				X
			</Button>
			<label>Option:</label>
			<input name={`qst-${props.questionIdx}-opt-${props.idx}`} />
			<br />
		</>
	);
};

export default Option;
