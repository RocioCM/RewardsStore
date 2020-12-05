import {useState, useEffect} from 'react';
import Controls from './Controls';
import SortControl from './SortControl';
import Cards from './Cards';
import ProductsService from '../../services/productsService';
import '../../styles/gallery.css';

function Gallery({section}) {

	const [products, setProducts] = useState([]);
	const [pageParams, setPageParams] = useState({page: 0, total: 0});

	const getProducts = async () => {
		let products = null;
		switch (section) {
			case ('history'):
				products = await ProductsService.getHistory();
				break;
			default:
				products = await ProductsService.getProducts();
		};
		setProducts(products);
	}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => getProducts(),[]); //ComponentDidMount

	return (
		<section className='main-section'>
			<Controls pageParams={pageParams}>
				<SortControl products={products} setProducts={setProducts} />
			</Controls>
			<Cards products={products} handlePage={setPageParams} />
			<Controls pageParams={pageParams} />
		</section>
	);
}

export default Gallery;