import axios from "axios";
import icon from './../../../img/avatar.png'

const getUser = id => {
    return async dispatch => {
        dispatch({type: 'LOADER'})
        try {
            if (id === '100') {
                let user = {
                    id: 100,
                    name: 'Maxim Baltak',
                    city: 'Kaliningrad',
                    email: 'maxim23@mail.ru',
                    tele: '8-271-829-11-09',
                    avatar: icon
                }
                let posts = [
                    {
                        userId: 100,
                        id: 9872,
                        body: 'Сегодня защита проекта',
                    }
                ]
                dispatch({type: 'GET_USER', user, posts})
            } else {
                let {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
                let {data: avatar} = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
                let user = {
                    name: data.name,
                    city: data.address.city,
                    email: data.email,
                    tele: data.phone.replace(/.x.*/, ''),
                    avatar: avatar.url
                }
                let {data: posts} = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)

                dispatch({type: 'GET_USER', user, posts})

            }
            dispatch({type:'GET_USER_ERROR',error:false})
        }catch (e){
            console.log(e)
            dispatch({type:'GET_USER_ERROR',error:true})
        }finally {
            dispatch({type: 'LOADER'})
        }
    }
}
export default getUser