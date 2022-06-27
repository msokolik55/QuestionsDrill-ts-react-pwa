import { useSetRecoilState } from "recoil";

import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { Menu } from "@material-ui/icons";

import { isDrawerOpenAtom } from "../state/atom";
import MainDrawer from "./drawer/MainDrawer";

const MainPage = (props: { content: JSX.Element }) => {
	const setIsDrawerOpen = useSetRecoilState(isDrawerOpenAtom);

	return (
		<>
			<AppBar position="static" color="secondary">
				<Toolbar>
					<IconButton
						color="inherit"
						onClick={() => setIsDrawerOpen(true)}
						edge="start"
					>
						<Menu />
					</IconButton>
					<Typography style={{ fontWeight: "bold" }}>Drill otázok</Typography>
				</Toolbar>
			</AppBar>

			<MainDrawer />

			{props.content}
		</>
	);
};

export default MainPage;
