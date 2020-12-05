import {useContext} from 'react';
import UserInfo from './UserInfo';
import {AppContext} from '../../ContextProvider';
import logo from '../../assets/aerolab-logo.svg';
import '../../styles/header.css';

function HeaderBar() {

	const {setSection} = useContext(AppContext);
	const handleClick = () => {
		setSection({section:"electronics", title:"Electrónica"});
	}
	return <header className='header-bar'>
		<img src={logo} onClick={handleClick} alt="aerolab logo" />
		<UserInfo />
	</header>;
}

export default HeaderBar;
