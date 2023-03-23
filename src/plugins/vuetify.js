/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "font-awesome/css/font-awesome.min.css";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";
import { aliases, fa } from "vuetify/iconsets/fa4";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
	theme: {
		themes: {
			light: {
				colors: {
					primary: "#ddd",
					secondary: "#fff",
				},
			},
			dark: {
				colors: {
					primary: "#333",
					secondary: "#555",
				},
			},
		},
	},
	icons: {
		defaultSet: "fa",
		aliases,
		sets: {
			fa,
		},
	},
});
