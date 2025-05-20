function ProductList(props){
	let {idx, image, title, sale, dollar, won}=props.propsValue;

	return(
		<li>
			<a href="">
				<div className="photo"><img src={`/images/${image}`} alt={`product${idx+1}`} /></div>
				<div className="desc">
					<strong>{title}</strong>
					<span className="discount">{sale}</span>
					<span className="dollar">{dollar}</span>
					<span className="won">{won}</span>
				</div>
			</a>
		</li>
	);
}

export default ProductList;