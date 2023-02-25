import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBarComponent";
import "./ContactComponent.scss";

function Contact(props) {
	return (
		<section className='container form-container pt-3'>
			<form className='d-flex flex-column gap-3 bg-white p-3 rounded'>
				<label className=''>
					Put in your Email and I will reachout to you, about your order!
				</label>
				<input
					type='email'
					className='border border-2 border-info p-1'
					id='exampleFormControlInput1'
					placeholder='name@example.com'
				/>
				{props.cartItems.map((cartItem) => {
					return <div>{cartItem}</div>;
				})}
				<div className='d-flex justify-content-between align-items-center '>
					<button className='rm-button-style text-white bg-info p-1 rounded fw-bold '>
						Submit
					</button>
					<span className='text-info fw-bold'>total</span>
				</div>
			</form>
		</section>
	);
}

export default Contact;
