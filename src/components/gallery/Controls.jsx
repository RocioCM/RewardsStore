import ArrowIcon from './ArrowIcon';

function Controls({pageParams, children}) {
	///Los children son los filtritos.
	///Esto lleva un display flex con space-between.
	const shownProducts = Math.min(16 * pageParams.page, pageParams.total);
	return (
		<div className='controls-bar'>
			<span className='gallery-paging'>
				{shownProducts} de {pageParams.total} productos
			</span>
			{children}
			<div className='arrows-ctn'>
				<ArrowIcon className='left' onClick={() => console.log('Next page')} />
				<ArrowIcon
					className='right'
					onClick={() => console.log('Previous page')}
				/>
			</div>
		</div>
	);
}

export default Controls;
