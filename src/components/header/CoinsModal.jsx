import React from 'react';
import UserService from '../../services/userService';
import '../../styles/modals.css';

function CoinsModal({show, handleShow}) {

	const hideModal = () => handleShow(false);

	async function addCoins(amount) {
		let resp = await UserService.addCoins(amount);
		console.log(resp);
		alert("Se agregaron "+ amount +" moneditas.")
		hideModal();
	};

	return ( 
		<div className='modal-screen' style={{display: show ? 'initial' : 'none'}}>
			<section className='modal'>
				<button className='quit-btn' onClick={hideModal}>X</button>
				<header>
					<h2>Agregar más monedas</h2>
				</header>
				<div className='coins-btns-ctn'>
					<button onClick={() => addCoins(1000)} >
						<span className="coin-icon"></span>1000
					</button>
					<button onClick={() => addCoins(5000)} >
						<span className="coin-icon"></span>5000
					</button>
					<button onClick={() => addCoins(7500)} >
						<span className="coin-icon"></span>7500
					</button>
				</div>
			</section>
		</div>
	);
}

export default CoinsModal;