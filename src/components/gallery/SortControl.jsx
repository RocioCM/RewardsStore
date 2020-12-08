import {useState} from 'react';
import {filtersParams} from '../../services/consts';

function SortControl({products, setProducts}) {
	const [activeFilter, setActiveFilter] = useState(0);

	const sortProducts = (filterId, sortFunction) => {
		const sortedProducts = products.slice().sort(sortFunction);
		setProducts(sortedProducts);
		setActiveFilter(filterId);
	};

	return (
		<p className='sort-controls-ctn'>
			Ordenar por:
			{filtersParams.map(({callback, wording}, i) => (
				<button
					className={`sort-option-btn ${activeFilter === i ? 'active' : ''}`}
					onClick={() => sortProducts(i, callback)}
				>
					{wording}
				</button>
			))}
		</p>
	);
}

export default SortControl;
