import "./NavBar.scss";

function NavBar(props) {
	return (
		<nav className='container pt-3'>
			<div className='d-flex'>
				<div className=' rm-button-style d-flex justify-content-center align-items-center flex-grow-1'>
					<a href='https://www.instagram.com/bachelorsuite/' target='_blank'>
						<i className='fa-brands fa-instagram fa-2xl icon-button'></i>
					</a>
				</div>
				<button href='/' className='rm-button-style flex-grow-1'>
					<img src='/logo.jpg' className='logo shadow icon-button'></img>
				</button>
				<button onClick={props.handleCartOpen} className='rm-button-style flex-grow-1'>
					<i className='fa fa-cart-shopping fa-2xl icon-button'></i>
				</button>
			</div>
		</nav>
	);
}

export default NavBar;
