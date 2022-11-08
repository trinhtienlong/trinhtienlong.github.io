import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Card } from "react-bootstrap";

const FormAdress = () => {
    const [dataForm, setDataForm] = useState('')

    const { 
        register, 
        handleSubmit, 
        watch, 
        formState: { errors } 
    } = useForm();

    const onSubmit = data => {
        setDataForm(data)
        console.log(data);
    }

    return (
        <>        
            <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label><><h2>Email address</h2></></Form.Label>
            <Form.Control type="email" placeholder="Enter email" {...register("email" , { required: true })}/>
            {errors.email && (
                <>
                    <h1>This field is required</h1>
                    <br/>
                </>
                )
            }
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label><><h2>Password</h2></></Form.Label>
            <Form.Control type="password" placeholder="Password" {...register("Password" , { required: true })}/>
            {errors.Password && (
                <>
                    <h1>This field is required</h1>
                    <br/>
                </>
                )
            }
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label><><h2>use</h2></></Form.Label>
            <Form.Control type="use" placeholder="Password" {...register("use" , { required: true })}/>
            {errors.use && (
                <>
                    <h1>This field is required</h1>
                    <br/>
                </>
                )
            }
            </Form.Group>

            <Button variant="primary" type="submit">
            Submit
            </Button>
            {
                dataForm && (
                    <>
                        <h1>{dataForm.email}</h1>
                        <h1>{dataForm.Password}</h1>
                    </>
                )
            }
            </Form>

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </>

    )
}



export  default FormAdress