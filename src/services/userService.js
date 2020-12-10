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
			// console.log(resp); ///
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
			body: {
				amount,
			},
		};
		console.log(params); ///
		try {
			let resp = await fetch(
				'https://coding-challenge-api.aerolab.co/user/points',
				params
			);
			//'https://coding-challenge-api.aerolab.co/user/points'
			//'https://private-anon-2c8515b340-aerolabchallenge.apiary-mock.com/user/points'
			console.log(resp); ///
			resp = await resp.json();
			if (resp.error) throw new Error(`Fetch failed: ${resp.error}`);
			return resp;
		} catch (error) {
			console.log(error);
			return false;
		}
	};

	static getHistory = async () => {
		const headers = this.headers;
		try {
			let resp = await fetch(
				'https://private-anon-20e65f592c-aerolabchallenge.apiary-mock.com/user/history',
				{headers}
			);
			//'https://coding-challenge-api.aerolab.co/user/history'
			//'https://private-anon-20e65f592c-aerolabchallenge.apiary-mock.com/user/history'
			resp = await resp.json();
			console.log(resp); ///
			if (resp.error) throw new Error(`Fetch failed: ${resp.error}`);
			return resp;
		} catch (error) {
			console.log(error);
			return [];
		}
	};
}

export default UserService;
