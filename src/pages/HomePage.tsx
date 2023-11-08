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
    <main>
      <header className='page-header'>
        <h1>ConectaJP</h1>
      </header>
      <button onClick={Debug}>Debug</button>
      <section className="home-section">

      </section>
    </main>
  )
}

export default HomePage