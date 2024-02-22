import React,  { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link , useNavigate} from 'react-router-dom'
import {ToastContainer , toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import axios from "axios"
import { registerRoute } from '../utils/APIroutes'
import backgroundImage from '../assets/background.jpg'

  

function Register() {
    const navigate = useNavigate();
    const [values , setValues] = useState({
        username:"", 
        email:"" ,
        password:"",
        confirmPassword:"" 

    })

    const toastOptions = {
        draggable: true , 
        pauseOnHover: true , 
        autoClose: 3000, 
        position: "bottom-right",
        theme: "dark"

    }
    const handleSubmit = async (event)=>{
        event.preventDefault()
        if(handleValidation()){
            console.log("in validation" , registerRoute)
            const {
                password ,
                username ,
                email
            } = values;
             
            const {data} = await axios.post(registerRoute, {
                username, 
                email,
                password
            });
            if(data.status===false){

                toast.error(data.msg , toastOptions)
            }
            if(data.status===true) {
                localStorage.setItem('chat-app-user' , JSON.stringify(data.user))
                navigate("/");
            }
            
        };
    }

    
    

    const handleValidation = () =>{
        const {username , password , confirmPassword , email} = values;
        if(password !== confirmPassword) {
            toast.error("A confirmação de senha e a senha devem ser iguais.",
            toastOptions    
        );
            return false;
        }else if (username.length< 3){
            toast.error("Nome de usuário deve ser maior do que 3 caracteres.", toastOptions);
            return false;
        }else if (password.length < 6){
            toast.error("Sua senha tem que conter pelo menos 6 caracteres" , toastOptions);
            return false;
        } else if (email ===""){
            toast.error("Preencha todos os campos.", toastOptions);
            return false;
        }else{
            toast.success("Usuário criado com sucesso!" , toastOptions);
            return true;
        }
        
    }

    const handleChange = (event) =>{
        setValues({...values , [event.target.name]:event.target.value})
    }

  return (
    <>
    <Header>
      <div className="brand">
        <h1>
          slacky
        </h1>
      </div>
    </Header>
        <FormContainer>
            <form onSubmit={(event) =>handleSubmit(event)}>
                <div className="formTitle">
                    <h1>Cadastre-se</h1>
                </div>
                <input type="text" placeholder='Usuário' name='username' onChange={e=>handleChange(e)} />
                <input type="email" placeholder='E-mail' name='email' onChange={e=>handleChange(e)} />
                <input type="password" placeholder='Senha' name='password' onChange={e=>handleChange(e)} />
                <input type="password" placeholder='Confirme a senha' name='confirmPassword' onChange={e=>handleChange(e)} />
                <button type='submit'>Criar usuário</button>
                <span>Já possui uma conta ? <Link to='/login'>Entrar</Link></span>
            </form>
        </FormContainer>
        <ToastContainer/>
    </>
  )
}


const Header =  styled.header`
  width: 100vw;
  height: 7vh;
  background-color: #20203d;
  justify-content: center;
  align-items: center;
  display: flex;
  .brand{
    h1{
      color: white;
      text-transform: uppercase; 
      cursor: pointer;
  }

}
`

const FormContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    background-image: url(${backgroundImage}); 
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat; 
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    padding: 2rem; 
    .formTitle{
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
            cursor: pointer;
            
        }
        h1:hover{
        transform: scale(1.1);
        background-position: -60px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
        }

    }
    form{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        background-color: #00000076;
        border-radius: 2rem;
        padding: 3rem 5rem;
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
        input{
            background-color: transparent;
            padding: 1rem;
            color: white;
            border: 0.2rem solid #20203d;
            border-radius: 0.4rem;
            width: 100%;
            font-size: 1rem;
            &:focus {
                border: 0.2rem solid #997af0;
                outline: none;
            }
        }
        span{
            color: white;
            a{
                color: #997af0;
                text-decoration: none;
                font-weight: bold;
            }
            a:hover{
                color: #20203d
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
                background-color: #20203d;

            }
        }

    }



`;

export default Register;