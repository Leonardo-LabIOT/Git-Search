<template>
	<v-responsive class="d-flex align-center text-center fill-height">
		<v-img contain height="200" src="@/assets/github-mark.svg " />
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
		<SearchText :repoOrUser="buttons[0].isActive" />
	</v-responsive>
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
.searchField {
	width: 512px;
	border: 1px black solid;
	border-radius: 5px;
}
.btcontainer {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
}
.btns {
	width: 128px;
	margin: 30px;
	font-weight: 600;
	font-size: 1rem;
	color: black;
	background-color: white;
}
.primar {
	color: white;
	background-color: black;
}
</style>
