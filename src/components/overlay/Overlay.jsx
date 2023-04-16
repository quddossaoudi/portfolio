import React, {useEffect, useState} from 'react'
import "./Overlay.css"
import ClipLoader from "react-spinners/ClipLoader";


const Overlay = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() =>{
      setLoading(true)
      setTimeout(() =>{
        setLoading(false)
      }, 8000)
    }, [])
  return (
    <div className='loading'>
        {
            loading ?
            

            <ClipLoader color={"D2691E"} loading={loading}  size={150} />



            :
            <div></div> 
        }

    </div>
    
  )
}

export default Overlay