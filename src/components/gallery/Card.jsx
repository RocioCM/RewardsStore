import React, {useState, useContext} from 'react';
import {AppContext} from '../../ContextProvider';
import CardOverlay from './CardOverlay';
import SuccessModal from './SuccessModal';
import FailModal from './FailModal';
import ProductsService from '../../services/productsService';
import BuyIcon from './BuyIcon';
import coinIcon from '../../assets/coin.svg';

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
	const [redeemed, setRedeemed] = useState({
		didRedeem: false,
		redeemStatus: false,
	});
	const redeemAllowed = cost <= coins;

	const redeemProduct = async () => {
		const resp = await ProductsService.postRedeem(_id);
		if (resp) updateUserInfo();
		setRedeemed({didRedeem: true, redeemStatus: resp});
	};

	const hideModal = () => setRedeemed({didRedeem: false, redeemStatus: false});

	return (
		<article
			className={`product-card ${activeCard ? 'active' : ''}`}
			onClick={() => setActiveCard(true)}
			onMouseLeave={() => setActiveCard(false)}
		>
			{redeemAllowed || section.id === 'history' ? (
				<BuyIcon />
			) : (
				<div className='coins-left-msg'>
					Te faltan {cost - coins}
					<img className='coin-icon' src={coinIcon} alt='coin' />
				</div>
			)}
			<img src={url} alt={name} />
			<h4 className='product-category'>{category}</h4>
			<h4 className='product-name'>{name}</h4>
			{section.id !== 'history' && redeemAllowed && (
				<CardOverlay cost={cost} handleClick={redeemProduct} />
			)}
			{redeemed.didRedeem &&
				(redeemed.redeemStatus ? (
					<SuccessModal handleHide={hideModal} />
				) : (
					<FailModal handleHide={hideModal} handleRedeem={redeemProduct} />
				))}
		</article>
	);
}

export default Card;
