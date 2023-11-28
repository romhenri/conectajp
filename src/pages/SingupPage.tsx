// import localforage from "localforage";
// import { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import styled from "styled-components";
import Input from "../components/Input.tsx";
import Button from "../components/Button.tsx";
import '../css/pages.css'

const Form = styled.form`
  input:focus {
    outline: 2px solid #5ad38c;
    border: 1px solid transparent;
  }

  label {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px; 
    flex: 1 1 380px;
    font-size: 0.8rem;
    margin: 10px 0px;
  }

  input {
    padding: 10px 10px;
    border-radius: 5px;
    border: 1px solid #0000003a;
    color: var(--c1);
    background-color: var(--bg3);
    font-size: 1rem;
    background-color: rgba(240, 248, 255, 0.55);;
  }

  .error {
    background-color: rgba(255, 0, 0, 0.2);
    padding: 5px 10px;
    border-radius: 5px;
  }
`

const SingupPage = () => {
  const handleSubmit = () => {
    console.log("Submit");
  }

  return (
  <main className='singup-page'>
     <section className='simple'>
        <h2>Cadastre-se</h2>
        <hr />
        <Form onSubmit={handleSubmit}>

          <Input
            label="Nome:"
            type="text"
            placeholder={"Nome de exbição"}
            // value={displayName}
            // onChange={(e) => setDisplayName(e.target.value)}
            // required
            />

          <Input
            label="Email:"
            type="email"
            placeholder={"Email para registro"}
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            // required
            />

          <Input
            label="Senha:"
            type="password"
            placeholder={"Insira sua senha"}
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            // required
            />

          <Input
            label="Confirme sua senha:"
            type="password"
            placeholder="Insira sua senha novamente"
            // value={confirmPassword}
            // onChange={(e) => setConfirmPassword(e.target.value)}
            // required
            />
        
          <label>Use uma senha Forte!</label>

          <div>
            {/* {frontError && <p className='error'>{frontError}</p>} */}
          </div>


            <Button text={"Continuar sem Conta"} bg="transparent"
					className="btn-b"/>
            <Button text={"Cadastrar"}/>
        </Form>
      
      </section>
  </main>)
}

export default SingupPage;