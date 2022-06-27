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
import { datasetIdAtom, isDrawerOpenAtom } from "../../state/atom";
import AccordionDrawer from "./AccordionDrawer";

const MainDrawer = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useRecoilState(isDrawerOpenAtom);
	const setDatasetId = useSetRecoilState(datasetIdAtom);

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
				{/* TODO: choose dataset based on its uuid */}
				{datasets.map((dataset, index) => (
					<ListItem key={dataset.name}>
						<Button
							onClick={() => {
								setDatasetId(index);
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
