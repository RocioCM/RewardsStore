import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMeteor, faTimes} from '@fortawesome/free-solid-svg-icons';

function FailModal() {
	return (
		<div className='modal product-modal fail'>
			<button className='quit-btn'>
				<FontAwesomeIcon icon={faTimes} />
			</button>
			<FontAwesomeIcon className='status-icon' icon={faMeteor} />
			<h3 className='redeem-status'>Falló</h3>
			<h4 className='redeem-msg'>Oh, tuvimos un problema al canjear</h4>
			<button className='action-btn'>Reintentar</button>
		</div>
	);
}

export default FailModal;
