import axios from 'axios'


export const getAllDrivers = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('http://localhost:3001/drivers')
            dispatch({
                type: 'GET_ALL_DRIVERS',
                payload: data
            })
        } catch (error) {
            dispatch()
        }
    }
}

export const addDriver = (driver) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post('http://localhost:3001/drivers', driver)
            dispatch({
                type: 'ADD_DRIVER',
                payload: data.driver
            })
        } catch (error) {
            dispatch()
        }
    }
}

export const getDriversForName = (name) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/drivers/name?name=${name}`)
            dispatch({
                type: 'GET_DRIVERS_FOR_NAME',
                payload: data
            })
        } catch (error) {
            console.log(error.message);
            dispatch()
        }
    }
}