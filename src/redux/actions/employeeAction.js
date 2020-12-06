export const getEmployees = () => {
    return {
        type: "GET_EMPLOYEES"
    }
}

export const addEmployee = data => {
    return {
        type: "ADD_EMPLOYEE",
        payload: data
    }
}

export const deleteEmployee = (id) => {
    return {
        type: "DELETE_EMPLOYEE",
        payload: id
    }
}

export const updateEmployee = (id, data) => {
    return {
        type: "UPDATE_EMPLOYEE",
        payload: {id, data}
    }
}
