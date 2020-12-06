let initialState = [];

export default function employeeReducer(state=initialState, action) {
    switch (action.type) {
        case "GET_EMPLOYEES":
            return state
        case "ADD_EMPLOYEE":
            return [...state, action.payload]
        case "DELETE_EMPLOYEE":
            return state.filter(employee => ( employee.id !== action.payload ))
        case "UPDATE_EMPLOYEE":
            state = state.filter(employee => ( employee.id !== action.payload.id ))
            return [...state, action.payload.data]
        default:
            return state
    }
}