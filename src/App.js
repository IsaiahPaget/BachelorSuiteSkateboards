import NavBar from "./components/NavBar/NavBarComponent";
import ProductCardContainer from "./components/ProductCardContainer/ProductCardContainerComponent.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact/ContactComponent";
import FrontImage from "./components/FrontImage/FrontImageComponent";
import "./App.scss";

const router = createBrowserRouter([
	{
		path: "/",
		element: <FrontImage />,
	},
	{
		path: "/order",
		element: <Contact />,
	},
	{
		path: "/products",
		element: <ProductCardContainer />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
