import React, { FC, useEffect } from "react";
import { Snackbar, Button } from "@mui/material";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const ServiceWorkerWrapper: FC = () => {
	const [showReload, setShowReload] = React.useState(false);
	const [waitingWorker, setWaitingWorker] =
		React.useState<ServiceWorker | null>(null);

	const onSWUpdate = (registration: ServiceWorkerRegistration) => {
		setShowReload(true);
		setWaitingWorker(registration.waiting);
	};

	useEffect(() => {
		serviceWorkerRegistration.register({ onUpdate: onSWUpdate });
	}, []);

	const reloadPage = () => {
		waitingWorker?.postMessage({ type: "SKIP_WAITING" });
		setShowReload(false);
		window.location.reload();
	};

	return (
		<Snackbar
			open={showReload}
			message="Nová verzia stránky k dispozícii!"
			onClick={reloadPage}
			anchorOrigin={{ vertical: "top", horizontal: "center" }}
			action={
				<Button color="inherit" size="small" onClick={reloadPage}>
					Obnoviť
				</Button>
			}
		/>
	);
};

export default ServiceWorkerWrapper;
