import { useState } from 'react'
import emailjs from '@emailjs/browser'
import styled from 'styled-components'
import Page from './Page'

const Form = styled.form`
  margin-top: 10px;
`

const InputText = styled.input`
  padding: 10px;
  width: 90%;
  border-radius: 10px;
  margin: 5px 0px;
  border: none;
  background-color: rgba(240, 248, 255, 0.85);

  &:focus {
    outline: 1px solid #0000004e;
  }
`
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
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e: any) {
    e.preventDefault()

    if (name === '' || email === '' || message === '') {
      alert("Preencha todos os campos!")
      return
    }

    const serviceID = "service_ka16jud"; // OK
    const templateID = "template_qujdi5p"; // OK
    const templateParams = {
      from_name: name + ' - ' + email,
      message: message,
    }
    const publicKey = "hDi6FIb-8wMtr7zuy"; // OK

    emailjs.send(serviceID, templateID, templateParams, publicKey)
    .then((response) => {
      alert("Sugestão enviada com sucesso!")
      console.log(`Email enviado com status ${response.status}!`);
      setName('')
      setEmail('')
      setMessage('')
    }, (err) => {
      console.log(err);
    })
  }

  return (
    <Page title='Sugestões'>
      <p>Prezamos pela qualidade e valorizamos demais a opinião de cada usuário, então estamos abertos para suas ideias!</p>
      <p>Envie suas sugestões para atualizações futuras do ConectaJP:</p>

      <Form className="form" onSubmit={sendEmail}>
        <InputText 
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        
        <InputText
          className="input"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <TextArea
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <Button className="button" type="submit" value="Enviar" />
      </Form>
    </Page>
  )
}

export default SuggestionsPage