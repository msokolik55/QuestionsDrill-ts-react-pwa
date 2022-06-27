import { useRecoilState } from "recoil";

import {
	Button,
	Divider,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	SwipeableDrawer,
} from "@material-ui/core";
import { ChevronLeft, ListAlt } from "@material-ui/icons";

import { isDrawerOpenAtom } from "../../state/atom";

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
			{/* TODO: openable sublists */}
			<List>
				{["Datasets"].map((text) => (
					<ListItem key={text}>
						<Button>
							<ListItemIcon>
								<ListAlt />
							</ListItemIcon>
							<ListItemText primary={text} />
						</Button>
					</ListItem>
				))}
			</List>
		</SwipeableDrawer>
	);
};

export default MainDrawer;
