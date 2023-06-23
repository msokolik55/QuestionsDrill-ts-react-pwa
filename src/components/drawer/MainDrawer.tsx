import { useRecoilState, useRecoilValue } from "recoil";

import { Divider, IconButton, SwipeableDrawer } from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";

// import datasets from "../../data/datasets";
import { datasetsAtom, isDrawerOpenAtom } from "../../state/atom";
import AccordionDrawer from "./AccordionDrawer";
import ItemDrawer from "./ItemDrawer";

const MainDrawer = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useRecoilState(isDrawerOpenAtom);
	const datasets = useRecoilValue(datasetsAtom);

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
			<ItemDrawer title="Domov" datasetId="" />
			<AccordionDrawer title="drilly">
				{datasets.map((dataset) => (
					<ItemDrawer
						key={dataset.id}
						title={dataset.name}
						datasetId={dataset.id}
					/>
				))}
			</AccordionDrawer>
			<ItemDrawer title="Add" datasetId="" />
		</SwipeableDrawer>
	);
};

export default MainDrawer;
