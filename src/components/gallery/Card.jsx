import React, {useState, useContext} from 'react';
import CardOverlay from './CardOverlay';
import BuyIcon from './BuyIcon';
import coinIcon from '../../assets/coin.svg';
import ProductsService from '../../services/productsService';
import {AppContext} from '../../ContextProvider';

function Card({product}) {
	const {
		_id,
		category,
		name,
		cost,
		img: {url},
	} = product;
	const {coins, section, updateUserInfo} = useContext(AppContext);
	const [activeCard, setActiveCard] = useState(false);
	const redeemAllowed = cost <= coins;

	const redeemProduct = async () => {
		const resp = await ProductsService.postRedeem(_id);
		console.log(resp); ///
		alert('Producto canjeado exitosamente (mentira) :D');
		updateUserInfo();
	};

	return (
		<article
			className={`product-card ${activeCard ? 'active' : ''}`}
			onClick={() => setActiveCard(true)}
			onPointerLeave={() => setActiveCard(false)}
		>
			{redeemAllowed || section.id === 'history' ? (
				<BuyIcon />
			) : (
				<div className='coins-left-msg'>
					Necesitas {cost - coins}
					<img className='coin-icon' src={coinIcon} alt='coin' />
				</div>
			)}
			<img src={url} alt={name} />
			<h4 className='product-category'>{category}</h4>
			<h4 className='product-name'>{name}</h4>
			{section.id !== 'history' && redeemAllowed && (
				<CardOverlay cost={cost} handleClick={redeemProduct} />
			)}
		</article>
	);
}

export default Card;
