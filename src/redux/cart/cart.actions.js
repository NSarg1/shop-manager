import CartActionTypes from "./cart.types";

const {
	TOGGLE_CART_HIDDEN,
	ADD_ITEM,
	REMOVE_ITEM,
	CLEAR_ITEM_FROM_CART,
	CLEAR_ALL_ITEMS_FROM_CART,
} = CartActionTypes;

export const toggleCartHidden = (boolean) => ({
	type: TOGGLE_CART_HIDDEN,
	payload: boolean,
});

export const addItem = (item) => ({
	type: ADD_ITEM,
	payload: item,
});

export const removeItem = (item) => ({
	type: REMOVE_ITEM,
	payload: item,
});

export const clearItemFromCart = (item) => ({
	type: CLEAR_ITEM_FROM_CART,
	payload: item,
});

export const clearAllItemsFromCart = () => ({
	type: CLEAR_ALL_ITEMS_FROM_CART,
});
