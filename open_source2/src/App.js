import Title from './Title';
import News from './News';
import Link from './Link';
import AppIcon from './AppIcon';
import './css/style.css';

function App(){
	return(
		<div className="container">
			<div className="inner">
				<div className="news">
					<Title />
					<News />
				</div>
				<Link />
			</div>
			<AppIcon />
		</div>
	);		
}

export default App;