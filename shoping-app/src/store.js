import { createStore } from "redux";
import cardReducer from "./reducers/cartReducer";

const store = createStore(cardReducer)

export default store