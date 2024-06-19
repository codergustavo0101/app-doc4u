import React, { createContext, useState } from 'react'
import api from '../services/api'

export const FilterContext = createContext({})

function FilterProvider({ children }) {

    const [typeTable, setTypeTable] = useState(1)
    const [dataUsers, setDataUsers] = useState([])
    const [animation,setAnimation] = useState(null)


    const filter = async (type, name) => {
        if(type == 1){
            if(name == undefined || name == ""){
                const response = await api.get("client/get/all")
                if(response.status == 404){
                    return false
                }
                setDataUsers(response.data)

                setTimeout(() => {
                    setAnimation(false)
                },[3000])

                return false
            }
        }

        if(type == 2){
            if(name == undefined || name == ""){
                const response = await api.get("provider/get/all")
                if(response.status == 404){
                    return false
                }

                console.log(response.data)
                setDataUsers(response.data)

                
                setTimeout(() => {
                    setAnimation(false)
                },[3000])


                return false

            }
        }

        if(type == 1){
            const response = await api.get(`panel/get/by/client/name/${name}`)
            if(response.status == 404){
                setDataUsers([])
                return false
            }
            setDataUsers(response.data)
            return false
        }


        if(type == 2){
            const response = await api.get(`panel/get/by/provider/name/${name}`)
            if(response.status == 404){
                setDataUsers([])
                return false
            }
            setDataUsers(response.data)
            return false
        }



    }
    


    const get = (type) => {

        setTypeTable(type)

    }


    return (
        <FilterContext.Provider value={{ get, filter, dataUsers,animation, typeTable }}>
            {children}
        </FilterContext.Provider>
    )

}

export default FilterProvider