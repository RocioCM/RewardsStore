import AppProvider from './ContextProvider';
import HeaderBar from './components/header/HeaderBar';
import SectionHeader from './components/header/SectionHeader';
import {useState} from 'react';
import './styles/app.css';

function App() {

	const [section, setSection] = useState({section:"electronics", title:"Electrónica"});
	 
	return (
		<AppProvider context={{setSection}}>
			<div className='App'>
				<HeaderBar />
				<SectionHeader title={section.title} />
				<h2>Hi, visitor</h2>
			</div>
		</AppProvider>
	);
}

export default App;
