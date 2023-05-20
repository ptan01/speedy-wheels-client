import { useEffect } from "react"

const useTitle = (title) =>{
 useEffect(()=>{
    document.title = `Speedy Wheels -${title}`
 },[])
}


export default useTitle ;