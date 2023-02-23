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
				<form
					style={{ opacity: isClicked ? 1 : 0 }}
					className='rounded overlay p-3 d-flex flex-column'
					onSubmit={(e) => {
						e.preventDefault();
						props.handleAddCart(props.name)
						localStorage.setItem('cart', props.cartItems)
					}}
				>
					<h3 className='fw-bolder text-info'>
						{props.name} {props.price}
					</h3>
					<p className='text-dark flex-grow-1'>{props.description}</p>
					<button className='bg-info border-0 p-2 text-white'>Add to Cart</button>
				</form>
			</div>
		</div>
	);
}

export default ProductCard;
