import ArrowIcon from './ArrowIcon';

function Controls({products, children}) {
	///Los children son los filtritos.
	///Esto lleva un display flex con space-between.
	const shownProducts = Math.min(16*products.page, products.total);
	return (
		<div className='controls-bar'>
			<span>{shownProducts} de {products.total} productos</span>
			{children}
			<div>
				<ArrowIcon className="left" />
				<ArrowIcon className="right" />
			</div>
		</div>
	)
}

export default Controls;
