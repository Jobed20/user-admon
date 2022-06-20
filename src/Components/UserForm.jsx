import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const Form = ({createnewUser, objectUpdate, handleSubmit, register, reset, updateUserById }) => {
  
const defaultValuesForm ={
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    birthday:"",
  }

  const submit =data=>{
    if(objectUpdate?.id !== undefined){
      updateUserById(objectUpdate.id, data)
    }else{
      createnewUser (data);
    }
    reset(defaultValuesForm);
  }
  
  return (
    <form onSubmit={handleSubmit(submit)} className="form">
      
        <div>
          <label  className='form-items' htmlFor="firstName"><i className="fa-solid fa-user"></i> First Name: </label>
          <input type="text" id='firstName'  {...register("first_name")} />
          <label   className='form-items' id='lastn' htmlFor="lastName">Last Name: </label>
          <input type="text" id='lastName'  {...register("last_name")}/>
        </div>
        <div>
          <label className='form-items' htmlFor="email"><i className="fa-solid fa-envelope"></i> Email address:</label>
          <input type="text" id='email'  {...register("email")}/>
        </div>
        <div>
          <label  className='form-items' htmlFor="password"><i className="fa-solid fa-lock"></i> Password: </label>
          <input type="text" id='password' {...register("password")} />
        </div>
        <div>
          <label   className='form-items' htmlFor="birthday"><i className="fa-solid fa-cake-candles"></i> Birthday: </label>
          <input type="date" id='birthday'  {...register("birthday")}/>
        </div>
        <button id='submit'>Upload </button>
      </form>
  )
}

export default Form