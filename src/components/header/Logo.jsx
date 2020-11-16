import {useContext} from 'react';
import {AppContext} from '../../ContextProvider';

function Logo() {
    const {setSection} = useContext(AppContext);

    const handleSectionChange = () => {
       setSection({section:'electronics', title:'Electrónica'});
    };

	return (
        <svg width="39px" height="36px" viewBox="0 0 39 36" onClick={handleSectionChange}>
            <defs>
                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                    <stop stopColor="#FF8800" offset="0%"></stop>
                    <stop stopColor="#FF6600" offset="100%"></stop>
                </linearGradient>
            </defs>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Catalog" transform="translate(-16.000000, -16.000000)" fill="url(#linearGradient-1)">
                    <g id="top">
                        <path d="M46.868244,16.404544 C46.6405958,16.0177278 46.1363003,15.8851051 45.7421767,16.1085325 L32.2482382,23.7546496 C31.9411566,23.9287916 31.7816812,24.2764781 31.8528973,24.6175933 L36.3942582,46.3988127 C36.4161301,46.5037148 36.370779,46.6585782 36.3020649,46.734636 L35.7503076,47.3453612 C34.6032406,48.615134 33.631475,49.3030396 31.7844202,49.3030396 C29.7133694,49.3030396 28.7409951,48.2316035 27.2013263,46.3378469 C25.3624888,44.0763908 23.0744418,41.2620414 17.5113649,41.2620414 L17.3738021,41.2620414 C16.6150762,41.2620414 16,41.8657137 16,42.6103723 C16,43.3550308 16.6150762,43.9587031 17.3738021,43.9587031 L17.5113649,43.9587031 C21.7514649,43.9587031 23.3553499,45.9313165 25.0535812,48.0198254 C26.5704243,49.8855042 28.2896551,52 31.7844202,52 C34.8013676,52 36.461556,50.6226953 37.8061413,49.134573 L42.7657069,43.6456657 C42.7657069,43.645367 54.5617185,30.5894981 54.5617185,30.5894981 C54.7969752,30.3290319 54.8362354,29.9499819 54.6588037,29.6482951 L46.868244,16.404544 Z" id="logo"></path>
                    </g>
                </g>
            </g>
        </svg>
	);
}

export default Logo;