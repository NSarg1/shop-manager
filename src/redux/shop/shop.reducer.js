import ShopActionTypes from "./shop.types";

const { SET_DATA } = ShopActionTypes;

const INITIAL_STATE = {
	shopItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_DATA:
			return {
				...state,
				shopItems: action.payload,
			};

		default:
			return state;
	}
};

export default cartReducer;
