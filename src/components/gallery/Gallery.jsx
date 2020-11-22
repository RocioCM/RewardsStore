import Controls from './Controls';
import SortControl from './SortControl';
import Card from './Card';
import '../../styles/main.css';

function Gallery(props) {
	//Este componente renderiza las dos barras de controles y CardsCtn. El map que está ahí, debería ser la llamada a CardCtn con products.
	//La lista de products después la va a obtener por el context, no por props.
	return (
		<section className='main-section'>
			<Controls>
				<SortControl />
			</Controls>
			{props.products.map(product => <Card product={product} />)}
			<Controls />
		</section>
	);
	
}

export default Gallery;