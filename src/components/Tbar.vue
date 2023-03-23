<template>
	<!-- <div class="tBar">class="tBar" -->
	<v-toolbar v-if="renderToolBar" tooBa>
		<v-card-title tooBarFont titulo>
			<router-link to="/">
				<strong> GitHub </strong>
				Search
			</router-link>
		</v-card-title>

		<v-spacer></v-spacer>

		<v-toolbar-items flat class="d-none d-sm-flex fill-height" tooItens>
			<buttonVue rota="Home" />
			<buttonVue rota="Favorites" />
		</v-toolbar-items>
		<!-- <v-icon> </v-icon> -->

		<navBarVue />

		<!-- <v-app-bar-nav-icon v-bind="props"> </v-app-bar-nav-icon> -->
		<!-- <button @click="responsive">Click!</button> -->
	</v-toolbar>
	<!-- </div> -->
</template>
<script>
import buttonVue from "./buttonVue";
import navBarVue from "./navBarVue";
export default {
	name: "tooBa",
	props: { renderToolBar: Boolean },
	components: {
		buttonVue,
		navBarVue,
	},
	data() {
		return { desktop: true };
	},
	methods: {
		responsive() {
			this.desktop = !this.desktop;
		},
	},
};
</script>

<style scoped lang="scss">
* {
	font-family: "Inter", sans-serif;
}
a {
	text-decoration: none;
	color: #333;
}
[tooBa] {
	height: 84px;
	width: 100%;
	display: flex;
	flex-direction: row;
	padding: 15px;
	background-color: #dadada;
	box-shadow: 0 4px 4px 0 rgba($color: #000000, $alpha: 0.25);
	align-items: center;
}

[tooBarFont] {
	font-weight: 600;
	font-size: 18px;
	color: #000;
}
[titulo] {
	font-size: 32px;
	font-weight: 500;
	font-family: "Rubik", "Roboto", "Inter", sans-serif;
	font-style: italic;
	strong {
		font-style: normal;
		font-weight: 700;
	}
}
[tooItens] {
	display: flex;
	align-items: center;
	justify-content: center;
}

</style>
