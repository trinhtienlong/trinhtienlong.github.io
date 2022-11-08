import { createStore } from "redux";
import couterReducer from "./reducer/couterReducer";

const store = createStore(couterReducer)
export default store