import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import Input from "../components/Input.tsx";
import Button from "../components/Button.tsx";
import {saveName, saveUsername, saveEmail} from '../scripts/handleStorage';
import '../css/pages.css';

const SingupSection = styled.section`
  padding-top: 10px;

  & button {
    margin-top: 10px;
    width: 100%;
  }
`

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
    text-align: start;
    /* width: 100%; */
  }

  input {
    padding: 10px 10px;
    border-radius: 5px;
    border: 1px solid #0000003a;
    color: var(--c1);
    background-color: var(--bg3);
    font-size: 1rem;
    background-color: rgba(240, 248, 255, 0.55);
  }

  .error {
    background-color: rgba(255, 0, 0, 0.10);
    border: 2px solid rgba(255, 0, 0, 0.2);
    padding: 8px !important;
    border-radius: 5px;
  }
`

const SingupPage = () => {
  const navigate = useNavigate()

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const [frontError, setFrontError] = useState<string | null>(null);

  const handleSubmit = () => {
    console.log("Submitting...");

    if (username === "" || name === "" || email === "") {
      setFrontError("Preencha todos os Campos!");

      return
    }

    saveName(name);
    saveUsername(username);
    saveEmail(email);
    navigate("..");
  }

  return (
  <main className='singup-page'>
    <header className='page-header'>
      <div></div>
      <h1>Cadastro</h1>
      <div></div>
    </header>

     <SingupSection className='simple'>

        <Form onSubmit={(e) => {
          e.preventDefault();
          handleSubmit;
        }}>
          <Input
            label="Nome:"
            type="text"
            placeholder={"Seu nome e sobrenome"}
            // value={displayName}
            onChange={(e) => {setName(e.target.value) }}
            // required
          />

          <Input
            label="Nome de usuário:"
            type="text"
            placeholder={"Nome de exbição"}
            // value={displayName}
            onChange={(e) => {setUsername(e.target.value) }}
            // required
          />

          <Input
            label="Email:"
            type="email"
            placeholder={"Email para registro"}
            // value={email}
            onChange={(e) => setEmail(e.target.value)}
            // required
          />

          <div>
            {frontError && <p className='error'>{frontError}</p>}
          </div>

            <Button text={"Cadastrar"} onClick={handleSubmit}/>
        </Form>
      
      </SingupSection>
  </main>)
}

export default SingupPage;