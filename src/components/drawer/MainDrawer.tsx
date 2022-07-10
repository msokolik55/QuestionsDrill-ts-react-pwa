import { useRecoilState } from "recoil";

import { Divider, IconButton, SwipeableDrawer } from "@material-ui/core";
import { ChevronLeft } from "@material-ui/icons";

import datasets from "../../data/datasets";
import { isDrawerOpenAtom } from "../../state/atom";
import AccordionDrawer from "./AccordionDrawer";
import ItemDrawer from "./ItemDrawer";

const MainDrawer = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useRecoilState(isDrawerOpenAtom);

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
		</SwipeableDrawer>
	);
};

export default MainDrawer;
