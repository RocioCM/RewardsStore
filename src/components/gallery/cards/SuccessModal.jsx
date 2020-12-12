import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRocket, faTimes} from '@fortawesome/free-solid-svg-icons';

function SuccessModal({handleHide}) {
	return (
		<div className='modal product-modal success'>
			<button className='quit-btn' onClick={handleHide}>
				<FontAwesomeIcon icon={faTimes} />
			</button>
			<FontAwesomeIcon className='status-icon' icon={faRocket} />
			<h3 className='redeem-status'>Éxito</h3>
			<h4 className='redeem-msg'>Se ha canjeado el producto</h4>
		</div>
	);
}

export default SuccessModal;
