export const getDeals = () => {
    return {
        type: "GET_DEALS"
    }
}

export const addDeal = data => {
    return {
        type: "ADD_DEAL",
        payload: data
    }
}

export const deleteDeal = (id) => {
    return {
        type: "DELETE_DEAL",
        payload: id
    }
}

export const updateDeal = (id, data) => {
    return {
        type: "UPDATE_DEAL",
        payload: {id, data}
    }
}
