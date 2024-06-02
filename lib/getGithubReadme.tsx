import { Octokit, App } from "octokit";



export async function getGithubReadme(token: string) {
	try {
		const octokit = new Octokit({ auth: token });
		const {data: { login },} = await octokit.rest.users.getAuthenticated();

		const readme = await octokit.request(`GET /repos/${login}/${login}/readme`, {
            owner: login,
            repo: login,
            mediaType: { format: "raw" }
            // headers: { 'X-GitHub-Api-Version': '2022-11-28'}
        })
        if (readme && readme.data) {
            // console.log(readme)
            return readme.data;
        } else {
            return('Ошибка получения файла README.md');
        }



	} catch (error){
		console.log(error);
	}

}
