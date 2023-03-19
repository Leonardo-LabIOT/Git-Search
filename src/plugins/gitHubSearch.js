const gitHubSearch = {
	// URL Base:
	base: "https://developer.github.com/",
	// Informações do usuário:
	userInfo: "https://api.github.com/users/{username}",
	// Repositório de um usuário:
	userRepo: "https://api.github.com/users/{username}/repos",
	// Repositório de um usuário por ordem decrescente:
	userOrder: "https://api.github.com/users/{username}/repos?direction=desc",
	// Pesquisar por usuários:
	userSearch:
		"https://api.github.com/search/users?q={nome_do_usuário}&page={número_da_página}",
	// Pesquisar por repositórios:
	repoSearch:
		"https://api.github.com/search/repositories?q={nome_do_repositório}&page={número_da_página}",
};

export default { gitHubSearch };
