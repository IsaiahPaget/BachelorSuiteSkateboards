import "./ProductCardContainer.scss";
import products from "../../data";
import ProductCard from "../ProductCard/ProductCardComponent";
import NavBar from "../NavBar/NavBarComponent";
import { useState } from "react";

function ProductCardContainer() {

	const [cartItems, setCartItems] = useState([])

	function handleAddCart(product) {
		let newArray = cartItems;
		newArray.push(product);
		setCartItems(newArray);
	} 

	const Cards = () => {
		return products.map((product) => {
			return (
				<ProductCard
					name={product.name}
					price={product.price}
					instock={product.instock}
					img={product.img}
					description={product.description}
					handleAddCart={handleAddCart}
					cartItems={cartItems}
				/>
			);
		});
	};
	return (
		<section className='container pt-3'>
			<NavBar />
			<div className='row'>
				<Cards />
			</div>
		</section>
	);
}

export default ProductCardContainer;
