import '../css/HomePages.css'
import '../css/Pages.css'

const HomePage = () => {

  const Debug = () => {
    const section = document.querySelector('.home-section')
    if (!section) return
    section.innerHTML = `
      innerWidth: ${window.innerWidth}px; <br/>
      innerHeight: ${window.innerHeight}px; <br/>
      outerHeight: ${window.outerHeight}px; <br/>
      outerWidth: ${window.outerWidth}px; <br/><br/>

      main width: ${document.querySelector('main')?.clientWidth}px <br/>
      main height: ${document.querySelector('main')?.clientHeight}px <br/><br/>

      #root width: ${document.querySelector('#root')?.clientWidth}px <br/>
      #root height: ${document.querySelector('#root')?.clientHeight}px <br/>
    `
  }

  return (
    <main className='home-page'>
      <header className='page-header'>
        <h1>ConectaJP</h1>
      </header>
      <section className="home-section">
        <button onClick={Debug} >Debug</button>

      </section>
    </main>
  )
}

export default HomePage