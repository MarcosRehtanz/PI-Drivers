
const initialState = {
    allDrivers: [],
    filterDrivers: [],
    filters: [],
    allTeams: [],
}

export const reducers =  (state = initialState, action) => {

    switch (action.type) {
        case 'GET_TEAMS':
            return {
                ...state,
                allTeams: action.payload,
            }
        case 'GET_ALL_DRIVERS':
            return {
                ...state,
                allDrivers: action.payload,
                filterDrivers: action.payload,
                filters: [],
            }
        case 'ADD_DRIVER':
            return {
                ...state,
                allDrivers: [...state.allDrivers, action.payload],
                filterDrivers: [...state.allDrivers, action.payload],
                filters: []
            }
        case 'FILTER':
            console.log(action.payload);
            return {
                ...state,
                filterDrivers: action.payload==='*' ? [...state.allDrivers] : [...state.allDrivers].filter(driver => {
                    //action.payload);
                    return driver.teams.some(team =>{
                        return team.name === action.payload
                        })
                }),
                filter: action.payload
            }
        case 'ORDER':
            const SortArray = (x, y) => {

                return (action.payload[1] === 'a')
                ? x[action.payload[0]].localeCompare(y[action.payload[0]])
                : y[action.payload[0]].localeCompare(x[action.payload[0]])
            }
            return {
                ...state,
                filterDrivers: [...state.filterDrivers].sort(SortArray)
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
