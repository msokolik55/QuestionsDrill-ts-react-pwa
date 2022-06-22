import { selector } from "recoil";

export const demoSelector = selector({
	key: "demo",
	get({ get }) {
		return {};
	},
});
