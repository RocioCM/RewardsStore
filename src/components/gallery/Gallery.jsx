import {useState} from 'react';
import Controls from './Controls';
import SortControl from './SortControl';
import Cards from './Cards';
import '../../styles/gallery.css';

function Gallery() {
	const [pageParams, setPageParams] = useState({page: 0, total: 0});
	return (
		<section className='main-section'>
			<Controls products={pageParams}>
				<SortControl />
			</Controls>
			<Cards handlePage={setPageParams} />
			<Controls products={pageParams} />
		</section>
	);
}

export default Gallery;