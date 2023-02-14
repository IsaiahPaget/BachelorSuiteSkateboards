import "./ProductCardContainer.scss";
import products from "../../data";
import ProductCard from "../ProductCard/ProductCardComponent";
import NavBar from "../NavBar/NavBarComponent";

function ProductCardContainer() {
	const Cards = () => {
		return products.map((product) => {
			return (
				<ProductCard
					name={product.name}
					price={product.price}
					instock={product.instock}
					img={product.img}
					description={product.description}
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
