<template>
	<router-link
		class="fill-height"
		flat
		btn
		:to="newRote"
		:class="$route.name == rota ? 'btAct' : 'btIdl'"
	>
		{{ rota.toUpperCase() }}
	</router-link>
</template>

<script>
export default {
	props: {
		rota: String,
	},
	data() {
		return { newRote: this.rota == "Home" ? "/" : "/favorites" };
	},
};
</script>

<style scoped lang="scss">
a {
	text-decoration: none;
	// color: #000000;
}
[btn] {
	font-family: "Inter", Roboto, sans-serif !important;

	font-weight: 600;
	font-size: 20px;
	display: flex;
	align-items: center;
	width: 100px;
	height: 60px;
}
.btAct {
	color: red !important;
}

.btIdl {
	color: black !important;
}
</style>
