import axios from 'axios'


export const getAllDrivers =  () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('http://localhost:3001/drivers')
            dispatch({
                type: 'GET_ALL_DRIVERS',
                payload: data
            })
        } catch (error) {
            dispatch({
                type: 'GET_ALL_DRIVERS',
                payload: []
            })
            console.log(error.message);
        }
    }
}