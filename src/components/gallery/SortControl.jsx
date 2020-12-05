function SortControl({products, setProducts}) {

	const sortProducts = (sortFunction) => {
		const sortedProducts = products.slice().sort(sortFunction);
		setProducts(sortedProducts);
	}

	return (
		<p className='sort-controls-ctn'>
			Ordenar por: 
			<button className='sort-option-btn' onClick={()=>sortProducts((p1,p2) => (p1._id<p2._id) ? -1 : 1)}>Más reciente</button>
			<button className='sort-option-btn' onClick={()=>sortProducts((p1,p2) => p1.cost - p2.cost)}>Precio Bajo</button>
			<button className='sort-option-btn' onClick={()=>sortProducts((p1,p2) => p2.cost - p1.cost)}>Precio Alto</button>
		</p>
	);
}

export default SortControl;
