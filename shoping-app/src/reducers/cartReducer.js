import { BUY_PRODUCT } from "../acction/actionType";

const initialState = {
    cartArr : [],
}

const cardReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case BUY_PRODUCT:{
            const testArr = state.cartArr.find(
                (p) => p.id === action.payload.id
            )
            if(!testArr){
                return{
                    cartArr: [...state.cartArr, action.payload]
                }
            }
        }   

        default:
            return state;
    }
}

export default cardReducer

