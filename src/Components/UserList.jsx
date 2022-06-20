import React from 'react'

const UserList = ({user, deleteCard, setobjectUpdate, setisShowForm, reset}) => {

  const updateUser =()=>{
    setisShowForm(true)
    const obj ={
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      password: user.password,
      birthday:user.birthday ,
    }
    reset(obj)
    setobjectUpdate(user)
  }
  return (
    <article className='Card'>
      <h2 id='firstAndLastName'>{`${user.first_name} ${user.last_name}`}</h2>
      <p> <span>#</span>{user.id}</p>
      <p><span>email: </span>{user.email}</p>
      <p> <span>Password: </span> {user.password}</p>
      <p> <span>Birthday: </span> {user.birthday}</p>
      <div className='editAndDelete'>
      <button className='updatecard' onClick={updateUser}><i className="fa-solid fa-pen-to-square"></i></button>
      <button className='delete' onClick={()=>deleteCard(user.id)}><i className="fa-solid fa-trash"></i></button>
      </div>
    </article>
  )
}

export default UserList