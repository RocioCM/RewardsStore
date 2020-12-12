import React from 'react';
import Card from './Card';

function Cards({section, products}) {
	return (
		<div className='cards-ctn'>
			{products.map((product, i) => (
				<Card key={section + product._id + i} product={product} />
			))}
		</div>
	);
}

export default Cards;
