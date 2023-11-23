export async function getUserToken(code: string) {
	try {
		const response = await fetch('/api/hh?code=' + code);
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