import { useContext } from "react"
import { colorContext } from "../App"

const Olchildren = () =>{
    const changeColor = useContext(colorContext)
    return(
        <>  
            <h1 style={{color: `${changeColor}`}}>hello</h1>
        </>
    )
}

export default Olchildren