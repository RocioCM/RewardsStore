
function Controls({children}) {
	//Los children son los filtritos.
	//Esto lleva un display flex con space-between.
	return (
		<div className='controls-bar'>
			<span>16 of 32 products</span>
			{children}
			<span>{"(<) (>)"}</span>
		</div>
	)
}

export default Controls;
