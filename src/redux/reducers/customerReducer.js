let initialState = [];

export default function employeeReducer(state=initialState, action) {
    switch (action.type) {
        case "GET_CUSTOMERS":
            return state
        case "ADD_CUSTOMER":
            return [...state, action.payload]
        case "DELETE_CUSTOMER":
            return state.filter(customer => ( customer.id !== action.payload ))
        case "UPDATE_CUSTOMER":
            state = state.filter(customer => ( customer.id !== action.payload.id ))
            return [...state, action.payload.data]
        default:
            return state
    }
}