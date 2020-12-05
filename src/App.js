import {useState} from 'react';
import AppProvider from './ContextProvider';
import HeaderBar from './components/header/HeaderBar';
import SectionHeader from './components/header/SectionHeader';
import Gallery from './components/gallery/Gallery';
import './styles/app.css';

function App() {
	const [section, setSection] = useState({section:"electronics", title:"Electrónica"});
	return (
		<AppProvider context={{coins: 1000, section: section.section, setSection}}>
			<HeaderBar />
			<SectionHeader title={section.title} />
			<Gallery section={section.section} />
		</AppProvider>
	);
}

export default App;
