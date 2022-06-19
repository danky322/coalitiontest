import '../CSS/App.css';
import Contact from './Contact';
import Header from './Header';
import Subheader from './Subheader';

function App() {
	return (
		<div className='App'>
			<div className='App-header'>
				<Header />
				<Subheader />
				<Contact />
			</div>
		</div>
	);
}

export default App;
