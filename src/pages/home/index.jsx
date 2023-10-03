import './index.css';
import euclides from '../../assets/images/euclides_gm_1695322111462.jpeg'

export default function Home() {
  return (
    <div className="container home d-flex align-items-center justify-content-center">
      
      <div className='row d-flex'>
        
        <div className='col-md-6 col-12 d-flex align-items-center justify-content-center'>
          <img src={euclides} className='img-fluid euclidesPhoto'/>
        </div>

        <div className="col-md-6 col-12 d-flex flex-column align-items-center justify-content-center">
          <h1>Hi there!</h1>
          <h1>My name is Euclides</h1>
          <h3>I'm a Full-Stack Developer</h3>
          <p className='text-center'>I'm very happy to welcome you to my portfolio, feel free to explore it and get in contact</p>
        </div> 

      </div>
      
    </div>
  )
}
