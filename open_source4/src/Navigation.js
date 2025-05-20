import { useState, useEffect } from 'react';

function Navigation(){
	let [data, setState]=useState(null);

	useEffect(() => {
		fetch(process.env.PUBLIC_URL+"/data/data.json")
			.then(response => response.json())
			.then(
				result => {
					// console.log(result);

					setState(result);
				},
				error => {
					// console.log(error);
				}
			);
	}, []);

	useEffect(() => {
		if(data === null) return;

		let nav=document.getElementById("nav");
		let depth1Ul=nav.firstElementChild; // nav > ul
		let depth1Li=depth1Ul.children; // nav > ul > li

		for(let i=0; i<depth1Li.length; i++){
			depth1Li[i].index=i;

			depth1Li[i].addEventListener("mouseenter", function(){
				depth1Ul.classList.add("over");
			});
			depth1Li[i].addEventListener("mouseleave", function(){
				depth1Ul.classList.remove("over");
			});

			let depth1A=depth1Li[i].firstElementChild; // nav > ul > li > a
			let depth2Ul=depth1Li[i].lastElementChild; // nav ul ul
			let depth2Li=depth2Ul.children; // nav ul ul li

			depth1A.addEventListener("focusin", function(e){
				e.target.classList.add("over");

				if(e.target.parentElement.index === 0){
					depth1Ul.classList.add("over");
				}
			});

			for(let j=0; j<depth2Li.length; j++){
				if(j === (depth2Li.length-1)){
					depth2Li[j].firstElementChild.addEventListener("focusout", function(e){
						let link=e.target.parentElement.parentElement.previousElementSibling;
						link.classList.remove("over");

						let linkLi=e.target.parentElement.parentElement.parentElement;
						let index=linkLi.index;

						if(index === (depth1Li.length-1)){
							depth1Ul.classList.remove("over");
						}
					});
				}
			}
		}
	});

	if(data === null){
		return(
			<div className="container">
				<nav id="nav">
					<ul>
					</ul>
				</nav>
			</div>
		);
	}
	else{
		return(
			<div className="container">
				<nav id="nav">
					<ul>
					{
						data.map((d1, i) =>
							<li key={i+1}>
								<a href="">{d1.depth1}</a>
								<ul className="sub">
									{
										d1.depth2.map((d2, j) =>
											<li key={j+1}><a href="">{d2}</a></li>
										)
									}
								</ul>
							</li>
						)
					}
					</ul>
				</nav>
			</div>
		);
	}
}

export default Navigation;