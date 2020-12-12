import {useState, useContext} from 'react';
import {AppContext} from '../../ContextProvider';
import CoinsModal from './CoinsModal';
import coinIcon from '../../assets/coin.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHistory, faHome} from '@fortawesome/free-solid-svg-icons';
import UserService from '../../services/userService';
import ProductsService from '../../services/productsService';

function UserInfo() {
	const {section, setSection, username, coins} = useContext(AppContext);
	const [showModal, setShowModal] = useState(false);
	const onHistory = section.id === 'history';

	const showCoinsModal = () => setShowModal(true);
	const hideCoinsModal = () => setShowModal(false);

	const showHistory = () => {
		setSection({
			id: 'history',
			title: 'Historial',
			getProducts: UserService.getHistory,
		});
	};

	const showHome = () => {
		setSection({
			id: 'electronics',
			title: 'Electrónica',
			getProducts: ProductsService.getProducts,
		});
	};

	return (
		<div className='user-info'>
			<h3 title='Ver el historial' className='username' onClick={showHistory}>
				{username}
			</h3>
			<button
				title='Agregar monedas'
				className='user-coins'
				onClick={showCoinsModal}
			>
				<span>{coins}</span>
				<img className='coin-icon' src={coinIcon} alt='coin' />
			</button>
			<button
				className='section-btn'
				onClick={onHistory ? showHome : showHistory}
			>
				<FontAwesomeIcon icon={onHistory ? faHome : faHistory} />
			</button>
			{showModal && <CoinsModal show={true} handleHide={hideCoinsModal} />}
		</div>
	);
}

export default UserInfo;
