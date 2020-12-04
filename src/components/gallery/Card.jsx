import React from 'react';
import CardOverlay from './CardOverlay';
import BuyIcon from './BuyIcon';
import ProductsService from '../../services/productsService';

function Card({product}) {
	const {_id, category, name, cost, img: {url}} = product;

	const redeemProduct = async () => {
		const resp = await ProductsService.postRedeem(_id);
		console.log(resp); ///
		alert("Producto canjeado exitosamente :D");
	}
	
	return (
		<article className='product-card'>
			<BuyIcon />
			<img src={url} alt={name}/>
			<h4 className="product-category">{category}</h4>
			<h4 className="product-name">{name}</h4>
			<CardOverlay cost={cost} handleClick={redeemProduct} />
		</article>);
}

export default Card;
