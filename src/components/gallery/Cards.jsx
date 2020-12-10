import React from 'react';
import Card from './Card';

function Cards({products}) {
	return (
		<div className='cards-ctn'>
			{products.map((product) => (
				<Card key={product._id} product={product} />
			))}
		</div>
	);
}

export default Cards;
