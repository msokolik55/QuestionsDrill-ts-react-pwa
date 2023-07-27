import { useRecoilState, useSetRecoilState } from "recoil";
import { Outlet } from "react-router-dom";

import {
	AppBar,
	Container,
	IconButton,
	Snackbar,
	Toolbar,
	Typography,
	Alert,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

import { isDrawerOpenAtom, snackbarPropsAtom } from "../state/atom";
import MainDrawer from "../components/drawer/MainDrawer";

const LandingPage = () => {
	const setIsDrawerOpen = useSetRecoilState(isDrawerOpenAtom);
	const [snackbarProps, setSnackbarProps] = useRecoilState(snackbarPropsAtom);

	const closeSnackbar = () => {
		setSnackbarProps((old) => {
			return { ...old, open: false };
		});
	};

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

			<Container style={{ marginTop: "1em" }}>
				<Outlet />
			</Container>

			<Snackbar
				open={snackbarProps.open}
				autoHideDuration={3000}
				onClose={closeSnackbar}
			>
				<Alert
					onClose={closeSnackbar}
					severity={snackbarProps.severity}
					sx={{ width: "100%" }}
				>
					{snackbarProps.text}
				</Alert>
			</Snackbar>
		</>
	);
};

export default LandingPage;
