import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import '../../styles/modals.css';

function Modal({className, children, show, handleHide}) {
	return (
		<div className='modal-screen' style={{display: show ? 'initial' : 'none'}}>
			<section className={`modal ${className}`}>
				<button className='quit-btn' onClick={handleHide}>
					<FontAwesomeIcon icon={faTimes} />
				</button>
				{children}
			</section>
		</div>
	);
}

export default Modal;
