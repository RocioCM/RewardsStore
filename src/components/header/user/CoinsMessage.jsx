import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {addCoinsMessage} from '../../../services/consts';

function CoinsMessage({succeed}) {
	const {className, icon, message} = addCoinsMessage[
		succeed ? 'success' : 'error'
	];
	return (
		<div className={`add-coins-notification ${className}`}>
			<FontAwesomeIcon className='status-icon' icon={icon} />
			<h4 className='message'>{message}</h4>
		</div>
	);
}

export default CoinsMessage;
