import { useRecoilState, useRecoilValue } from "recoil";
import { NavLink } from "react-router-dom";

import { Box, Divider, IconButton, SwipeableDrawer } from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";

// import datasets from "../../data/datasets";
import { datasetsAtom, isDrawerOpenAtom } from "../../state/atom";
import AccordionDrawer from "./AccordionDrawer";
import ItemDrawer from "./ItemDrawer";

const MainDrawer = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useRecoilState(isDrawerOpenAtom);
	const datasets = useRecoilValue(datasetsAtom);

	// TODO: move everything into classes
	const handleLink = ({
		isActive,
		isPending,
	}: {
		isActive: boolean;
		isPending: boolean;
	}) => {
		return {
			textDecoration: "none",
			color: isActive ? "white" : isPending ? "red" : "black",
			backgroundColor: isActive ? "blue" : "inherit",
		};
	};

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

			<NavLink to="/" style={handleLink}>
				<ItemDrawer title="Home" datasetId="" />
			</NavLink>

			<AccordionDrawer title="drilly">
				{datasets.map((dataset) => (
					<NavLink
						key={dataset.id}
						to={`dataset/${dataset.id}`}
						style={handleLink}
					>
						<ItemDrawer
							title={dataset.name}
							datasetId={dataset.id || ""}
						/>
					</NavLink>
				))}
			</AccordionDrawer>

			{/* TODO: remove datasetId */}
			<AccordionDrawer title="manage">
				<NavLink to="dataset/add" style={handleLink}>
					<ItemDrawer title="Add" datasetId="" />
				</NavLink>
				<NavLink to="dataset/import" style={handleLink}>
					<ItemDrawer title="Import" datasetId="" />
				</NavLink>
				<NavLink to="dataset/delete" style={handleLink}>
					<ItemDrawer title="Delete" datasetId="" />
				</NavLink>
			</AccordionDrawer>
		</SwipeableDrawer>
	);
};

export default MainDrawer;
