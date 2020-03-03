import ShopActionTypes from "./shop.types";

const { SET_DATA } = ShopActionTypes;

export const addData = (data) => ({
	type: SET_DATA,
	payload: data,
});
