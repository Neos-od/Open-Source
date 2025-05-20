import { useState } from 'react';
import ProductBanner from './ProductBanner';
import data from './data';
import './css/style.css';

function App(){
	let [count, setCount]=useState(3);

	let total=data.length;

	let moreProduct=e => {
		e.preventDefault();

		if(count < total){
			count+=3;

			setCount(count);
		}

		// console.log(count, total);
	};

	return(
		<div className="wrapper">
			<section id="portfolio">
				<div className="inner">
					<div className="title">
						<h3>OUR PORTFOLIO</h3>
					</div>
					<div className="content clearfix">
						<div className="banner">
							<ul>
								{/*
								<ProductBanner />
								<ProductBanner />
								<ProductBanner />
								<ProductBanner />
								<ProductBanner />
								<ProductBanner />
								*/}

								{
									data.map((d, i) => 
										(i < count) ? <ProductBanner key={i+1} propsValue={d} /> : null
									)
								}
							</ul>
						</div>
					</div>
					{
						(count < total) ? <a href="" className="more" onClick={moreProduct}>More</a> : null
					}
				</div>
			</section>
		</div>
	);
}

export default App;