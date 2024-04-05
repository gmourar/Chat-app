import React, { useState } from 'react';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from 'react-router-dom';
import { loginRoute } from '../utils/APIroutes';
import axios from "axios";
import loginbg from '../assets/loginbg.jpg'

function Login() {
  const navigate = useNavigate(); 
  const [name , setName ] = useState('')
  const [values, setValues] = useState({
    username: "",
    password: ""
  });
  
  
  const toastOptions = {
    draggable: true,
    pauseOnHover: true,
    autoClose: 3000,
    position: "bottom-right",
    theme: "dark"
  };
  
  const handleSubmit = async (event) => {
   
    event.preventDefault();
    const { username, password } = values;
    if (handleValidation()) {
      const { data } = await axios.post(loginRoute, { username, password });
      console.log(data)
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem('chat-app-user', JSON.stringify(data.user));
        navigate("/");
        
      }
    }
  }

  const handleValidation = () => {
    const { username, password } = values;
    if (username.length === "") {
      toast.error("Nome de usuário e senha são obrigatórios.", toastOptions);
      return false;
    } else if (password.length === "") {
      toast.error("Nome de usuário e senha são obrigatórios.", toastOptions);
      return false;
    }
    return true;
    
  }

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    setName(values.username) 
  }



  return (
    <>
      <Header>
        <div className="brand">
          <h1>slacky</h1>
        </div>
      </Header>
      
        <FormContainer>
          <form onSubmit={(event) => handleSubmit(event)}>
            <div className="formTitle">
              <h1>Login</h1>
            </div>
            <input type='text' placeholder='Nome de usuário' name='username' min={3} onChange={e => handleChange(e)} />
            <input type='password' placeholder='Senha' name='password' onChange={e => handleChange(e)} />
            <button type='submit'>Entrar</button>
            <span>Não possui uma conta ? <Link to='/register'>Cadastre-se</Link></span>
          </form>
        </FormContainer>
      <ToastContainer/>
    </>
  );
}




const Header = styled.header`
  width: 100vw;
  height: 7vh;
  background-color: #131324;
  justify-content: center;
  align-items: center;
  display: flex;
  .brand {
    h1 {
      color: white;
      text-transform: uppercase;
      cursor: pointer;
    }
  }
`;

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  background-image: url(${loginbg}); 
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
  align-items: center;  
  background-color: #0b0b0f;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 2rem;
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #131324;
    border-radius: 2rem;
    padding: 3rem 5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    input {
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
    span {
      color: white;
      a {
        color: #4e0eff;
        text-decoration: none;
        font-weight: bold;
      }
    }
    button {
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
      &:hover {
        background-color: #4e0eff;
      }
    }
    .formTitle {
      h1 {
        color: white;
        cursor: pointer;
      }
    }
  }
`;

export default Login;
