import React,  { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


  

function Register() {

    const [values , setValues] = useState({
        username:"", 
        email:"" ,
        password:"",
        confirmPassword:"" 

    })

    const handleSubmit = (event)=>{
        event.preventDefault()
        alert("form")
    }

    const handleValidation = () =>{
        const {username , password , confirmPassword , email} = values;
        
    }

    const handleChange = (event) =>{
        setValues({...values , [event.target.name]:event.target.value})
    }

  return (
    <>
        <FormContainer>
            <form onSubmit={(event) =>handleSubmit(event)}>
                <div className="brand">
                    <img src='' alt="Logo" />
                    <h1>Slacky</h1>
                </div>
                <input type="text" placeholder='Usuário' name='username' onChange={e=>handleChange(e)} />
                <input type="email" placeholder='E-mail' name='email' onChange={e=>handleChange(e)} />
                <input type="password" placeholder='Senha' name='password' onChange={e=>handleChange(e)} />
                <input type="password" placeholder='Confirme a senha' name='confirmPassword' onChange={e=>handleChange(e)} />
                <button type='submit'>Criar usuário</button>
                <span>Já possui uma conta ? <Link to='/login'>Login</Link></span>
            </form>
        </FormContainer>
    </>
  )
}

const FormContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    background-color: #131324;
    .brand{
        display:  flex;
        align-items:  center;
        gap: 1rem;
        jsutify-content: center;
        .img{
            heigh: 5rem
        }
        h1{
            color: white;
            text-transform: uppercase;
        }
    }
    form{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        background-color: #00000076;
        border-radius: 2rem;
        padding: 3rem 5rem;
        input{
            background-color: transparent;
            padding: 1rem;
            color: white;
            border: 0.1rem solid #4e0eff;
            border-radius: 0.4rem;
            width: 100%;
            font-size: 1rem;
            &:focus {
                border: 0.1rem solid #997af0;
                outline: none;
            }
        }
        span{
            color: white;
            a{
                color: #4e0eff;
                text-decoration: none;
                font-weight: bold;
            }
        }
        button{
            background-color: #997af0;
            color: white;
            padding: 1rem 2rem;
            border: none;
            font-weight: bold;
            cursor: pointer;
            border-radius: 0.4rem;
            font-size: 1rem;
            text-transform: uppercase;
            transition: 0.3s ease-in-out;
            &:hover{
                background-color: #4e0eff;

            }
        }

    }



`;

export default Register