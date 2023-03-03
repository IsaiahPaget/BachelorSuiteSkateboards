import React, { useContext, useState, useEffect } from "react";
import { shoppingCartContext } from "../../context/ShoppingCartContext";
import { getProductData } from "../Firebase/Firebase";
import "./ContactComponent.scss";

function Contact(props) {
	const cart = useContext(shoppingCartContext);
	const [cartTotal, setCartTotal] = useState(0);

	useEffect(() => {
		async function getTotal() {
			const total = await cart.getTotalCost();
			setCartTotal(total);
		}
		getTotal();
	}, [cart]);

	return (
		<section className='container pt-3'>
			<form
				onSubmit={(e) => e.preventDefault()}
				className='d-flex flex-column form gap-3 bg-white p-3 shadow rounded'
			>
				<label className='px-1 text-dark fs-4'>
					Put in your Email and I will reachout to you, about your order!
				</label>
				<input
					type='email'
					className='border border-2 border-dark rounded p-1'
					id='exampleFormControlInput1'
					placeholder='name@example.com'
				/>
				<ul className='flex-grow-1 rm-list-style p-0'>
					{cart.items.map((item) => {
						const product = getProductData(item.id, props.products)[0];
						return (
							<div className='d-flex mb-2 rounded p-1 border border-2 border-dark gap-2 align-items-center'>
								<li key={product.id} className='flex-grow-1 fs-5 fw-bold'>
									{product.name}
								</li>
								<div className='d-flex gap-4 align-items-center'>
									<span className='fs-5 fw-bold'>{item.quantity}</span>
									<div className='d-flex flex-column'>
										<button
											onClick={() => cart.addToCart(item.id)}
											className='rm-button-style border-bottom px-2'
										>
											+
										</button>
										<button
											onClick={() => cart.removeFromCart(item.id)}
											className='rm-button-style fw-bolder px-2'
										>
											-
										</button>
									</div>
								</div>
							</div>
						);
					})}
				</ul>
				<div className='d-flex justify-content-between align-items-center '>
					<button className='rm-button-style text-dark bg-light border border-dark p-1 rounded fw-bold '>
						Submit Order
					</button>
					<span className='text-dark fw-bold'>total: {cartTotal}</span>
				</div>
			</form>
		</section>
	);
}

export default Contact;
