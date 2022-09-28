export const carDetailing = (carNameForDetails) => {
    return (dispatch) => {
        dispatch({
            type:'getCarPrice',
            payload:carNameForDetails
        })
    }
}