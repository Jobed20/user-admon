import axios from 'axios'
import React, { useEffect } from 'react'
import './App.css'
import UserList from './Components/UserList'
import { useState } from 'react'
import UserForm from './Components/UserForm'
import { useForm } from 'react-hook-form'

const URL = 'https://users-crud1.herokuapp.com/users/'

function App() {
  const { register, handleSubmit, reset,} = useForm();
  const [users, setusers] = useState()
  const [isShowForm, setisShowForm] = useState(false)
  const [objectUpdate, setobjectUpdate] = useState()
  
  // GET
  const getUsers = () => {
    axios.get(URL)
      .then(({ data }) => setusers(data))
      .catch(error => console.log(error))
  }
  useEffect(() => {
    getUsers()
  }, [])

  // POST 
  const createnewUser = newUser =>{  
    axios.post(URL, newUser)
    .then(res =>{
      console.log(res.data)
      getUsers()
    })
      .catch(error => console.log(error))
  }

  // DELETE
  const deleteCard = id =>{
    axios.delete(`${URL}${id}/`)
    .then(res =>console.log(res.data))
    .catch(error => console.log(error))
    .finally(()=>getUsers())
  }

  // EDIT
   const updateUserById = (id, userUpdate) =>{
    axios.patch(`${URL}${id}/`, userUpdate)
    .then(res =>{
      console.log(res.data)
      getUsers()
      setobjectUpdate()
      setisShowForm(false)
    })
    .catch(error => console.log(error))
    
  }
 
  const showForm = () => {
    const obj ={
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    birthday:"",
  }
  reset(obj)
    setisShowForm(!isShowForm)
  }

  return (
    <div className="App">
      <h1 className='title'>User Administrator</h1>
      <div>
      <button  className='form-btn' onClick={showForm}>{isShowForm ? "Hide Form" :"Add New User"}</button>
      </div>
      <div>
    {
    isShowForm && <UserForm
    createnewUser={createnewUser}
     updateUserById ={updateUserById}
      objectUpdate={objectUpdate}
      handleSubmit={handleSubmit}
      reset={reset}
      register={register}/> 
    }
    </div>  
      <div className='container'>
        {
          users?.map(user=>(
            <UserList key={user.id}
            user={user}
            deleteCard={deleteCard}
            setobjectUpdate={setobjectUpdate}
            setisShowForm={setisShowForm}
            reset={reset}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
