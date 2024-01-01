import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import localforage from 'localforage';
import styled from 'styled-components';
import Page from './Page';
import ModalManager from '../components/ModalManager';

const Form = styled.form`
  margin-top: 10px;

  & {
    .error {
    background-color: rgba(255, 0, 0, 0.10);
    border: 2px solid rgba(255, 0, 0, 0.2);
    padding: 8px !important;
    border-radius: 5px;
    margin: 10px 10px;
    }
    .sucess {
    background-color: rgba(19, 184, 27, 0.1);
    border: 2px solid rgba(43, 175, 3, 0.2);
    padding: 8px !important;
    border-radius: 5px;
    margin: 10px 10px;
    }
  }
`
// const InputText = styled.input`
//   padding: 10px;
//   width: 90%;
//   border-radius: 10px;
//   margin: 5px 0px;
//   border: none;
//   background-color: rgba(240, 248, 255, 0.85);

//   &:focus {
//     outline: 1px solid #0000004e;
//   }
// `
const TextArea = styled.textarea`
  padding: 10px;
  width: 90%;
  border-radius: 10px;
  margin: 5px 0px;
  border: none;
  min-height: 200px;
  background-color: rgba(240, 248, 255, 0.85);
  resize: vertical;

  &:focus {
    outline: 1px solid #0000004e;
  }
`
const Button = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  text-transform: uppercase;
  font-family: 'Maven Pro', sans-serif;
  font-weight: 500;
  cursor: pointer;
  background-color:  #74e2a2;
  color: #0000009a;
  width: 95%;

  &:active {
    transition: .3s;
    scale: .97;
  }
`

const SuggestionsPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Front Errors States
  const [frontError, setFrontError] = useState<string | null>(null);
  const [frontSucess, setFrontSucess] = useState<string | null>(null);

  // Modal States
  const [isSangeup, setIsSangeup] = useState(true);
  const [isModalSingupIsOpen, setIsModalSingupIsOpen] = useState(true);
  const closeModalSingup = () => setIsModalSingupIsOpen(false);

  function sendEmail(e: any) {
    e.preventDefault()

    if (name === '' || email === '' || message === '') {
      setFrontError("Preencha todos os campos!")
      return
    }

    const serviceID = "service_ka16jud"; // OK
    const templateID = "template_qujdi5p"; // OK
    const templateParams = {
      from_name: name,
      message: `[${name} - ${email} (${new Date()})]
      
      ${message}
      `,
    }
    const publicKey = "hDi6FIb-8wMtr7zuy"; // OK

    emailjs.send(serviceID, templateID, templateParams, publicKey)
    .then((response) => {
      setFrontSucess("Sugestão enviada com sucesso!");
      console.log(`Email enviado com status ${response.status}!`);
      setName('');
      setEmail('');
      setMessage('');
    }, (err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    localforage.getItem('name', function (err, value: any) {
      if (value === "") setIsSangeup(false);
      setName(value);
    })
    localforage.getItem('email', function (err, value: any) {
      if (value === "") setIsSangeup(false);
      setEmail(value);
    })
  })

  return (
    <>
      <Page title='Sugestões'>
        <p>Prezamos pela qualidade e valorizamos demais a opinião de cada usuário, então estamos abertos para suas ideias!</p>
        <p>Envie suas sugestões para atualizações futuras do ConectaJP:</p>

        <Form className="form" onSubmit={sendEmail}>
          {/* <InputText 
            className="input"
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          /> */}
          
          {/* <InputText
            className="input"
            type="text"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          /> */}

          <TextArea
            className="textarea"
            placeholder="Digite sua mensagem..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          <div>
            {frontError && !frontSucess && (
            <p className='error'>{frontError}</p>
            )}
          </div>
          <div>
            {frontSucess && (
            <p className='sucess'>{frontSucess}</p>
            )}
          </div>

          <Button className="button" type="submit" value="Enviar" />
        </Form>
      </Page>

      {
        !isSangeup && (
          <ModalManager
            type="Singup"
            isModalOpen={isModalSingupIsOpen}
            closeModal={closeModalSingup} 
          />
        )
      }
    </>
  )
}

export default SuggestionsPage