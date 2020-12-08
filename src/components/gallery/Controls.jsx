import ArrowIcon from './ArrowIcon';

function Controls({pageParams, children}) {
	///Los children son los filtritos.
	///Esto lleva un display flex con space-between.
	const shownProducts = Math.min(16*pageParams.page, pageParams.total);
	return (
		<div className='controls-bar'>
			<span>{shownProducts} de {pageParams.total} productos</span>
			{children}
			<div>
				<ArrowIcon className="left" onClick={()=>console.log("Next page")} />
				<ArrowIcon className="right" onClick={()=>console.log("Previous page")} />
			</div>
		</div>
	)
}

export default Controls;
