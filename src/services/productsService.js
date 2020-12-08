class ProductsService {
	static headers = {
		'Content-Type': 'application/json',
		Accept: 'application/json',
		Authorization:
			'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFjMjQ0OWI5NTIzZTAwMjA3ZTFmYzMiLCJpYXQiOjE2MDUxMTcwMDF9.vHMYlEKnpSVDSejVVyittmqUhIQ9pbD2U5CvqwQYJ4I',
	};

	static getProducts = async () => {
		const headers = this.headers;
		try {
			let resp = await fetch(
				'https://coding-challenge-api.aerolab.co/products',
				{headers}
			);
			resp = await resp.json();
			if (resp.error) throw new Error(`Fetch failed: ${resp.error}`);
			console.log(resp); ///
			return resp;
		} catch (error) {
			console.log(error);
			return [];
		}
	};

	static postRedeem = async (productId) => {
		const params = {
			method: 'post',
			mode: 'cors',
			headers: this.headers,
			body: {
				productId,
			},
		};
		console.log(params); ///
		try {
			let resp = await fetch(
				'https://coding-challenge-api.aerolab.co/redeem',
				params
			);
			console.log(resp); ///
			resp = await resp.json();
			if (resp.error) throw new Error(`Fetch failed: ${resp.error}`);
			return resp;
		} catch (error) {
			console.log(error);
			return false;
		}
	};
}

export default ProductsService;
