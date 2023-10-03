import './index.css'
import image from '../../assets/images/undraw_mailbox_re_dvds.svg'

export default function Contacts() {
  return (
    <div className='container contacts d-flex flex-column justify-content-center align-items-center'>
        
        
        <div className='d-flex '>
          
          <form>
            <section className="d-flex flex-column mb-3">
              <label>Name</label>
              <input type="text" placeholder='Enter your name'/>
            </section>

            <section className="d-flex flex-column mb-3">
              <label>Email</label>
              <input type="email" placeholder="Enter your email"/>
            </section>

            <section className="d-flex flex-column mb-3">
              <label>Telefone</label>
              <input type="text" placeholder='enter your phone'/>
            </section>

            <section className="d-flex flex-column mb-3">
              <label>Message</label>
              <textarea cols="30" rows="5" placeholder='Write here your message'/>
            </section>
          
            <input type="submit" value='Send'/>
          </form>
        </div>
        
       
    </div>
  )
}
