// import { Octokit, App } from "octokit";
import { Octokit } from "@octokit/rest";
import nextBase64 from "next-base64";


// async function getSHA(token:string, path:string) {
//     const octokit = new Octokit({ auth: token });
//     const result = await Octokit.repos.getContent({
//         owner: "MaxKulakov",
//         repo: "MaxKulakov",
//         path,
//     })
//     const sha = result?.data?.sha
//     return sha
// }

export async function setGithubReadme(token: string, content: string) {
	try {

		const octokit = new Octokit({ auth: token });
		const {data: { login },} = await octokit.rest.users.getAuthenticated();


		// const createRepo = await octokit.request(`POST /orgs/${login}/repos`, {
  //           org: login,
  //           name: login,
  //           description: 'This is your personal repository',
  //           homepage: 'https://github.com',
  //           'private': false,
  //           has_issues: true,
  //           has_projects: true,
  //           has_wiki: true,
  //           headers: {
  //               'X-GitHub-Api-Version': '2022-11-28'
  //           }
		// })


		const repoContent = await octokit.request(`GET /repos/${login}/${login}/readme`, {
            owner: login,
            repo: login,
        })
		const sha = repoContent.data.sha

		const { data } = await octokit.repos.createOrUpdateFileContents({
            owner: login,
            repo: login,
            path: "README.md",
            message: "Update README.md from CV-Editor",
            // content: nextBase64.encode(content),
            content: btoa(unescape(encodeURIComponent(content))),
            // mediaType: {format: "raw"},
            // committer: {
            //     name: login,
            //     email: "kulakovmaxim99@gmail.com",
            // },
            // author: {
            //     name: login,
            //     email: "kulakovmaxim99@gmail.com",
            // },
            sha,
        });

	} catch (error){
		console.log(error);
	}

}


// ### Hi there 👋

// <!--
// **MaxKulakov/MaxKulakov** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

// Here are some ideas to get you started:

// - 🔭 I’m currently working on ...
// - 🌱 I’m currently learning ...
// - 👯 I’m looking to collaborate on ...
// - 🤔 I’m looking for help with ...
// - 💬 Ask me about ...
// - 📫 How to reach me: ...
// - 😄 Pronouns: ...
// - ⚡ Fun fact: ...
// -->
