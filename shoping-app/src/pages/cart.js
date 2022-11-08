import { useSelector } from "react-redux";
import { Button, Table } from "reactstrap"

const Cart = () => {

    const cart = useSelector((state) => state)
    console.log(cart);

    return(
        <div className="container">
            <Table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Price</th>
                    <th>Remove</th>
                </tr>
                </thead>
                <tbody>
                    { cart.cartArr.length > 0 && cart.cartArr.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <th scope="row">{index}</th>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td><Button>remove</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default Cart