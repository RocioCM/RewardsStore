import {useState, useContext} from 'react';
import {AppContext} from '../../ContextProvider';
import CoinsModal from './CoinsModal';
import coinIcon from '../../assets/coin.svg';
import UserService from '../../services/userService';

function UserInfo() {
	const {setSection, username, coins} = useContext(AppContext);
	const [showModal, setShowModal] = useState(false);

	const showCoinsModal = () => setShowModal(true);
	const hideCoinsModal = () => setShowModal(false);

	const showHistory = () => {
		setSection({
			section: 'history',
			title: 'Historial',
			getProducts: UserService.getHistory,
		});
	};

	return (
		<div className='user-info'>
			<h3 className='username' onClick={showHistory}>
				{username}
			</h3>
			<h3 title='Add coins' className='user-coins' onClick={showCoinsModal}>
				<span>{coins}</span>
				<img className='coin-icon' src={coinIcon} alt='coin' />
			</h3>
			<CoinsModal show={showModal} handleHide={hideCoinsModal} />
		</div>
	);
}

export default UserInfo;
