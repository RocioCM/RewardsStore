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
				<header>
					<h2>Agregar más monedas</h2>
				</header>
				<div>
					<input onClick={addCoins} type="button" name="coins" value="1000" />
					<input onClick={addCoins} type="button" name="coins" value="5000" />
					<input onClick={addCoins} type="button" name="coins" value="7500" />
				</div>
			</section>
		</div>
	);
}

export default CoinsModal;