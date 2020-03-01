import { firestore, storage } from "./firebase.utils";



export const storageRef = storage.ref();

export const dataRef = firestore.collection("data/codics/shop");

export const picPathRef = (shopItem) => `codics/shop/${shopItem.category}/${shopItem.id}.jpg`;
