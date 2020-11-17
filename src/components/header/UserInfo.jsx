import {useState, useEffect, useContext} from 'react';
import {AppContext} from '../../ContextProvider';
import UserService from '../../services/userService';
import CoinsModal from './CoinsModal';
 
function UserInfo() { 
	
	const {setSection} = useContext(AppContext);
	const [userInfo, setUserInfo] = useState({username:'', coins:0});
	const [showModal, setShowModal] = useState(false);

	const getUserInfo = async () => {
		let user = await UserService.getUser();
		console.log(user);
		setUserInfo({username: user.name, coins: user.points});
	}

	const showCoinsModal = () => {
		setShowModal(true);
	}

	const showHistory = () => {
		setSection({section:'history', title:'Historial'});
	}

	useEffect(() => getUserInfo(),[]); //componentDidMount

	return <div className='user-info'>
		<h3 className='username' onClick={showHistory}>
			{userInfo.username}
		</h3>
		<h3 className='user-coins' onClick={showCoinsModal}>
		<span>{userInfo.coins}</span>
		<i className='coin-icon'></i>
		</h3>
		<CoinsModal show={showModal} handleShow={setShowModal} />
	</div>;
}

export default UserInfo;
