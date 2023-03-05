import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import "./NavBar.scss";
import React from "react";
import { shoppingCartContext } from "../../context/ShoppingCartContext";

function NavBar() {
	const [cartOpen, setCartOpen] = useState(false);

	const cart = useContext(shoppingCartContext);

	const productsCount = cart.items.reduce(
		(sum, product) => sum + product.quantity,
		0
	);

	return (
		<nav className='container'>
			<ul className='d-flex p-0 m-0'>
				<li className='justify-content-center d-flex align-items-center flex-grow-1'>
					<a
						href='https://www.instagram.com/bachelorsuite/'
						className='text-deco text-dark'
						target='_blank'
					>
						<i className='fa-brands fa-instagram fa-2xl icon'></i>
					</a>
				</li>
				<li className='justify-content-center d-flex align-items-center flex-grow-1'>
					<Link to='/'>
						<img src='/logo.jpg' className='logo shadow'></img>
					</Link>
				</li>
				<li className='justify-content-center d-flex align-items-center flex-grow-1 position-relative'>
					<Link
						className='text-deco text-dark'
						to={cartOpen ? "/" : "/cart"}
						onClick={() => setCartOpen(!cartOpen)}
					>
						<i className='fa fa-cart-shopping fa-2xl icon'></i>
						{productsCount > 0 ? (
							<span className='cart-counter'>{productsCount}</span>
						) : null}
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
