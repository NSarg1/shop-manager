const functions = require("firebase-functions");

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require("firebase-admin");
admin.initializeApp();

exports.test = functions.firestore
	.document("data/codics/shop/{itemId}")
	.onUpdate((change, context) => {
		const action = { ...change.after.data() };
		const previousValue = { ...change.before.data() };

		if (action.type === "buy") {
			const previousSold = previousValue.sold ? previousValue.sold : 0;
			const previousSoldQuantity = previousValue.soldQuantity
				? previousValue.soldQuantity
				: 0;

			const sold = previousSold + action.quantity * action.price;
			const remainedQuantity = previousValue.remainedQuantity - action.quantity;
			const soldQuantity = previousSoldQuantity + action.quantity;
			return change.after.ref.set(
				{
					sold: sold,
					soldQuantity: soldQuantity,
					type: "",
					remainedQuantity: remainedQuantity,
				},
				{ merge: true }
			);
		}
		return;
	});
