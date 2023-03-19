import { defineStore } from "pinia";
export const favoritesStore = defineStore("favorites", {
	state() {
		return [
			{ name: "LEO" },
			{ name: "MIK" },
			{ name: "DON" },
			{ name: "RAFA" },
		];
	},
});
