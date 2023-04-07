import { useState } from "react"
import validation from "./validation"

const Form = ({login}) =>{

    const [userData, setUserData] = useState({
        email: "",
        password: ""
     })
     const [errors, setErrors] = useState({
        email: "",
        password: ""
     
     })

     const handleChange =(evento) =>{
        setUserData({
            ...userData,
            [evento.target.name] : evento.target.value
        })

        setErrors(validation({
            ...userData,
            [evento.target.name] : evento.target.value

        }))
    }
    const handleSubmit =(evento) =>{
        evento.preventDefault()
        login(userData)
    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" value={userData.email} onChange={handleChange}></input>
            {errors.email && <p>{errors.email} </p>}
            <br />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={userData.password} onChange={handleChange}></input>
            {errors.password && <p>{errors.password} </p>}
            <br />
        <button>Submit</button>

        </form>
    )
}
export default Form