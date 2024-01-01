import { deleteAllData } from '../scripts/handleStorage'
import Option from '../components/Option'
import Page from './Page'

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