import axios from "axios";

const getUser=id=>{
    return async dispatch=>{

        let {data}=await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        let user={
            name:data.name,
            city:data.address.city,
            email:data.email,
            tele: data.phone.replace(/.x.*/,'')
        }
        let {data:posts}=await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)

        dispatch({type:'GET_USER',user,posts})

    }
}
export default getUser