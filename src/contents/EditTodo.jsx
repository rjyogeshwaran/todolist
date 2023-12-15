import React,{useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams, useNavigate } from 'react-router-dom'; 


function EditTodo({ data, setData }) {
  let [name, setName] = useState('');
  let [description, setDescription] = useState('')
  let navigate = useNavigate()
  let params = useParams()

  useEffect(() => {
    if (params.id < data.length) {
      setName(data[params.id].name)
      setDescription(data[params.id].description)
    } else {
      alert("Invalid User" + params.id)
      navigate('/dashboard')
    }
  },[])
  
  const handleEdit = ()=>{
    let newArray = [...data]
    newArray.splice(params.id,1,{
      name,
      description
    })
    setData(newArray)
    navigate('/dashboard')
}
    return <>
      <Form>
    <Form.Group className="mb-3">
    <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Title" value={name} onChange={(e) => console.log(setName(e.target.value))} />
      </Form.Group>
      </Form>
    <br />
    <Form.Control type="text" placeholder="Description" value={description} onChange={(e)=> setDescription(e.target.value)}/>
    <br/> 
    <Button onClick={() => handleEdit()}>Save</Button>
    </>
}

export default EditTodo