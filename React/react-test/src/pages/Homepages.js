import axios from "axios"
import { useEffect, useState } from "react"
import  Paginate  from "../components/Pagination"
import { Link } from "react-router-dom"

function Homepages(){
    const  [api , setApi] = useState('')
    const [sumProduct , setsumProduct] = useState('')
    const limit = 8
    const [page , setPage] = useState('1')
    const [isLoading, setisLoading] = useState(false)

    useEffect(()=>{
        setisLoading(true)
        try {
            axios({
                method: "get",
                url: "http://localhost:3000/product",
                params : {
                    _page : page,
                    _limit : limit
                }
            }).then((response)=>{
                console.log(response);
                setApi(response.data)
                setsumProduct(response.headers.get('x-total-count'));
                setisLoading(false)
            })
        } catch (error) {
            console.log(error);
        }
    }, [page])

    console.log(api);

    return(
        <div className="">
            <div className="flex">
                {!isLoading && api && api.map((item, index)=>{
                    return(
                        <Link to={`products/${item.id}`} key={index}>
                            <div>
                                <img src={item.image} alt=""></img>
                                <h3>Title: {item.title}</h3>
                            </div>
                        </Link>
                    )
                })}
                {isLoading && 'loading000000'}
            </div>
            <div>
                <Paginate sumProduct={sumProduct} limit={limit} setPages={setPage}/>
            </div>
        </div>
    )
}

export default Homepages