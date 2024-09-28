import { createContext } from "react";
import axios from 'axios'
import { useEffect,useState } from "react";
const content=createContext()

export const UserProvider=({children})=>{
    const [datas, setdata] = useState([])

    
    const getdata = async () => {
        try {
            const chardata = await axios.get("https://66f7a4d7b5d85f31a3432efb.mockapi.io/users")
            setdata(chardata.data)
        }
        catch (error) {
            console.log("Something went wrong")
        }
    }
    useEffect(() => {
        getdata()
    })
    const remove=async(data)=>{
        try {
            await axios.delete(`https://66f7a4d7b5d85f31a3432efb.mockapi.io/users/${data.id}`)
        } catch (error) {
            console.log("Something went wrong")
        }
    }
    useEffect(()=>{
            
        remove()

    })
   

return <content.Provider value={{datas,remove}}>
 {children}
</content.Provider>
}
export default content