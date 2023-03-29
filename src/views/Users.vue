<template>
	<div>
			{{ user }}
	</div>
</template>

<script>
import { favStore } from "@/main";

export default {
	props: {
		// user: Object,
	},
	data() {
		return {
			user: favStore[0],
		};
	},
};
</script>

<style scoped lang="scss">
* {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 0;
	padding: 0;

}</style>
