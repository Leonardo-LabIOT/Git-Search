import axios from "axios";
import gitHubSearch from "./gitHubSearch";

const Axios = axios.create({
	baseURL: gitHubSearch.baseURL,

	timeout: 1000,
});
export default { Axios };
