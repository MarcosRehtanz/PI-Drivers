
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
        case 'ADD_DRIVER':
            return {
                ...state,
                allDrivers: [...state.allDrivers, action.payload],
                filterDrivers: [...state.allDrivers, action.payload],
                filters: []
            }
        case 'FILTER':
            return {
                ...state,
                filterDrivers: state.allDrivers.filter(driver => {
                    return driver == action.payload
                }),
                filter: action.payload
            }
        case 'GET_DRIVERS_FOR_NAME':
            return {
                ...state,
                filterDrivers: action.payload,
                filters: []
            }
        default:
            return {
                ...state
            }
    }

}
