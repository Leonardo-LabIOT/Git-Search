<template>
	<router-link
		class="fill-height"
		flat
		btn
		:to="newRote"
		:class="$route.name == rota ? 'btAct' : 'btIdl'"
		:style="`color: ${corLocal}`"
	>
		{{ rota.toUpperCase() }}
	</router-link>
</template>

<script>
export default {
	props: {
		rota: String,
		cor: String,
	},
	data() {
		return {
			newRote: this.rota == "Home" ? "/" : "/favorites",
			corLocal: this.cor || "black",
		};
	},
};
</script>

<style scoped lang="scss">

a {
	text-decoration: none;
}
[btn] {
	font-family: "Inter", Roboto, sans-serif;
	font-weight: 600;
	font-size: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 15px;
}
.btAct {
	color: red !important;
}
</style>
