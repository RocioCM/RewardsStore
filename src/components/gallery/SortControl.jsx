import {useContext} from 'react';
import {AppContext} from '../../ContextProvider';

function SortControl() {

	const {products, setProducts} = useContext(AppContext);

	const sortDefault = () => {
		const sortedProds = products.sort((p1,p2) => (p1._id<p2.id) ? -1 : 1 );
		console.log(sortedProds);
		setProducts(sortedProds);
	}

	const sortLowPrice = () => {
		const sortedProds = products.sort((p1,p2) => p1.cost - p2.cost);
		console.log(sortedProds);
		setProducts(sortedProds);
	}

	const sortHighPrice = () => {
		const sortedProds = products.sort((p1,p2) => p2.cost - p1.cost);
		console.log(sortedProds);
		setProducts(sortedProds);
	}
	/////THIS IS NOT WORKING. GALLERY DOESNT REACT TO 'PRODUCTS' CHANGE.

	return (
		<p className='sort-controls-ctn'>
			Ordenar por: 
			<button className='sort-option-btn' onClick={sortDefault}>Más reciente</button>
			<button className='sort-option-btn' onClick={sortLowPrice}>Precio Bajo</button>
			<button className='sort-option-btn' onClick={sortHighPrice}>Precio Alto</button>
		</p>
	);
}

export default SortControl;
