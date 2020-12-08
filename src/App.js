import {useState} from 'react';
import AppProvider from './ContextProvider';
import HeaderBar from './components/header/HeaderBar';
import SectionHeader from './components/header/SectionHeader';
import Gallery from './components/gallery/Gallery';
import ProductsService from './services/productsService';
import './styles/app.css';

function App() {
	const [section, setSection] = useState({
		id: 'electronics',
		title: 'Electrónica',
		getProducts: ProductsService.getProducts,
	});

	return (
		<AppProvider context={{setSection}}>
			<HeaderBar />
			<SectionHeader title={section.title} />
			<Gallery section={section} />
		</AppProvider>
	);
}

export default App;
