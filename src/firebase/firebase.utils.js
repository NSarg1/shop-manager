import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyBhMkxOIB_uh4DE8-Inxsm6VlYN-46LCgA",
	authDomain: "ns-shopify.firebaseapp.com",
	databaseURL: "https://ns-shopify.firebaseio.com",
	projectId: "ns-shopify",
	storageBucket: "ns-shopify.appspot.com",
	messagingSenderId: "449592229212",
	appId: "1:449592229212:web:64b454d4706a4658ad1599",
	measurementId: "G-Z8CJEP07TY",
};
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userInfoRef = firestore.doc(`users/${userAuth.uid}/userInfo/${userAuth.email}`);

	const snapShot = await userInfoRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userInfoRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log("error creating user", error.message);
		}
	}

	return userInfoRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
