import { useRecoilState, useRecoilValue } from "recoil";
import { Link } from "react-router-dom";

import { Box, Divider, IconButton, SwipeableDrawer } from "@mui/material";
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
			<Box>
				<IconButton onClick={() => setIsDrawerOpen(false)}>
					<ChevronLeft />
				</IconButton>
			</Box>
			<Divider />

			<Link to="/">
				<ItemDrawer title="Home" datasetId="" />
			</Link>

			<AccordionDrawer title="drilly">
				{datasets.map((dataset) => (
					<Link key={dataset.id} to={`dataset/${dataset.id}`}>
						<ItemDrawer
							title={dataset.name}
							datasetId={dataset.id || ""}
						/>
					</Link>
				))}
			</AccordionDrawer>

			<Link to="dataset/add">
				<ItemDrawer title="Add" datasetId="" />
			</Link>
		</SwipeableDrawer>
	);
};

export default MainDrawer;
