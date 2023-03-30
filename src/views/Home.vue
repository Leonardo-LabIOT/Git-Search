<template>
	<div class="principal">
		<v-img contain imagem src="@/assets/github-mark.svg " />
		<div class="interactiveContainer">
			<div class="btcontainer">
				<button
					class="btns"
					v-for="(button, ind) in buttons"
					:key="ind"
					:class="{ primar: button.isActive }"
					@click="selectedButton(button)"
				>
					{{ button.text }}
				</button>
			</div>
			<SearchText
				ref="inputFocus"
				searchField
				:repoOrUser="buttons[0].isActive"
			/>
		</div>
	</div>
</template>
<script>
import SearchText from "@/components/SearchText.vue";
export default {
	data() {
		return {
			buttons: [
				{ text: "Repositórios", isActive: true },
				{ text: "Usuários", isActive: false },
			],
			timeStart: 0,
		};
	},
	components: {
		SearchText,
	},

	methods: {
		selectedButton(bt) {
			this.buttons.forEach((e) => {
				e.isActive = false;
			});
			bt.isActive = true;
			this.$refs.inputFocus.focus();
		},
	},
};
</script>
<style scoped lang="scss">
* {
	box-sizing: border-box !important;
}
.principal {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	align-items: center;
}
.interactiveContainer {
	display: flex;
	flex-direction: column;
	align-items: center;
	// background-color: blue;
	padding: 21px;
	width: 100vw;
}

.btcontainer {
	display: flex;
	flex-direction: row;
	width: 100%;
	max-width: 500px;
	justify-content: space-between;
	// background-color: red;
}
.btns {
	width: 12em;
	height: 3em;
	max-width: 39vw;
	font-weight: 700;
	font-size: 1.2em;
	color: black;
	background-color: white;
	border-radius: 10px;
	border: 2px solid black;
}
[searchField] {
	display: flex;
	width: 100%;
	max-width: 1024px;
	font-size: 1.5em;
	margin: 40px 0;
	
}

.primar {
	color: white;
	background-color: black;
}
[imagem] {
	margin: 50px;
	padding: 0;
	width: 169px;
	height: 169px;
	z-index: 1 !important;
}
@media (width<10px) {
	.btcontainer,
	[searchField] {
		width: 90vw;
		margin: 0;
		padding: 0;
	}
	.btns {
		margin: 0;
		padding: 0;
	}
}
</style>
