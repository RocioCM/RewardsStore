import ArrowIcon from './ArrowIcon';

function Controls(props) {
	const {
		prevPage,
		nextPage,
		currentPage,
		currentEnd,
		totalProducts,
		children,
	} = props;
	return (
		<div className='controls-bar'>
			<span className='gallery-paging'>
				{currentEnd} de {totalProducts} productos
			</span>
			{children}
			<div className='arrows-ctn'>
				<ArrowIcon
					className={`left ${currentPage === 1 ? 'hide' : ''}`}
					handleClick={prevPage}
				/>
				<ArrowIcon
					className={`right ${currentEnd === totalProducts ? 'hide' : ''}`}
					handleClick={nextPage}
				/>
			</div>
		</div>
	);
}

export default Controls;
