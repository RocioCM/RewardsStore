import {useState, useEffect} from 'react';
import Controls from './Controls';
import SortControl from './SortControl';
import EmptyGallery from './EmptyGallery';
import Cards from './Cards';
import '../../styles/gallery.css';

function Gallery({section}) {
	let [products, setProducts] = useState([]);
	const [pageParams, setPageParams] = useState({page: 0, total: 0});

	const getSectionProducts = async () => {
		const products = await section.getProducts();
		console.log(products); ///
		setProducts(products);
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => getSectionProducts(), [section]);
	products = [];
	return (
		<section className='main-section'>
			<Controls pageParams={pageParams}>
				<SortControl products={products} setProducts={setProducts} />
			</Controls>
			{products.length === 0 ? (
				<EmptyGallery />
			) : (
				<Cards products={products} handlePage={setPageParams} />
			)}
			<Controls pageParams={pageParams} />
		</section>
	);
}

export default Gallery;
