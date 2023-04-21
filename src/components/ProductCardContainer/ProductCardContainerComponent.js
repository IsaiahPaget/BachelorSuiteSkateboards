import "./ProductCardContainer.scss";
import ProductCard from "../ProductCard/ProductCardComponent";
import FrontImage from "../FrontImage/FrontImageComponent";
import FooterComponent from "../FooterComponent/FooterComponent";

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
			{props.titleImageVisible ? (
				<FrontImage handleFrontImage={props.handleFrontImage} />
			) : null}
			<div className='row'>
				<Cards />
			</div>
		</section>
	);
}

export default ProductCardContainer;
