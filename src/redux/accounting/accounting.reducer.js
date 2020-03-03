import AccountingActionTypes from "./shop.types";

const {  } = AccountingActionTypes;

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
