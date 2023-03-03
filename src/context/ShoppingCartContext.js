import { createContext, useState } from "react";
import {
	getProductCards,
	getProductData,
} from "../components/Firebase/Firebase";

export const shoppingCartContext = createContext({
	items: [],
	getProductQuantity: () => {},
	addToCart: () => {},
	removeFromCart: () => {},
	deleteFromCart: () => {},
	getTotalCost: () => {},
});

export function ShoppingCartProvider({ children }) {
	const [cartProducts, setCardProducts] = useState([]);

	function getProductQuantity(id) {
		const quantity = cartProducts.find((p) => p.id === id)?.quantity;

		if (quantity === undefined) {
			return 0;
		}
		return quantity;
	}

	function addToCart(id) {
		const quantity = getProductQuantity(id);
		if (quantity === 0) {
			setCardProducts([
				...cartProducts,
				{
					id: id,
					quantity: 1,
				},
			]);
		} else {
			setCardProducts(
				cartProducts.map((product) => {
					return product.id === id
						? { ...product, quantity: product.quantity + 1 }
						: product;
				})
			);
		}
	}

	function removeFromCart(id) {
		const quantity = getProductQuantity(id);
		if (quantity <= 1) {
			deleteFromCart(id);
		} else {
			setCardProducts(
				cartProducts.map((product) => {
					return product.id === id
						? { ...product, quantity: product.quantity - 1 }
						: product;
				})
			);
		}
	}

	function deleteFromCart(id) {
		setCardProducts((products) => {
			const filteredProducts = products.filter((currProduct) => {
				return currProduct.id !== id;
			});
			return filteredProducts;
		});
	}

	async function getTotalCost() {
		let totalCost = 0;
		const productCards = await getProductCards();
		cartProducts.map((product) => {
			const productData = getProductData(product.id, productCards)[0];
			totalCost += productData.price * product.quantity;
		});
		return totalCost;
	}

	const contextValue = {
		items: cartProducts,
		getProductQuantity,
		addToCart,
		removeFromCart,
		deleteFromCart,
		getTotalCost,
	};
	return (
		<shoppingCartContext.Provider value={contextValue}>
			{children}
		</shoppingCartContext.Provider>
	);
}

export default ShoppingCartProvider;
