import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMeteor, faRocket} from '@fortawesome/free-solid-svg-icons';

function ButtonOverlay({amount, succeed}) {
	return (
		<div className='coins-btn-overlay'>
			<FontAwesomeIcon icon={succeed ? faRocket : faMeteor} />
			<h4>
				{succeed
					? `Se agregaron las monedas a su cuenta`
					: 'Falló la operación. Intente nuevamente'}
			</h4>
		</div>
	);
}

export default ButtonOverlay;
