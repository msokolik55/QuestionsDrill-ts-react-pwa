import { useSetRecoilState } from "recoil";
import { Outlet } from "react-router-dom";

import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";

import { isDrawerOpenAtom } from "../state/atom";
import MainDrawer from "../components/drawer/MainDrawer";

const LandingPage = () => {
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
					<Typography style={{ fontWeight: "bold" }}>
						Drill otázok
					</Typography>
				</Toolbar>
			</AppBar>

			<MainDrawer />

			<Outlet />
		</>
	);
};

export default LandingPage;
