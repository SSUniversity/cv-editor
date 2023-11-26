export async function getUserResume(token: string) {
	try {
		const response = await fetch('/api/hh?token=' + token);
		const data = await response.json();

		if (!data.error) {
			return data.access_token;
		} else {
			return data.error;
		}
		
	} catch (error){
		console.log(error);
	}
	
}