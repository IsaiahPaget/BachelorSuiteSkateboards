import ProductCardContainer from "./components/ProductCardContainer/ProductCardContainerComponent.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact/ContactComponent";
import FrontImage from "./components/FrontImage/FrontImageComponent";
import { useState } from "react";
import "./App.scss";
import NavBar from "./components/NavBar/NavBarComponent.js";

function App() {
	const [cartOpen, setCartOpen] = useState(false);
	const [frontpage, setFrontPage] = useState(true);
	const [cartItems, setCartItems] = useState([]);

	function handleAddCart(product) {
		let newArray = cartItems;
		newArray.push(product);
		setCartItems(newArray);
		console.log(cartItems);
	}

	function handleCartOpen() {
		setCartOpen(!cartOpen);
	}

	return (
		<>
			{frontpage ? (
				<FrontImage setFrontPage={setFrontPage} />
			) : (
				<main>
					<NavBar handleCartOpen={handleCartOpen} />
					{cartOpen ? (
						<Contact cartItems={cartItems} />
					) : (
						<ProductCardContainer handleAddCart={handleAddCart} />
					)}
				</main>
			)}
		</>
	);
}

export default App;
