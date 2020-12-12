import React, {useState, useEffect} from 'react';
import ErrorModal from './components/general/ErrorModal';
import UserService from './services/userService';

const AppContext = React.createContext();

function AppProvider({children, context}) {
	const [userInfo, setUserInfo] = useState({username: '', coins: 0});
	const [userError, setUserError] = useState(false); //Turns true if user fetch fails.

	const updateUserInfo = async () => {
		let user = await UserService.getUser();
		if (!user) setUserError(true);
		else setUserInfo({username: user.name, coins: user.points});
	};

	useEffect(() => updateUserInfo(), []); //componentDidMount

	return (
		<AppContext.Provider
			value={{
				username: userInfo.username,
				coins: userInfo.coins,
				updateUserInfo,
				...context,
			}}
		>
			{userError && (
				<ErrorModal show={true} handleHide={() => setUserError(false)} />
			)}
			{children}
		</AppContext.Provider>
	);
}

export {AppContext};
export default AppProvider;
