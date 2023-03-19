// Utilities
import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", {
	state: () => ({
		//
		return: {
			users: [{ name: "Leo" }, { name: "Mik" }],
		},
	}),
});
