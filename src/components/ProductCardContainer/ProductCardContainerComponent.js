import "./ProductCardContainer.scss";
import ProductCard from "../ProductCard/ProductCardComponent";

function ProductCardContainer(props) {
	const Cards = () => {
		return props.products.map((product) => {
			return (
				<ProductCard
					key={product.id}
					product={product}
					handleAddCart={props.handleAddCart}
				/>
			);
		});
	};
	return (
		<section className='container'>
			<div className='row'>
				<Cards />
			</div>
		</section>
	);
}

export default ProductCardContainer;
