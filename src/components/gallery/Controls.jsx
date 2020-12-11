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
				<a href='#gallery'>
					<ArrowIcon
						className={`left ${currentPage === 1 ? 'hide' : ''}`}
						handleClick={prevPage}
					/>
				</a>
				<a href='#gallery'>
					<ArrowIcon
						className={`right ${currentEnd === totalProducts ? 'hide' : ''}`}
						handleClick={nextPage}
					/>
				</a>
			</div>
		</div>
	);
}

export default Controls;
