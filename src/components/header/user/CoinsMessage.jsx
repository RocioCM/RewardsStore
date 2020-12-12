import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMeteor, faRocket} from '@fortawesome/free-solid-svg-icons';

function CoinsMessage({succeed}) {
	return (
		<div className={`add-coins-notification ${succeed ? 'success' : 'error'}`}>
			<FontAwesomeIcon
				className='status-icon'
				icon={succeed ? faRocket : faMeteor}
			/>
			<h4 className='message'>
				{succeed
					? 'Se agregaron las monedas a su cuenta'
					: 'Falló la operación. Intente nuevamente'}
			</h4>
		</div>
	);
}

export default CoinsMessage;
