import { AlertColor } from "@mui/material";

export interface ISnackbarProps {
	open: boolean;
	severity: AlertColor;
	text: string;
}
