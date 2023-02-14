import "./ProductCardComponent.scss";
import React, { useState } from "react";

function ProductCard(props) {
	const [isClicked, setIsClicked] = useState(false);

	return (
		<div
			onMouseLeave={() => setIsClicked(false)}
			onClick={() => {
				setIsClicked(!isClicked);
			}}
			className='col-12 col-md-6 col-lg-4 d-flex my-3'
		>
			<div className='img-container shadow rounded'>
				<img
					className='img-css rounded'
					alt='an image of product'
					src={props.img}
				></img>
				<header
					style={{ opacity: isClicked ? 1 : 0 }}
					className='rounded overlay p-3'
				>
					<h3>{props.name}</h3>
					<h3>{props.price}</h3>
					<p>{props.description}</p>
				</header>
			</div>
		</div>
	);
}

export default ProductCard;
