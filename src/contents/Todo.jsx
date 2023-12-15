import React from 'react'
import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Todo({ name, description, data, setData }) {

    let navigate = useNavigate()
    
    

    return <>
       
            < Card style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                </Card.Text>
                <Button variant='primary' onClick={()=>navigate(`/edit-todo/${i}`)}>Edit</Button>
                &nbsp;
                <Button variant='danger' onClick={()=>{handleDelete(i)}}>Delete</Button>

                </Card.Body>
            </Card >
    </>
}

export default Todo