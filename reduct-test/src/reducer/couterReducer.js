const initalState = { count: 0 }
const couterReducer = (state = initalState, action) => {
    switch (action.type){
        case "giảm":
            return{
                ...state,
                count: state.count - 1,
            };
        case "tăng":
            return{
                ...state,
                count: state.count + 1,
            };
        default:
            return state
    }
}

export default couterReducer