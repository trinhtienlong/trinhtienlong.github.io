import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Homepages(){
    const  [api , setApi] = useState('')
    useEffect(()=>{
        try {
            axios({
                method: "get",
                url: 'https://fakestoreapi.com/products',
            }).then((response)=>{
                setApi(response.data)
            })
        } catch (error) {
            console.log(error);
        }
    }, [])

    console.log(api);
    return(
        <div className="flex">
            <div className="scroll">
                {api && api.map((item, index)=>{
                    return(
                        <Link to={`products/${item.id}`} key={index}>
                            <div>
                                <img src={item.image} alt=""></img>
                                <h3>Title: {item.title}</h3>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Homepages