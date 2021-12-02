import axios from "axios";

const getUsers=()=>{
    return dispatch=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res=>res.data)
            .then(data=>dispatch({type:'GET_USERS',data}))
            .catch(()=>console.log('Ошибка'))
    }
}
export default getUsers