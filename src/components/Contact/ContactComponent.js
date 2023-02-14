import React from "react";
import NavBar from "../NavBar/NavBarComponent";
import "./ContactComponent.scss";
import axios from "axios";

function Contact() {
	function handleSubmit() {
		axios
			.post("https://us-central1-bachelor-suite.cloudfunctions.net/contactsubmit", {
				firstName: "Fred",
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	return (
		<section className='container pt-3'>
			<NavBar/>
			<div className='contact-container mt-3 py-5 rounded'>
				<header className='d-flex-col text-center text-primary'>
					<h1>Contact With Me</h1>
					<p>send me an email</p>
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
					<div className='mb-3'>
						<label for='exampleFormControlTextarea1' className='form-label text-primary'>
							Example textarea
						</label>
						<textarea
							className='form-control'
							id='exampleFormControlTextarea1'
							rows='3'
						></textarea>
					</div>
					<button className='rm-button-style p-1 bg-primary text-white rounded'>
						Submit
					</button>
				</form>
			</div>
		</section>
	);
}

export default Contact;
