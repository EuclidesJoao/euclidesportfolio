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
          <h1>Euclides Joao</h1>
          <h3>Full Stack Developer</h3>
        </div> 

      </div>
      
    </div>
  )
}
