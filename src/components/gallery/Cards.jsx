import React, {useEffect} from 'react';
import Card from './Card';

function Cards({section, products, handlePage}) {
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => handlePage({page: 2, total: 31}), []); ///

	return (
		<div className='cards-ctn'>
			{products.map((product, i) => (
				<Card key={section + product._id + i} product={product} />
			))}
		</div>
	);
}

export default Cards;
