import React, { useContext } from 'react';
import CardOverlay from './CardOverlay';
import BuyIcon from './BuyIcon';
import coinIcon from '../../assets/icons/coin.svg';
import ProductsService from '../../services/productsService';
import { AppContext } from '../../ContextProvider';

function Card({product}) {

	const {_id, category, name, cost, img: {url}} = product;
	const {coins, section} = useContext(AppContext);
	const redeemAllowed = cost<=coins;

	const redeemProduct = async () => {
		const resp = await ProductsService.postRedeem(_id);
		console.log(resp); ///
		alert("Producto canjeado exitosamente (mentira) :D");
	}
	return (
		<article className='product-card'>
			{(redeemAllowed || section==='history') ? <BuyIcon /> : <div className='coins-left-msg'>Necesitas {cost-coins}<img src={coinIcon} alt="coin"/></div>}
			<img src={url} alt={name}/>
			<h4 className="product-category">{category}</h4>
			<h4 className="product-name">{name}</h4>
			{
				section!=='history' && redeemAllowed &&
				<CardOverlay cost={cost} handleClick={redeemProduct} />
			}
		</article>);
}

export default Card;
