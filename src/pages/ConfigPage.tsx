import { useState } from 'react'
import { deleteAllData } from '../scripts/handleStorage'
import styled from 'styled-components'
import Option from '../components/Option'
import Page from './Page'

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

const ConfigPage = () => {
  
  const deleteData = () => {
    if(window.confirm("Confimar?")) {
      if(window.confirm("Tem certeza?")) {
        if(window.confirm("Essa é uma decisão inrreversível.")) {
          window.alert("Dados apagados!");
          deleteAllData();
        } 
      }
    }
  }

  return (
    <Page title='Sugestões'>

      <Option
        title='Apagar todos meus dados.'
        onClick={deleteData}
      />

      {/* <Button className="button" type="submit" value="Salvar" 
        // onClick={saveConfig}
      /> */}

    </Page>
  )
}

export default ConfigPage