let initialState = [];

export default function productReducer(state=initialState, action) {
    switch (action.type) {
        case "GET_PRODUCTS":
            return state
        case "ADD_PRODUCT":
            return [...state, action.payload]
        case "DELETE_PRODUCT":
            return state.filter(product => ( product.id !== action.payload ))
        case "UPDATE_PRODUCT":
            state = state.filter(product => ( product.id !== action.payload.id ))
            return [...state, action.payload.data]
        default:
            return state
    }
}