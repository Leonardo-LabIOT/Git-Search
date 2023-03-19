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
main {
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
}
</style>
