import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AddTodo({ data,setData }) {

  let [name,setName] = useState("")
  let [description, setDescription] = useState("")

  let handleSubmit = () => {
    let newData = [...data];
    newData.push( { name, description});
    setData(newData)
  }

  return <>
    
    <div className='title'>My todo</div>
   
      <Form className='row'>
    <Form.Group className='row'>
    <Form.Control type="text" className='box1 box' placeholder="Title" required:true onChange={(e) => console.log(setName(e.target.value))} />
    <Form.Control type="text" className="box1" placeholder="Description" onChange={(e)=> setDescription(e.target.value)}/>
          <Button onClick={() => handleSubmit()} className='add'>Add Todo</Button>
          </Form.Group>
    </Form>
    
    <div className='sub-title'>My Todos</div>
    <div className='filter'>Filter :</div>
    <select name="" id="" className='select select1'>
      <option value="">All</option>
      <option value="">Completed</option>
      <option value="">Not Completed</option>
    </select>
   
  </>
}

export default AddTodo