import UserInfo from './UserInfo';
import logo from '../../assets/aerolab-logo.svg';
import '../../styles/header.css';

function HeaderBar() {
	return <header className='header-bar'>
		<img src={logo} alt="aerolab logo" />
		<UserInfo />
	</header>;
}

export default HeaderBar;
