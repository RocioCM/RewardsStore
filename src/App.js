import {useEffect, useState} from 'react';
import ProductsService from './services/productsService';
import AppProvider from './ContextProvider';
import HeaderBar from './components/header/HeaderBar';
import SectionHeader from './components/header/SectionHeader';
import Gallery from './components/gallery/Gallery';
import './styles/app.css';

function App() {

	const [section, setSection] = useState({section:"electronics", title:"Electrónica"});
	const [products, setProducts] = useState([]);

	const getProducts = async () => {
		let products = null;
		switch (section.section) {
			case ('history'):
				products = await ProductsService.getHistory();
				break;
			default:
				products = await ProductsService.getProducts();
		};
		if (products) setProducts(products);
	}

	//eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => getProducts(),[section]);
	useEffect(() => setProducts(products), [products]); //Esto tampoco funciona para el sort :c

	return (
		<AppProvider context={{coins: 1800, products, setProducts, section: section.section, setSection}}>
			<HeaderBar />
			<SectionHeader title={section.title} />
			<Gallery />
		</AppProvider>
	);
}

export default App;
