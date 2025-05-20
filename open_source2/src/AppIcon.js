import data from "./data";

function AppIcon(){
	let {banner}=data;

	return(
		<div className="app_icon">
			<ul>
				{
					banner.map(d =>
						<li key={d.idx}>
							<a href=""><img src={`images/${d.src}`} alt={`hana_app${d.idx+1}`} /></a>
						</li>
					)
				}
			</ul>
		</div>
	);
}

export default AppIcon;