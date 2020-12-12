import React, {useContext, useState} from 'react';
import {AppContext} from '../../../ContextProvider';
import Modal from '../../general/Modal';
import CoinsMessage from './CoinsMessage';
import UserService from '../../../services/userService';
import {coinsAmounts} from '../../../services/consts';
import coinIcon from '../../../assets/coin.svg';
import '../../../styles/modals.css';

function CoinsModal({show, handleHide}) {
	const {updateUserInfo} = useContext(AppContext);
	const [addedCoins, setAddedCoins] = useState({status: false, succeed: false});

	async function addCoins(amount) {
		let resp = await UserService.postCoins(amount);
		setAddedCoins({status: true, succeed: resp});
		setTimeout(() => setAddedCoins({status: false, succeed: false}), 5000);
		updateUserInfo();
	}

	return (
		<Modal className='coins-modal' show={show} handleHide={handleHide}>
			{addedCoins.status && <CoinsMessage succeed={addedCoins.succeed} />}
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
