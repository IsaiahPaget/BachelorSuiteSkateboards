import React from "react";
import NavBar from "../NavBar/NavBarComponent";
import "./ContactComponent.scss";

function Contact() {
	function handleSubmit() {
		
	}

	const cart = localStorage.getItem('cart');
	

	return (
		<section className='container pt-3'>
			<NavBar/>
			<div className='contact-container mt-3 py-5 rounded'>
				<header className='d-flex-col text-center text-primary'>
					<h1>BACHELOR SUITE</h1>
					<p>Submit your order by Email, I'll be in touch!</p>
				</header>
				<form onSubmit={handleSubmit} className='form-container p-4'>
					<div className='mb-3'>
						<label for='exampleFormControlInput1' className='form-label text-primary'>
							Email address
						</label>
						<input
							type='email'
							className='form-control'
							id='exampleFormControlInput1'
							placeholder='name@example.com'
						/>
					</div>
					{}
					<button className='rm-button-style p-1 bg-primary text-white rounded'>
						Submit
					</button>
				</form>
			</div>
		</section>
	);
}

export default Contact;
