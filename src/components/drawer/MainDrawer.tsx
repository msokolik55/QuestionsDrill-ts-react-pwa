import { useRecoilState, useRecoilValue } from "recoil";
import { Link } from "react-router-dom";

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
			<Link to="/">
				<ItemDrawer title="Home" datasetId="" />
			</Link>
			<AccordionDrawer title="drilly">
				{datasets.map((dataset) => (
					<Link to={`dataset/${dataset.id}`}>
						<ItemDrawer
							key={dataset.id}
							title={dataset.name}
							datasetId={dataset.id}
						/>
					</Link>
				))}
			</AccordionDrawer>
		</SwipeableDrawer>
	);
};

export default MainDrawer;
