import coin from '../../../assets/coin.svg';

function CardOverlay({cost, handleClick}) {
	return (
		<div className='card-overlay'>
			<h3 className='price'>
				{cost}
				<img className='coin-icon' src={coin} alt='coin' />
			</h3>
			<button className='redeem-btn' onClick={handleClick}>
				Canjear ahora
			</button>
		</div>
	);
}

export default CardOverlay;
