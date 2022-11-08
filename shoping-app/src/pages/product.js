import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Row } from "reactstrap";
import { buyProduct } from "../acction/cartAction.js";
import { product } from "../db.js"

const Product = () => {
    console.log(product);

    const dispatch = useDispatch()

    return (
        <div className="container mt-5">
        <Container>
            <Row>
                {product && product.map((item, index)=>{
                    return(
                        <Col className="mb-4" key={index}>
                                <Card style={{ width: "18rem"}}>
                                <img alt="Sample" src="https://picsum.photos/300/200" />
                                <CardBody>
                                    <CardTitle tag="h5">{item.name}</CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                                    {item.price}
                                    </CardSubtitle>
                                    <CardText>
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card‘s content.
                                    </CardText>
                                    <Button onClick={() => dispatch(buyProduct(item))}>Button</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>
        </div>
    );
};

export default Product;
