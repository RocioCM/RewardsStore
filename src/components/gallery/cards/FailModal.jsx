import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMeteor, faTimes} from '@fortawesome/free-solid-svg-icons';

function FailModal({handleHide, handleRedeem}) {
	const retryRedeem = () => {
		handleHide();
		handleRedeem();
	};

	return (
		<div className='product-modal fail'>
			<button className='quit-btn' onClick={handleHide}>
				<FontAwesomeIcon icon={faTimes} />
			</button>
			<FontAwesomeIcon className='status-icon' icon={faMeteor} />
			<h3 className='redeem-status'>Falló</h3>
			<h4 className='redeem-msg'>Hubo un problema con el canje</h4>
			<button className='action-btn' onClick={retryRedeem}>
				Reintentar
			</button>
		</div>
	);
}

export default FailModal;
