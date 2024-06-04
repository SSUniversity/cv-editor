export async function getUserExperience(token: string, resume_id: string) {
	try {

		const response = await fetch('/api/hh?token=' + token + '&resume_id=' + resume_id + "&request_type=getexp");
		const data = await response.json();
		const resume_experience = data.experience;

		if (!data.error) {
		  // console.log(resume_experience);
			return resume_experience;
		} else {
			return data.error;
		}

	} catch (error){
		console.log(error);
	}

}
