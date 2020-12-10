import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserAstronaut} from '@fortawesome/free-solid-svg-icons';

function EmptyGallery() {
	return (
		<section className='empty-gallery'>
			<div className='box-ctn'>
				<FontAwesomeIcon className='fa-icon' icon={faUserAstronaut} />
				<h2>Parece que no hay productos aquí</h2>
				<h4>
					¿Piensas que es un error? Prueba <a href='./'>recargar</a> la página
				</h4>
			</div>
		</section>
	);
}

export default EmptyGallery;
