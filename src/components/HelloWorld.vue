<template>
	<button class="ma-3 pa-2 border" @click="onClick">click</button>
	<v-card class="dark center">
		{{ myProgress }}
	</v-card>
	<v-progress-linear
		color="green"
		stream
		:model-value="bufferValue"
		:buffer-value="0"
		height="15"
	></v-progress-linear>
	<v-spacer></v-spacer>
	<div class="dark center">{{ myProgress }}</div>
	<v-spacer></v-spacer>
</template>

<script>
export default {
	data() {
		return {
			myProgress: 0,
		};
	},
	methods: {
		onClick() {
			this.loading = true;

			setTimeout(() => {
				this.loading = false;
				this.loaded = true;
				this.myProgress += 10;
				this.myProgress > 100
					? (this.myProgress = 0)
					: console.log(this.myProgress);
			}, 500);
		},
	},
};
</script>

<style scoped lang="scss">
.dark {
	background-color: black;
	color: antiquewhite;
	font-size: 50px;
	width: 75%;
	height: 300px;
}
</style>
