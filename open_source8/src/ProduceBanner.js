function ProductBanner(props){
	let {id, title, sub, image}=props.propsValue;

	return(
		<li>
			<a href="">
				<div className="photo"><img src={"/images/"+image} alt={"port"+(id+1)} /></div>
				<div className="desc">
					<dl>
						<dt>{title}</dt>
						<dd>{sub}</dd>
					</dl>
				</div>
			</a>
		</li>
	);
}

export default ProductBanner;