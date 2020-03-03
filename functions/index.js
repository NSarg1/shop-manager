const functions = require("firebase-functions");

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require("firebase-admin");
admin.initializeApp();

exports.test = functions.firestore
	.document("data/codics/shop/{itemId}")
	.onUpdate((change, context) => {
		const incomingValue = { ...change.after.data() };
		const previousValue = { ...change.before.data() };

		if (incomingValue.action !== "buy") {
			return;
		}

		const remainedQuantity = previousValue.remainedQuantity - incomingValue.quantity;

		return change.after.ref.set(
			{
				action: "",
				remainedQuantity: remainedQuantity,
			},
			{ merge: true }
		);
	});
