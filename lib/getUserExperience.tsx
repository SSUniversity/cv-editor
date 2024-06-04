export async function getUserExperience(token: string, resume_id: string) {
	try {
	    // resume_id = '066684ddff0d457b8b0039ed1f353531547662'

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
