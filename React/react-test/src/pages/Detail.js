import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function Detail(){
    const param = useParams()
    console.log(param);
    const [isLoading, setisLoading] = useState(false)
    const [Detail, setDetail] = useState("")

    useEffect(()=>{
        console.log('1');
        try {
            axios({
                method: "get",
                url: `http://localhost:3000/product/${param.id}`,
            }).then((response)=>{
                setDetail(response.data)
                setisLoading(true)
            })
        } catch (error) {
            console.log(error);
        }
    },[])

    if(isLoading === false){
        return <h1 className="App">loading.....</h1>
    }
    return(
        <div className="center">
            <h1>{Detail.title}</h1>
            <img src={Detail.image} width="200px" alt=""></img>
            <h2>{Detail.price}</h2>
            <h2>{Detail.rating?.rate}</h2>
        </div>
    )
}

export default Detail