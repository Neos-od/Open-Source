import Slider from "./Slider";
import './css/style.css';

function App(){
	return(
		<>
			<h1 className="title">plugins :: SwiperJS Multi Slider</h1>
			<div className="container">
				<div id="sub_slider">
					<Slider />
				</div>
			</div>
		</>
	);		
}

export default App;