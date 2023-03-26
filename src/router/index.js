// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/hello",
		name: "Hello",
		component: () => import("@/components/HelloWorld.vue"),
	},
	{
		path: "",
		name: "Home",
		component: () => import("@/views/Home.vue"),
	},
	{
		path: "/",
		name: "Home",
		component: () => import("@/views/Home.vue"),
	},
	{
		path: "/favorites",
		name: "Favorites",
		component: () => import("@/views/Favoritos.vue"),
	},
	{
		path: "/UserNotFound",
		name: "UserNotFound",
		component: () => import("@/views/UserNotFound.vue"),
	},
	{
		path: "/User",
		name: "User",
		component: () => import("@/views/User.vue"),
	},
	{
		path: "/Users",
		name: "Users",
		component: () => import("@/views/Users.vue"),
	},
	{
		path: "/repositorios",
		name: "Repositorios",
		component: () => import("@/views/Repositorios.vue"),
	},
	{
		path: "/:pathMatch(.*)*",
		name: "PageNotFound",
		component: () => import("@/views/PageNotFound.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
