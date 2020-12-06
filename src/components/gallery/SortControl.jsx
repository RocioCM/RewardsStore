import { useState } from "react";

function SortControl({products, setProducts}) {

	const [activeFilter, setActiveFilter] = useState(0);

	const sortProducts = (filterId, sortFunction) => {
		const sortedProducts = products.slice().sort(sortFunction);
		setProducts(sortedProducts);
		setActiveFilter(filterId);
	}

	///Esto va en un archivo aparte que sea de constantes eh, eh, eh.
	const params = [
		{callback: (p1,p2) => (p1._id<p2._id) ? -1 : 1, wording: 'Más reciente'},
		{callback: (p1,p2) => p1.cost - p2.cost, wording: 'Precio Bajo'},
		{callback: (p1,p2) => p2.cost - p1.cost, wording: 'Precio Alto'}
	]

	return (
		<p className='sort-controls-ctn'>
			Ordenar por: 
			{params.map(({callback, wording}, i)=> <button className={`sort-option-btn ${activeFilter==i?'active':''}`} onClick={()=>sortProducts(i,callback)}>{wording}</button>)}
		</p>
	);
}

export default SortControl;
