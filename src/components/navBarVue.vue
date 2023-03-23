<template>
	<v-btn flat icon class="d-flex d-sm-none rounded btClass" size="small">
		<v-menu class="d-flex" activator="parent">
			<v-list class="navContainer">
				<span class="titulo"
					><center>Navegar</center>
					<hr />
				</span>

				<span class="btLine">
					<i class="fa fa-home" />
					<buttonVue class="btlist" rota="Home" icon="fa-home aria-hidden=true">
					</buttonVue>
				</span>
				<hr />
				<span class="btLine">
					<i class="fa fa-star aria-hidden=true" />
					<buttonVue class="btlist" rota="Favorites" />
				</span>
				<hr />

				<!-- </v-list-item> -->
			</v-list> </v-menu
		><v-icon class="fa-2x">fa-bars</v-icon>
	</v-btn>
</template>

<script>
import buttonVue from "./buttonVue";
export default {
	components: { buttonVue },
};
</script>

<style scoped lang="scss">
.navContainer {
	font-size: 1rem;
	width: 255px;
	padding: 20px;
	box-shadow: 0px 0px 5px 5px rgba($color: #000000, $alpha: 0.25);
	background-color: #dadada !important;
}
.btLine {
	display: flex;
	flex-direction: row;
	justify-items: flex-start;
	align-items: center;
}
.titulo {
	font-size: 20px;
	color: #000000;
	font-weight: bold;
	hr {
		color: #000000;
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
	font-size: 15px;
	justify-content: flex-start;
}
</style>
