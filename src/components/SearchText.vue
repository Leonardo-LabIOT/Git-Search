<template>
	<v-card-text>
		<!-- label="Email address" -->
		<!-- placeholder="johndoe@gmail.com" -->
		<!-- type="email" -->
		<!--
				variant="filled"
			-->
		<v-text-field
			:loading="loading"
			variant="solo"
			density="compact"
			:label="repoOrUser ? 'Buscar Repositórios...' : 'Buscar Usuários...'"
			append-inner-icon="mdi-magnify"
			single-line
			hide-details
			class="searchField"
			@click:append-inner="buscar()"
			@keyup.enter="buscar()"
			v-model="stringToFind"
		/>
	</v-card-text>
</template>

<script>
import { favStore } from "@/main";
import axios from "axios";
export default {
	data: () => ({
		loaded: false,
		loading: false,
		stringToFind: "",
	}),
	props: { repoOrUser: Boolean },

	methods: {
		buscar() {
			this.loading = true;

			// alert(
			// 	this.repoOrUser
			// 		? `buscando os repositórios: \n${this.stringToFind}`
			// 		: `buscando os usuários: \n${this.stringToFind}`
			// );
			//chamar apidebusca
			let username = this.stringToFind;
			let var2 = "https://api.github.com/users/" + username;
			// let var2 = "https://api.github.com/users/Leonardo-LabIOT" + username;

			axios
				.get(var2)
				.catch((err) => {
					if (err.code === "ERR_BAD_REQUEST") {
						console.log(err.code);
						this.$router.replace("/pageNotFound");
					}
				})
				.then((E) => {
					this.loading = false;
					this.loaded = true;
					console.log(E.data.name);
					favStore[0] = E.data;
					console.log(favStore[0].name);
					alert(favStore[0].name);

					this.$router.replace(
						(this.repoOrUser ? "/repositories/" : "/users/") + this.stringToFind
					);
				});
			this.stringToFind = "";
		},
	},
};
</script>

<style scoped lang="scss"></style>
