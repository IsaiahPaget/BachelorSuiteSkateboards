import "./FrontImageComponent.scss";

function FrontImage(props) {
	return (
		<div
			id='font_image'
			className='image-container'
			onClick={props.handleFrontImage}
		>
			<img className='image' src='/intro.png' />
		</div>
	);
}

export default FrontImage;
