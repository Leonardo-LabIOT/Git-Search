<template>
	<div class="searchContainer">
		<input
			type="search"
			class="textField"
			:placeholder="
				repoOrUser ? 'Buscar Repositórios...' : 'Buscar Usuários...'
			"
			@keyup.enter="buscar()"
			v-model="stringToFind"
			ref="inputFocus"
		/>
		<button @click="buscar()">
			<i
				class="fa fa-search fa-2x iconBusca"
				aria-hidden="true"
				v-if="!loading"
			/>
			<v-progress-circular
				v-else
				class="iconBusca"
				indeterminate
				color="blue"
			/>
		</button>
	</div>
</template>

<script>
import { favStore } from "@/main";
import axios from "axios";
export default {
	data: () => ({
		loaded: false,
		loading: false,
		value: 0,
		stringToFind: "",
	}),
	props: { repoOrUser: Boolean },

	methods: {
		buscar() {
			this.loading = true;
			setTimeout(() => {
				this.loading = false;
				this.loaded = true;

				let username = this.stringToFind;
				let path = "https://api.github.com/users/" + username;
				// let path = "https://api.github.com/users/Leonardo-LabIOT" + username;

				axios
					.get(path)
					.catch((err) => {
						if (err.code === "ERR_BAD_REQUEST") {
							console.log(err.code);
							this.$router.replace("/pageNotFound");
						}
					})
					.then((E) => {
						console.log(E.data.name);
						favStore[0] = E.data;
						console.log(favStore[0].name);

						this.$router.replace(
							(this.repoOrUser ? "/repositories/" : "/users/") +
								this.stringToFind
						);
					});

				this.stringToFind = "";
			}, 1000);
		},
		focus() {
			this.$refs.inputFocus.focus();
			this.stringToFind = "";
		},
	},
};
</script>

<style scoped lang="scss">
.searchContainer {
	display: flex;
	border: 2px black solid;
	border-radius: 10px;
	max-width: 90%;
	height: 71px;
	justify-content: space-between;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.textField {
	outline: none;
	font-size: 24px;
	width: 75%;
	position: relative;
	left: 25px;
	font-family: "Inter";
	font-style: normal;
	font-weight: 400;
	font-size: 24px;
	display: flex;
	align-items: center;
}

.iconBusca {
	width: 25px;
	height: 25px;
	position: relative;
	right: 25px;
}
</style>
