export const getCustomers = () => {
    return {
        type: "GET_CUSTOMERS"
    }
}

export const addCustomer = data => {
    return {
        type: "ADD_CUSTOMER",
        payload: data
    }
}

export const deleteCustomer = (id) => {
    return {
        type: "DELETE_CUSTOMER",
        payload: id
    }
}

export const updateCustomer = (id, data) => {
    return {
        type: "UPDATE_CUSTOMER",
        payload: {id, data}
    }
}
