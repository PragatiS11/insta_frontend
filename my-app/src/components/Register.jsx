import React, { useState } from 'react'

const Register = () => {
    const [name , setName ] = useState("")
    const [email , setEmail ] = useState("")
    const [password , setPassword ] = useState("")
    const [age, setAge ] = useState("")
    const [city , setCity ] = useState("")
    const [gender , setGender ] = useState("")
    
    

  return (
   <form>
     <input type="text"  placeholder='name' value={name} onChange={(e)=> setName(e.target.value)}/>
     <input type="email"  placeholder='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
     <input type="text"  placeholder='gender' value={gender} onChange={(e)=> setGender(e.target.value)}/>
     <input type="password" placeholder='password'  value={password} onChange={(e)=> setPassword(e.target.value)}/>
     <input type="text"  placeholder='city' value={city} onChange={(e)=> setCity(e.target.value)}/>
     <input type="number"  placeholder='age' value={age} onChange={(e)=> setAge(e.target.value)}/>
      <button>Register</button>
   </form>
  )
}

export default Register
