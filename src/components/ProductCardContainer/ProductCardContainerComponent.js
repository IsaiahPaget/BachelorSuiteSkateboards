import "./ProductCardContainer.scss";
import products from "../../data";
import ProductCard from "../ProductCard/ProductCardComponent";

function ProductCardContainer(props) {


	const Cards = () => {
		return products.map((product) => {
			return (
				<ProductCard
					name={product.name}
					price={product.price}
					instock={product.instock}
					img={product.img}
					description={product.description}
					handleAddCart={props.handleAddCart}
				/>
			);
		});
	};
	return (
		<section className='container pt-3'>
			<div className='row'>
				<Cards />
			</div>
		</section>
	);
}

export default ProductCardContainer;
