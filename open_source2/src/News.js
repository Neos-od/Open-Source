import { useEffect, useState } from "react";

function News(){
	let [state, setState]=useState({
		error: null,
		isLoaded: false,
		data: []
	});

	useEffect(() => {
		setTimeout(() => {
			fetch("/data/data.json")
				.then(response => response.json())
				.then(
					result => {
						setState({
							error: null,
							isLoaded: true,
							data: result.news
						});
					},
					error => {
						setState({
							error: error,
							isLoaded: true,
							data: []
						});
					}
				);
		}, 1000);
	}, []);

	let {error, isLoaded, data}=state;

	// console.log(error, isLoaded, data);

	if(error){
		return(
			<div>Error : {error.message}</div>
		);
	}

	if(!isLoaded){
		return(
			<div className="news_list">
				<div className="loading"><img src="/images/loading.gif" alt="loading" /></div>
			</div>
		);
	}
	else{
		return(
			<div className="news_list">
				<ul>
					{
						data.map(d =>
							<li key={d.idx}>
								<a href="">{d.text}</a>
								<span>{d.date}</span>
							</li>
						)
					}
				</ul>
			</div>
		);
	}
}

export default News;