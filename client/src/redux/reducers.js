
const initialState = {
    allDrivers: [],
    filterDrivers: [],
    filters: []
}

export const reducers = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_ALL_DRIVERS':
            return {
                ...state,
                allDrivers: action.payload, 
                filterDrivers: action.payload,
                filters: []
            }
        case 'FILTER':
            return {
                ...state,
                filterDrivers: state.allDrivers.filter(driver => driver == action.payload)
            }
        default:
            return {
                ...state
            }
    }

}
