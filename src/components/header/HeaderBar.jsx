import UserInfo from './UserInfo';
import Logo from './Logo';
import '../../styles/header.css';

function HeaderBar() {
	return <header className='header-bar'>
		<Logo />
		<UserInfo />
	</header>;
}

export default HeaderBar;
