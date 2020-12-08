import React, {useState, useEffect} from 'react';
import UserService from './services/userService';

const AppContext = React.createContext();

function AppProvider({children, context}) {
	const [userInfo, setUserInfo] = useState({username: '', coins: 0});

	const updateUserInfo = async () => {
		let user = await UserService.getUser();
		console.log(user); ///
		setUserInfo({username: user.name, coins: user.points});
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
			{children}
		</AppContext.Provider>
	);
}

export {AppContext};
export default AppProvider;
