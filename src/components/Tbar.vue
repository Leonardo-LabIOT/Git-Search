<template>
	<div v-if="renderToolBar" class="tBar">
		<span class="tooBarFont titulo">
			<router-link to="/">
				<strong> GitHub </strong>
				Search
			</router-link>
		</span>
		<v-spacer></v-spacer>
		<router-link
			class="r-Link tooBarFont"
			:class="{ activeRoute: $route.name == 'Home' }"
			to="/"
		>
			HOME
		</router-link>
		<router-link
			class="r-Link tooBarFont"
			to="/favorites"
			:class="{ activeRoute: $route.name == 'Favorites' }"
			>FAVORITES
		</router-link>
	</div>
</template>
<script>
export default {
	name: "tooBa",
	props: { renderToolBar: Boolean },
};
</script>

<style scoped lang="scss">
* {
	font-family: "Inter", sans-serif;
}
.tBar {
	height: 84px;
	width: 100%;
	display: flex;
	flex-direction: row;
	padding: 15px 65px;
	// background-color: #d9d9d9;//teste
	background-color: #dadada;
	box-shadow: 0 4px 4px 0 rgba($color: #000000, $alpha: 0.25);
	align-items: center;
	justify-content: space-around;
}
a {
	text-decoration: none;
	color: #333;
}

.tooBarFont {
	font-weight: 600;
	font-size: 18px;
	color: #000;
}
.titulo {
	font-size: 32px;
	font-weight: 500;
	font-family: "Rubik", "Roboto", "Inter", sans-serif;
	font-style: italic;
	strong {
		font-style: normal;
		font-weight: 700;
	}
}
.r-Link {
	margin: 20px;
}
.activeRoute {
	color: red;
}
</style>
