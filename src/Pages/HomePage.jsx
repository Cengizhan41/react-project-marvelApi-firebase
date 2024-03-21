import { StyledHome } from '../StyledComponents/StyledHome'
import { Link } from 'react-router-dom'


function HomePage() {
 
  return (
    <StyledHome>
    <div className="hero">
    <div className="mb-5 py-3 text-center">
      <div className="heroInside d-flex mx-auto">
    <h1 className="fw-bold heroHead">MarvelAPI  Demo Project with React</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4 heroText">This website has been developed with React and utilizes MarvelAPI. You can access all <img className='mx-1' src="/Marvel_Logo.svg" alt="marvel" />  content through this site.</p>
    </div>
    </div>
  </div>
    </div>
    <div className="container my-4">
    <section className="characters">
    <Link to={'/marvel/characters'} className="card mb-3 shadow">
  <div className="row g-0">
    <div className="col-md-5">
      <div className="card-body">
        <h5 className="card-title">Characters </h5>
        <p className="card-text">You can access all MARVEL characters. If you have a specific character in mind, you can search and find it.</p>
      </div>
    </div>
    <div className="col-md-7">
      <div className="img-wrap  text-end">
      <img src="/img/characters.jpg" className="img-fluid rounded " alt="characters"/>
      </div> 
    </div>
  </div>
    </Link>
    </section>
    <section className="series">
    <Link to={'/marvel/series'} className="card mb-3 shadow">
  <div className="row g-0">
    <div className="col-md-5">
      <div className="card-body">
        <h5 className="card-title">Series </h5>
        <p className="card-text">You can access all MARVEL series. If you have a specific series in mind, you can search and find it</p>
      </div>
    </div>
    <div className="col-md-7">
      <div className="img-wrap  text-end">
      <img src="/img/series.jpg" className="img-fluid rounded " alt="series"/>
      </div> 
    </div>
  </div>
    </Link>
    </section>
    <section className="events">
    <Link to={'/marvel/events'} className="card mb-3 shadow">
  <div className="row g-0">
    <div className="col-md-5">
      <div className="card-body">
        <h5 className="card-title">Events </h5>
        <p className="card-text">You can access all MARVEL events. If you have a specific event in mind, you can search and find it.</p>
      </div>
    </div>
    <div className="col-md-7">
      <div className="img-wrap  text-end">
      <img src="/img/comics.jpg" className="img-fluid rounded " alt="events"/>
      </div> 
    </div>
  </div>
    </Link>
    </section>
    </div>
    </StyledHome>
  )
}

export default HomePage