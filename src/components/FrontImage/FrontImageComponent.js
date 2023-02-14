import react from "react";
import "./FrontImageComponent.scss";
import { Link } from "react-router-dom";

function FrontImage() {
	return (
		<div className="container d-flex align-items-center text-center rounded" style={{height: '100vh' }}>
			<Link to='/products'>
				<img className='image shadow' src='/intro.png' />
			</Link>
		</div>
	);
}

export default FrontImage;
