<template>
	<div searchFieldComponent>
		<!-- :loading="loading" -->
		<v-text-field
			:variant="loading ? 'filled' : 'outlined'"
			:label="repoOrUser ? 'Buscar Repositórios...' : 'Buscar Usuários...'"
			append-inner-icon="fa-search"
			details="
				abc123"
			@click:append-inner="buscar()"
			@keyup.enter="buscar()"
			v-model="stringToFind"
		>
			<template v-slot:loader>
				<v-progress-linear
					:active="loading"
					color="green"
					height="3"
					indeterminate
					absolute
				/>
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
						// alert(favStore[0].name);

						this.$router.replace(
							(this.repoOrUser ? "/repositories/" : "/users/") +
								this.stringToFind
						);
					});

				this.stringToFind = "";
			}, 500);
		},
	},
};
</script>

<style scoped lang="scss">
[searchFieldComponent] {
	width: 780px;
	height: 71px;
	margin: 0;
	padding: 0;
}
* {
	border-radius: 5px !important ;
	border: 5px;
	font-size: 24px;
	font-weight: 400;
}
</style>
