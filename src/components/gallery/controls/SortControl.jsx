import {useState} from 'react';
import {filtersParams} from '../../../services/consts';

function SortControl({products, setProducts}) {
	const [activeFilter, setActiveFilter] = useState(0);

	const sortProducts = (filterId, sortFunction) => {
		const sortedProducts = products.slice().sort(sortFunction);
		setProducts(sortedProducts);
		setActiveFilter(filterId);
	};

	return (
		<div className='sort-controls-ctn'>
			<p>
				Ordenar por:
				{filtersParams.map(({callback, wording}, i) => (
					<button
						key={i}
						className={`sort-option-btn ${activeFilter === i ? 'active' : ''}`}
						onClick={() => sortProducts(i, callback)}
					>
						{wording}
					</button>
				))}
			</p>
		</div>
	);
}

export default SortControl;
