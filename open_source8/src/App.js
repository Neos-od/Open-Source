import { useState, useEffect } from 'react';
import ProductBanner from './ProduceBanner';
import data from './data';
import './css/style.css';

function App(){
	let [productData, setProductData]=useState(data);

	useEffect(() => {
		let portfolio=document.getElementById("portfolio");
		let content=portfolio.querySelector(".content");
		let tabMenuList=content.querySelectorAll(".tab_menu ul li");

		let tabN;

		tabMenuList.forEach(function(item1, i){
			item1.addEventListener("click", function(e){
				e.preventDefault();

				if(i === tabN) return;

				tabN=i;

				let sortedData=[...productData];

				if(item1.id === "title"){
					sortedData.sort((a, b) => {
						if(a.title > b.title) return 1;
						if(a.title < b.title) return -1;
						return 0;
					});
				}
				else if(item1.id === "date"){
					sortedData.sort((a, b) => {
						if(a.date > b.date) return 1;
						if(a.date < b.date) return -1;
						return 0;
					});
				}

				// console.log(productData);
				// console.log(sortedData);

				setProductData(sortedData);

				tabMenuList.forEach(function(item2, j){
					if(j === i){
						item2.classList.add("active");
					}
					else{
						item2.classList.remove("active");
					}
				});
			});
		});
	}, []);

	return(
		<div className="wrapper">
			<section id="portfolio">
				<div className="inner">
					<div className="title">
						<h3>OUR PORTFOLIO</h3>
					</div>
					<div className="content clearfix">
						<div className="tab_menu">
							<ul>
								<li id="title"><a href="">제목으로 정렬</a></li>
								<li id="date"><a href="">날짜로 정렬</a></li>
							</ul>
						</div>
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
									productData.map((d, i) =>
										<ProductBanner key={i+1} propsValue={d} />
									)
								}
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default App;