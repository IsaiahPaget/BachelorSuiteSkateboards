import "./NavBar.scss";

function NavBar() {
	return (
		<header className='mb-3 rounded'>
			<div className='row'>
				<div className="col d-flex justify-content-center align-self-center p-3">
					<a className=' fa-brands fa-instagram fa-2xl icon-button' href="https://www.instagram.com/bachelorsuite/" target='_blank'></a>
				</div>
				<div className='col d-flex justify-content-center align-self-center colour-rotate'>
					<a href='/'>
						<img src='/logo.jpg' className='logo shadow'></img>
					</a>
				</div>
				<div className="col d-flex justify-content-center align-self-center p-3">
					<a
						href='/order'
						className='fa fa-cart-shopping fa-2xl icon-button'
					></a>
				</div>
			</div>
		</header>
	);
}

export default NavBar;
