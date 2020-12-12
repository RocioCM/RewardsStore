import React from 'react';
import Modal from './Modal';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMeteor} from '@fortawesome/free-solid-svg-icons';

function ErrorModal(props) {
	return (
		<Modal className='load-error-modal' {...props}>
			<header>
				<h2>Oops, hubo un problema</h2>
			</header>
			<div className='modal-body'>
				<FontAwesomeIcon className='error-icon' icon={faMeteor} />
				<p>
					Ocurrió un error inesperado mientras cargabamos los datos de usuario.
					La página podría comportarse de forma anormal. <br />
					Por favor, recarga la pestaña y se solucionará.
				</p>
			</div>
			<footer>
				<a className='btn' href='./'>
					Recargar
				</a>
			</footer>
		</Modal>
	);
}

export default ErrorModal;
