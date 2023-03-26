<template>
	<div searchFieldComponent>
		<v-text-field
			class="myClass"
			:variant="loading ? 'outlined' : 'outlined'"
			:label="repoOrUser ? 'Buscar Repositórios...' : 'Buscar Usuários...'"
			:append-inner-icon="loading ? '' : 'fa-search'"
			@click:append-inner="buscar()"
			@keyup.enter="buscar()"
			v-model="stringToFind"
			:loading="loading"
			hide-details
		>
			<template v-slot:loader>
				<v-progress-linear
					color="green"
					absolute
					height="5"
					:indeterminate="loading"
				></v-progress-linear>
			</template>
		</v-text-field>
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
	},
};
</script>

<style scoped lang="scss">
$text-field-border-radius: 5px !default;
$text-field-color: orange;

[searchFieldComponent] {
	width: 75%;
	// height: 71px;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	border-radius: 10px;
	// border: 2px solid black;
}

.myClass {
	margin-bottom: -15px;
	padding: 0;
	height: 100%;
	background-color: white;
	border: 2px black solid;
	border-radius: 15px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
