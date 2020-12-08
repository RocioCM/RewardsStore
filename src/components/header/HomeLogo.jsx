import {useContext} from 'react';
import {AppContext} from '../../ContextProvider';
import ProductsService from '../../services/productsService';
import logo from '../../assets/aerolab-logo.svg';

function HomeLogo() {
	const {setSection} = useContext(AppContext);
	const handleClick = () => {
		setSection({
			title: 'Electrónica',
			getProducts: ProductsService.getProducts,
		});
	};

	return <img src={logo} onClick={handleClick} alt='aerolab logo' />;
}

export default HomeLogo;
