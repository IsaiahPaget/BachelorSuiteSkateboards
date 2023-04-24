import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyB6l4F3XVVyTy227ne50YF6ApzEvBRFjuA",
	authDomain: "bachelor-suite.firebaseapp.com",
	projectId: "bachelor-suite",
	storageBucket: "bachelor-suite.appspot.com",
	messagingSenderId: "766691259607",
	appId: "1:766691259607:web:8af7e4337effbc22192c92",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getProductCards() {
	try {
		let products = [];
		const querySnapshot = await getDocs(collection(db, "cards"));
		querySnapshot.forEach((doc) => {
			products.push(doc.data());
		});
		return products;
	} catch (err) {
		console.error(err);
		return;
	}
}

export function getProductData(id, products) {
	try {
		const product = products.filter((p) => p.id === id);

		return product;
	} catch (err) {
		console.log(err);
	}
}

export async function sendEmail(order, email) {
	try {
		await addDoc(collection(db, "mail"), {
			to: email,
			cc: "bachelorsuiteorders@gmail.com",
			message: {
				subject: `Bachelor Suite Skateboards`,
				html: `
					<h3>Thank You For Your Order!</h3>
					<div>
					${order
					.map(
						(product) => `${product.name} $${product.price} x ${product.quantity}<br/>`
					)
					.join("")}
					</div>
					<p>I will be in touch about payment and shipping!</p>
			  `,
			},
		});
	} catch (error) {
		console.error(error);
	}
}
