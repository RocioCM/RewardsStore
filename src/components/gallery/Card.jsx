import React from 'react';
import CardOverlay from './CardOverlay';
import ProductsService from '../../services/productsService';

function Card({product}) {
	const {_id, category, name, cost, img: {url}} = product;

	const redeemProduct = async () => {
		const resp = await ProductsService.postRedeem(product._id);
		console.log(resp); ///
	}
	
	return (
		<article className='product-card'>
			<img src={url} alt={name}/>
			<h4 className="product-category">{category}</h4>
			<h4 className="product-name">{name}</h4>
			<CardOverlay id={_id} cost={cost} onClick={redeemProduct} />
		</article>);
}

export default Card;
