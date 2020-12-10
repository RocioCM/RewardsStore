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
				<ArrowIcon
					className='left'
					handleClick={() => {
						prevPage();
						console.log('Para trás trás trás');
					}}
				/>
				<ArrowIcon
					className='right'
					handleClick={() => {
						nextPage();
						console.log('Ante pa delante');
					}}
				/>
			</div>
		</div>
	);
}

export default Controls;
