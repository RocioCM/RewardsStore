class ProductsService {
	static headers = {
		"Content-Type": "application/json",
		"Accept": "application/json",
		"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFjMjQ0OWI5NTIzZTAwMjA3ZTFmYzMiLCJpYXQiOjE2MDUxMTcwMDF9.vHMYlEKnpSVDSejVVyittmqUhIQ9pbD2U5CvqwQYJ4I",
	};

	static async getProducts() {
		const headers = this.headers;
		try {
			let resp = await fetch(
				"https://coding-challenge-api.aerolab.co/products", {headers});
			resp = await resp.json();
			console.log(resp); ///
			return resp;
		} catch (error) {
			console.log(error);
		}
	}

	static async getHistory() {
		const headers = this.headers;
		try {
			let resp = await fetch(
				"https://private-anon-20e65f592c-aerolabchallenge.apiary-mock.com/user/history", {headers});
			resp = await resp.json();
			console.log(resp); ///
			return resp;
		} catch (error) {
			console.log(error);
		}
	}

	static async postRedeem(productId) {
		const params = {
			method: 'post',
			mode: 'cors',
			headers: this.headers, 
			body: {
				productId
			}
		};
		console.log(params); ///
		try {
			let resp = await fetch( 
				"https://coding-challenge-api.aerolab.co/redeem", params);
			console.log(resp); ///
			resp = await resp.json();
			return resp;
		} catch (error) {
			console.log(error);
		}
	}
}

export default ProductsService;