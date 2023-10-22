import DefaultProfile from '../assets/default-profile.png'
import icon_star from '../assets/star-30.png'
import '../css/pages.css'
import '../css/StorePage.css'
import '../css/AccountPage.css'

const MyAccountPage= () => {
  return (<>
    <header className='page-header account-page'>
      <h1>Minha Conta</h1>
    </header>

    <section className='middle-section account-page'>
      <div className="image-box">
        <img src={DefaultProfile} alt="" />
      </div>

      <div className="content-box">
        <h2>@default_user</h2>
        
        <div className="review-box">
          <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
        </div>
      </div>
    </section>

    <section className='account-section account-page'>

    </section>
  </>)
}

export default MyAccountPage