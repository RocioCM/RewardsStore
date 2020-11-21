class UserService {
	static headers = {
		"Content-Type": "application/json",
		"Accept": "application/json",
		"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFjMjQ0OWI5NTIzZTAwMjA3ZTFmYzMiLCJpYXQiOjE2MDUxMTcwMDF9.vHMYlEKnpSVDSejVVyittmqUhIQ9pbD2U5CvqwQYJ4I",
	};

	static async getUser() {
		const headers = this.headers;
		try {
			let resp = await fetch(
				"https://coding-challenge-api.aerolab.co/user/me", {headers});
			resp = await resp.json();
			///console.log(resp);
			return resp;
		} catch (error) {
			console.log(error);
		}
	}

	static async addCoins(amount) {
		const params = {
			method: 'post',
			mode: 'cors',
			headers: this.headers, 
			body: {
				amount
			}
		};
		console.log(params); ///
		try {
			let resp = await fetch( 
				"https://coding-challenge-api.aerolab.co/user/points", params);
			console.log(resp); ///
			resp = await resp.json();
			return resp;
		} catch (error) {
			console.log(error);
		}
	}
}

export default UserService;
