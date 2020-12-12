import React, {useContext} from 'react';
import {AppContext} from '../../ContextProvider';
import Modal from '../general/Modal';
import UserService from '../../services/userService';
import {coinsAmounts} from '../../services/consts';
import coinIcon from '../../assets/coin.svg';
import '../../styles/modals.css';

function CoinsModal({show, handleHide}) {
	const {updateUserInfo} = useContext(AppContext);

	async function addCoins(amount) {
		let resp = await UserService.postCoins(amount);
		console.log(resp); ///
		alert('Se agregaron ' + amount + ' moneditas.'); ///
		updateUserInfo();
		handleHide();
	}

	return (
		<Modal className='coins-modal' show={show} handleHide={handleHide}>
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
		</Modal>
	);
}

export default CoinsModal;
