import './index.css'
import image from '../../assets/images/undraw_mailbox_re_dvds.svg'

export const Contacts=()=> {
  return (
    <div className='container contacts d-flex flex-column justify-content-center align-items-center'>
    
      <form className='d-flex flex-column'>
        
        <h1 className='text-center'>Contact Me</h1>

        <section className="d-flex flex-column mb-3">
          <label>Name</label>
          <input type="text"/>
        </section>

        <section className="d-flex flex-column mb-3">
          <label>Email</label>
          <input type="email"/>
        </section>

        <section className="d-flex flex-column mb-3">
          <label>Telefone</label>
          <input type="text"/>
        </section>

        <section className="d-flex flex-column mb-3">
          <label>Message</label>
          <textarea cols="30" rows="5"/>
        </section>
      
        <input type="submit" value='Submit'/>
      </form>

    </div>
  )
}
