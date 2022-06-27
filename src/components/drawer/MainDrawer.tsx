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

const MainDrawer = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useRecoilState(isDrawerOpenAtom);
	const setDatasetId = useSetRecoilState(datasetIdAtom);
	const setQuestionId = useSetRecoilState(questionIdAtom);

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
			<AccordionDrawer title="datasets">
				{datasets.map((dataset) => (
					<ListItem key={dataset.id}>
						<Button
							onClick={() => {
								setDatasetId(dataset.id);
								setQuestionId(0);
								setIsDrawerOpen(false);
							}}
						>
							<ListItemText primary={dataset.name} />
						</Button>
					</ListItem>
				))}
			</AccordionDrawer>
		</SwipeableDrawer>
	);
};

export default MainDrawer;
