import React from 'react'
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import EditTodo from './contents/EditTodo'
import { useState } from 'react'
import Dashboard from './contents/Dashboard'
import AddTodo from './contents/AddTodo'

function App() {
  let [data, setData] = useState([])

  return <>
    <BrowserRouter>
    <AddTodo data={data} setData={setData}/>

      
      <Routes>
        <Route path="/dashboard" element={<Dashboard data={data} setData={setData}/>}/>
        <Route path="/edit-todo/:id" element={<EditTodo data={data} setData={setData}/>}/>
        <Route path="*" element={<Navigate to='/dashboard'/>}/>
    </Routes>
      
      
    </BrowserRouter>
  </>
}

export default App