import ProductCardContainer from "./components/ProductCardContainer/ProductCardContainerComponent.js";
import Contact from "./components/Contact/ContactComponent";
import "./App.scss";
import NavBar from "./components/NavBar/NavBarComponent.js";
import { Routes, Route } from "react-router-dom";
import { ShoppingCartProvider } from "./context/ShoppingCartContext.js";
import { useState, useEffect } from "react";
import { getProductCards, getProductData } from "./components/Firebase/Firebase.js";

function App() {
	const [titleImageVisible, setTitleImageVisible] = useState(true);
	const [products, setProducts] = useState([]);

	const handleFrontImage = () => {
		const front_image = document.getElementById("font_image");
		front_image.classList.add("image-translate");
		setTimeout(() => {
			setTitleImageVisible(false);
		}, 1000);
	};

	

	useEffect(() => {
		getProductCards().then((card) => {
			setProducts(card)
		})
	}, []);

	return (
		<ShoppingCartProvider>
			<header className=' shadow bg-header p-2'>
				<NavBar />
			</header>
			<Routes>
				<Route
					path='/'
					element={
						<ProductCardContainer
							titleImageVisible={titleImageVisible}
							handleFrontImage={handleFrontImage}
							products={products}
						/>
					}
				/>
				<Route path='/cart' element={<Contact products={products}/>} />
			</Routes>
		</ShoppingCartProvider>
	);
}

export default App;
