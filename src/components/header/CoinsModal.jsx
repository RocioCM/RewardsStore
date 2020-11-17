import React from 'react';
import '../../styles/modals.css';

function CoinsModal({show, handleShow}) {

	const hideModal = () => handleShow(false);
	const addCoins = (e) => {
		///TO DO: INVOCAR AL SERVICIO AQUÍ.
		alert("Se agregaron "+ e.target.value +" moneditas.")
		hideModal();
	};

	return ( 
		<div className='modal-screen' style={{display: show ? 'initial' : 'none'}}>
			<section className='modal'>
				<button className='quit-btn' onClick={hideModal} >X</button>
				<header>
					<h2>Agregar más monedas</h2>
				</header>
				<div className='coins-btns-ctn'>
					<button value='1000' onClick={addCoins} >
						<span className="coin-icon"></span>1000
					</button>
					<button value='5000' onClick={addCoins} >
						<span className="coin-icon"></span>5000
					</button>
					<button value='7500' onClick={addCoins} >
						<span className="coin-icon"></span>7500
					</button>
				</div>
			</section>
		</div>
	);
}

export default CoinsModal;