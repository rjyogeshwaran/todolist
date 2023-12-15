import React from "react";
import Todo from "./Todo";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

function Dashboard({ data, setData }) {
    let handleDelete = (i) => {
        let newData = [...data];
        newData.splice(i, 1);
        setData(newData);
        console.log(newData);
    };
    let navigate = useNavigate();

    return (
        <>
            <div className="row">
                {data.map((e, i) => {
                    return (
                        <>
                            <Card className="card">
                                <Card.Body key={i}>
                                    <Card.Title>Name: {e.name}</Card.Title>
                                    <Card.Text>Description : {e.description}</Card.Text>
                                    <Card.Text>
                                        Status : <select name="" id="" className="select">
                                            <option value="">Completed</option>
                                            <option value="">Not Completed</option>
                                        </select>
                                        

                                    </Card.Text>

                                    <Button
                                        variant="primary"
                                        className="edit"
                                        onClick={() => navigate(`/edit-todo/${i}`)}
                                    >
                                        Edit
                                    </Button>
                                    &nbsp;
                                    <Button
                                        variant="danger"
                                        className="btn1"
                                        onClick={() => {
                                            handleDelete(i);
                                        }}
                                    >
                                        Delete
                                    </Button>
                                </Card.Body>
                            </Card>
                        </>
                    );
                })}
            </div>
        </>
    );
}

export default Dashboard;
