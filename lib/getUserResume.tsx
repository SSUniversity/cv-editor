export async function getUserResume(token: string) {
	try {
		const response = await fetch('/api/hh?token=' + token);
		const data = await response.json();
		// console.log(data)
		const resume_id = data.items[1].id;
		// const resume_experience = data.items[1].experience;

		if (!data.error) {
		  // console.log(resume_experience);
			return resume_id;
		} else {
			return data.error;
		}

	} catch (error){
		console.log(error);
	}

}
