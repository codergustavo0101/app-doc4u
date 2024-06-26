import { create } from 'apisauce'

const api = create({
    baseURL: 'http://localhost:7777/'
})


api.addAsyncRequestTransform(response => async() =>{
    
    const token = localStorage.getItem('@USER_TOKEN')

    
    if(token){

        response.headers['Authorization']  = `Bearer ${token}`

    }

})

export default api