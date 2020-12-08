import UserInfo from './UserInfo';
import HomeLogo from './HomeLogo';
import '../../styles/header.css';

function HeaderBar() {
	return (
		<header className='header-bar'>
			<HomeLogo />
			<UserInfo />
		</header>
	);
}

export default HeaderBar;
