import "./ProductCardComponent.scss";
import React, { useState, useContext } from "react";
import { shoppingCartContext } from "../../context/ShoppingCartContext";

function ProductCard(props) {
	const [isClicked, setIsClicked] = useState(false);

	const cart = useContext(shoppingCartContext);

	return (
		<div
			onMouseEnter={() => {
				setIsClicked(true);
			}}
			onMouseLeave={() => {
				setIsClicked(false);
			}}
			className='col-12 col-md-6 col-lg-4 d-flex mt-3'
		>
			<div className='img-container shadow rounded'>
				<img
					className='img-css rounded'
					alt='an image of product'
					src={props.product.img}
				></img>
				<form
					style={{ opacity: isClicked ? 1 : 0 }}
					className='rounded overlay p-2 d-flex flex-column'
					onSubmit={(e) => {
						e.preventDefault();
					}}
				>
					<label className='d-flex justify-content-between fw-bolder fs-3 text-dark'>
						<div>{props.product.name}</div>
						<div>${props.product.price}</div>
					</label>
					<p className='text-dark flex-grow-1'>{props.product.description}</p>
					{isClicked ? (
						<button
							className='border-0 rounded bg-white p-2 text-dark'
							onClick={() => {
								cart.addToCart(props.product.id);
							}}
						>
							Add to Cart
						</button>
					) : null}
				</form>
			</div>
		</div>
	);
}

export default ProductCard;
