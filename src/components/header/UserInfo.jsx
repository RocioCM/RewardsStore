import UserService from '../../services/userService';
import {useState, useContext} from 'react';
import {AppContext} from '../../ContextProvider';

function UserInfo() {
	
	const {setSection} = useContext(AppContext);

	const [userInfo, setUserInfo] = useState({username:'', coins:0});
	
	const getUserInfo = async () => {
		let user = await UserService.getUser();
		console.log(user);
		setUserInfo({username: user.name, coins: user.points});
	}

	const addCoins = () => {
		alert("Ahorita agregamos las monedas.");
	}

	const showHistory = () => {
		setSection({section:'history', title:'Historial'});
	}

	if (userInfo.username==='') {
		getUserInfo();
	}

	return <div className='user-info'>
		<h3 className='username' onClick={showHistory}>
			{userInfo.username}
		</h3>
		<h3 className='user-coins' onClick={addCoins}>
		<span>{userInfo.coins}</span>
		<i className='coin-icon'></i>
		</h3>
	</div>;
}

export default UserInfo;
