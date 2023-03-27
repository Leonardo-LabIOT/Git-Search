<template>
	<div class="d-flex">
		<v-btn
			flat
			icon
			class="d-flex d-sm-none rounded btClass"
			@click="showMenu = !showMenu"
		>
			<v-icon class="fa" size="150%">fa-bars</v-icon>
		</v-btn>
		<div class="menu" v-if="showMenu" @click="showMenu = !showMenu">
			<v-list class="navContainer">
				<span class="titulo"
					><center>Navegar</center>
					<hr />
				</span>

				<span class="btLine">
					<i class="fa fa-home" />
					<buttonVue
						class="btlist"
						rota="Home"
						cor="black"
						icon="fa-home aria-hidden=true"
					>
					</buttonVue>
				</span>
				<hr />
				<span class="btLine">
					<i class="fa fa-star aria-hidden=true" />
					<buttonVue class="btlist" cor="black" rota="Favorites" />
				</span>
				<hr />
			</v-list>
		</div>
	</div>
</template>

<script>
import buttonVue from "./buttonVue";
export default {
	components: { buttonVue },
	data() {
		return {
			showMenu: false,
		};
	},
};
</script>

<style scoped lang="scss">
a {
	color: black;
	align-items: center;
}
.menu {
	display: flex;
	position: fixed;
	top: 10px;
	right: 10px;
	z-index: 20;
}
.navContainer {
	font-size: 1rem;
	width: 255px;
	padding: 20px;
	border: 2px black solid;
	box-shadow: 0px 0px 5px 5px rgba($color: #000000, $alpha: 0.25);
	background-color: #333 !important;
	background-color: #dadada !important;
}
.btLine {
	display: flex;
	flex-direction: row;
	height: 40px;
	justify-items: flex-start;
	align-items: center;
	color: white;
	color: black;
}
.titulo {
	font-size: 20px;
	color: #ffffff;
	color: #000000;
	font-weight: bold;
	hr {
		color: #fff;
		color: #000000;
		border: 1px solid #fff;
		border: 1px solid #000000;
		margin-bottom: 15px;
	}
}
hr {
	margin: 0 -10px;
}
.btClass {
	display: flex;
	align-items: center !important;
	justify-content: center !important;
	border-radius: 50% !important;
}
.btlist {
	display: flex;
	font-size: 15px;
	justify-content: flex-start;
	align-items: center;
}
</style>
