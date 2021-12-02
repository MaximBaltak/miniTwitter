import axios from "axios";

const getUsers = () => {
    return async dispatch => {
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
        dispatch({type: 'GET_USERS', users})
    }

}
export default getUsers