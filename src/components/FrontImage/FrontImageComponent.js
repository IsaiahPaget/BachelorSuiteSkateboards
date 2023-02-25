import react from "react";
import "./FrontImageComponent.scss";

function FrontImage(props) {
	return (
		<div onClick={() => {
			props.setFrontPage(false)
		}} className='image-container'>
			<img className='image' src='/intro.png' />
		</div>
	);
}

export default FrontImage;
