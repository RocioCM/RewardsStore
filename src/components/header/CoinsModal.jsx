import React, {useContext} from 'react';
import {AppContext} from '../../ContextProvider';
import UserService from '../../services/userService';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {coinsAmounts} from '../../services/consts';
import coinIcon from '../../assets/coin.svg';
import '../../styles/modals.css';

function CoinsModal({show, handleHide}) {
	const {updateUserInfo} = useContext(AppContext);

	async function addCoins(amount) {
		let resp = await UserService.postCoins(amount);
		console.log(resp); ///
		alert('Se agregaron ' + amount + ' moneditas.');
		updateUserInfo();
		handleHide();
	}

	return (
		<div className='modal-screen' style={{display: show ? 'initial' : 'none'}}>
			<section className='modal coins-modal'>
				<button className='quit-btn' onClick={handleHide}>
					<FontAwesomeIcon icon={faTimes} />
				</button>
				<header>
					<h2>Agregar más monedas</h2>
				</header>
				<div className='coins-btns-ctn'>
					{coinsAmounts.map((amount) => (
						<button key={amount} onClick={() => addCoins(amount)}>
							<img className='coin-icon' src={coinIcon} alt='coin' /> {amount}
						</button>
					))}
				</div>
			</section>
		</div>
	);
}

export default CoinsModal;
