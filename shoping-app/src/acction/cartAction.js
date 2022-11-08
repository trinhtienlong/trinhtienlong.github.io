import { BUY_PRODUCT } from "./actionType"

export const buyProduct = (product) =>{
    return{
        type : BUY_PRODUCT,
        payload : product
    }
}