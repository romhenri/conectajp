import React from 'react'
import { useNavigate } from 'react-router-dom'

type IPage = {
  title: string;
  styleClass?: string;
  children: React.ReactNode; 
}

const Page = ({title, styleClass, children}: IPage) => {
  const navigate = useNavigate();
  const returnPage = () => {navigate('..')}

  return (
    <>
      <main className='cart-page'>
        <header className='page-header'>
          <div onClick={returnPage}>
            <p>Voltar</p>
          </div>
          <h1>
            {title}
          </h1>
          <div></div>
        </header>

        <section className={styleClass}>
          {children}
        </section>
      </main>
    </>
  )
}

export default Page