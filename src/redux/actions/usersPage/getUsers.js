import axios from "axios";

const getUsers = () => {
    return async dispatch => {
        dispatch({type: 'LOADER'})
        try {
            let {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
            let {data: photos} = await axios.get('https://jsonplaceholder.typicode.com/photos')
            let users = [...data]
            users.forEach(user => {
                photos.forEach(photo => {
                    if (user.id === photo.id) {
                        user.avatar = photo.url
                    }
                })
            })
            dispatch({type: 'GET_USERS_ERROR', error: false})
            dispatch({type: 'GET_USERS', users})
        } catch (e) {
            console.log(e)
            dispatch({type: 'GET_USERS_ERROR', error: true})
        } finally {
            dispatch({type: 'LOADER'})
        }

    }

}
export default getUsers