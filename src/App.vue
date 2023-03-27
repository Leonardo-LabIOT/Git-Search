<template>
	<main>
		<tBar renderToolBar />

		<router-view />
	</main>
</template>

<script>
import tBar from "@/components/TBar";

export default {
	data() {
		return {
			renderToolBar: false,
		};
	},
	components: {
		tBar,
	},
};
</script>
<style scoped lang="scss">
* {
	box-sizing: border-box;
	max-width: 100vw;
	margin: 0;
	padding: 0;
	flex-wrap: wrap;
}
main {
	max-width: 100vw;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
}

.tbar {
	height: 84px;
	background-color: black;
}
</style>
