import { useRecoilState, useSetRecoilState } from "recoil";

import { ListItem, ListItemText } from "@mui/material";

import {
	answeredQuestionsAtom,
	answeredWrongAtom,
	datasetIdAtom,
	isDrawerOpenAtom,
	questionIdAtom,
} from "../../state/atom";
import styles from "./ItemDrawer.module.css";

interface IItemDrawerProps {
	title: string;
	datasetId: string;
}

const ItemDrawer = (props: IItemDrawerProps) => {
	const setIsDrawerOpen = useSetRecoilState(isDrawerOpenAtom);
	const [datasetId, setDatasetId] = useRecoilState(datasetIdAtom);
	const setQuestionId = useSetRecoilState(questionIdAtom);

	const setAnsweredWrongAtom = useSetRecoilState(answeredWrongAtom);
	const setAnsweredQuestionsAtom = useSetRecoilState(answeredQuestionsAtom);

	const selectItem = (id: string) => {
		setIsDrawerOpen(false);

		if (datasetId === id) {
			return;
		}

		setDatasetId(id);
		setQuestionId(0);

		setAnsweredWrongAtom([]);
		setAnsweredQuestionsAtom([]);
	};

	return (
		<ListItem
			className={styles.item}
			onClick={() => selectItem(props.datasetId)}
		>
			<ListItemText primary={props.title} />
		</ListItem>
	);
};

export default ItemDrawer;
