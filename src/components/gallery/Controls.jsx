import ArrowIcon from './ArrowIcon';

function Controls(props) {
	const {prevPage, nextPage, currentEnd, totalProducts, children} = props;
	return (
		<div className='controls-bar'>
			<span className='gallery-paging'>
				{currentEnd} de {totalProducts} productos
			</span>
			{children}
			<div className='arrows-ctn'>
				<ArrowIcon className='left' handleClick={prevPage} />
				<ArrowIcon className='right' handleClick={nextPage} />
			</div>
		</div>
	);
}

export default Controls;
