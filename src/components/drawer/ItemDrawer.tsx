import { useSetRecoilState } from "recoil";

import { ListItem, ListItemText } from "@material-ui/core";

import {
	datasetIdAtom,
	isDrawerOpenAtom,
	questionIdAtom,
} from "../../state/atom";
import styles from "./MainDrawer.module.css";

interface IItemDrawerProps {
	title: string;
	datasetId: string;
}

const ItemDrawer = (props: IItemDrawerProps) => {
	const setIsDrawerOpen = useSetRecoilState(isDrawerOpenAtom);
	const setDatasetId = useSetRecoilState(datasetIdAtom);
	const setQuestionId = useSetRecoilState(questionIdAtom);

	const selectItem = (id: string) => {
		setDatasetId(id);
		setQuestionId(0);
		setIsDrawerOpen(false);
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
