let initialState = [];

export default function dealReducer(state=initialState, action) {
    switch (action.type) {
        case "GET_DEALS":
            return state
        case "ADD_DEAL":
            return [...state, action.payload]
        case "DELETE_DEAL":
            return state.filter(deal => ( deal.id !== action.payload ))
        case "UPDATE_DEAL":
            state = state.filter(deal => ( deal.id !== action.payload.id ))
            return [...state, action.payload.data]
        default:
            return state
    }
}