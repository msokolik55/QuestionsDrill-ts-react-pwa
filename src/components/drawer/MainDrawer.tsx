import { useRecoilState, useSetRecoilState } from "recoil";

import {
	Button,
	Divider,
	IconButton,
	ListItem,
	ListItemText,
	SwipeableDrawer,
} from "@material-ui/core";
import { ChevronLeft } from "@material-ui/icons";

import datasets from "../../data/datasets";
import {
	datasetIdAtom,
	isDrawerOpenAtom,
	questionIdAtom,
} from "../../state/atom";
import AccordionDrawer from "./AccordionDrawer";
import styles from "./MainDrawer.module.css";

const MainDrawer = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useRecoilState(isDrawerOpenAtom);
	const setDatasetId = useSetRecoilState(datasetIdAtom);
	const setQuestionId = useSetRecoilState(questionIdAtom);

	const selectItem = (id: string) => {
		setDatasetId(id);
		setQuestionId(0);
		setIsDrawerOpen(false);
	};

	return (
		<SwipeableDrawer
			variant="persistent"
			anchor="left"
			open={isDrawerOpen}
			onOpen={() => setIsDrawerOpen(true)}
			onClose={() => setIsDrawerOpen(false)}
		>
			<div>
				<IconButton onClick={() => setIsDrawerOpen(false)}>
					<ChevronLeft />
				</IconButton>
			</div>
			<Divider />
			<ListItem>
				<Button onClick={() => selectItem("")}>
					<ListItemText primary="Domov" />
				</Button>
			</ListItem>
			<AccordionDrawer title="datasets">
				{datasets.map((dataset) => (
					<ListItem
						key={dataset.id}
						className={styles.item}
						onClick={() => selectItem(dataset.id)}
					>
						<ListItemText primary={dataset.name} />
					</ListItem>
				))}
			</AccordionDrawer>
		</SwipeableDrawer>
	);
};

export default MainDrawer;
