<template>
	<div class="principal">
		<v-img contain imagem src="@/assets/github-mark.svg "
 />
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
			searchField
			:repoOrUser="buttons[0].isActive"
		/>
		<input type="text" />
	</div>
</template>
<script>
import SearchText from "@/components/SearchText.vue";
export default {
	data() {
		return {
			buttons: [
				{ text: "Repositório", isActive: true },
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
		},
	},
};
</script>
<style scoped lang="scss">
.principal {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	width: 100vh;
}
[searchField] {
	padding: 0;
	margin: 0;
	position: absolute;
	top: 476px;
}

.btcontainer {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 379px;
}
.btns {
	width: 186px;
	height: 51px;
	font-weight: 700;
	font-size: 20px;
	color: black;
	background-color: white;
	border-radius: 5px;
	margin: 20px;
	border: 2px solid black;
}
.primar {
	color: white;
	background-color: black;
}
[imagem] {
	margin: 0;
	padding: 0;
	width: 169px;
	height: 169px;
	position: absolute;
	top: 138px;
}
</style>
