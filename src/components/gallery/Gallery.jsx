import {useState, useEffect} from 'react';
import usePaging from '../../hooks/usePaging';
import Controls from './Controls';
import SortControl from './SortControl';
import EmptyGallery from './EmptyGallery';
import Cards from './Cards';
import '../../styles/gallery.css';

function Gallery({section}) {
	const [products, setProducts] = useState([]);
	const {currentItems, currentEnd, currentPage, prevPage, nextPage} = usePaging(
		products,
		16
	);
	const pageParams = {
		prevPage,
		nextPage,
		currentPage,
		currentEnd: currentEnd(),
		totalProducts: products.length,
	};

	const getSectionProducts = async () => {
		const products = await section.getProducts();
		console.log(products); ///
		setProducts(products);
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => getSectionProducts(), [section]);

	return (
		<section className='main-section'>
			<Controls {...pageParams}>
				<SortControl products={products} setProducts={setProducts} />
			</Controls>
			{products.length === 0 ? (
				<EmptyGallery />
			) : (
				<Cards section={section.id} products={currentItems()} />
			)}
			<Controls {...pageParams} />
		</section>
	);
}

export default Gallery;
