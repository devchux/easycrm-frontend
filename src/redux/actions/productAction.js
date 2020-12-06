export const getProducts = () => {
    return {
        type: "GET_PRODUCTS"
    }
}

export const addProduct = data => {
    return {
        type: "ADD_PRODUCT",
        payload: data
    }
}

export const deleteProduct = (id) => {
    return {
        type: "DELETE_PRODUCT",
        payload: id
    }
}

export const updateProduct = (id, data) => {
    return {
        type: "UPDATE_PRODUCT",
        payload: {id, data}
    }
}
