// Plugins
import { loadFonts } from "./webfontloader";
import vuetify from "./vuetify";
import pinia from "../store";
import router from "../router";
import Firebase from "./Firebase";
import gitHubSearch from "./gitHubSearch";
import Axios from "./Axios";

export function registerPlugins(app) {
	loadFonts();
	app
		.use(vuetify) //
		.use(router) //
		.use(pinia) //
		.use(Firebase) //
		.use(Axios) //
		.use(gitHubSearch);
}
