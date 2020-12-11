class UserService {
	static headers = {
		'Content-Type': 'application/json',
		Accept: 'application/json',
		Authorization:
			'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFjMjQ0OWI5NTIzZTAwMjA3ZTFmYzMiLCJpYXQiOjE2MDUxMTcwMDF9.vHMYlEKnpSVDSejVVyittmqUhIQ9pbD2U5CvqwQYJ4I',
	};

	static getUser = async () => {
		const headers = this.headers;
		try {
			let resp = await fetch(
				'https://coding-challenge-api.aerolab.co/user/me',
				{headers}
			);
			resp = await resp.json();
			if (resp.error) throw new Error(`Fetch failed: ${resp.error}`);
			return resp;
		} catch (error) {
			console.log(error);
		}
	};

	static postCoins = async (amount) => {
		const params = {
			method: 'post',
			mode: 'cors',
			headers: this.headers,
			body: JSON.stringify({amount}),
		};
		try {
			let resp = await fetch(
				'https://coding-challenge-api.aerolab.co/user/points',
				params
			);
			resp = await resp.json();
			if (resp.error) throw new Error(`Fetch failed: ${resp.error}`);
			return resp;
		} catch (error) {
			return false;
		}
	};

	static getHistory = async () => {
		const headers = this.headers;
		try {
			let resp = await fetch(
				'https://coding-challenge-api.aerolab.co/user/history',
				{headers}
			);
			resp = await resp.json();
			if (resp.error) throw new Error(`Fetch failed: ${resp.error}`);
			return resp;
		} catch (error) {
			return [];
		}
	};
}

export default UserService;
