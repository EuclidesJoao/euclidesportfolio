import "./index.css";
import envelop from '../../assets/images/undraw_envelope_re_f5j4.svg';
import { NavLink } from "react-router-dom";

export const Contacts = () => {
  return (
    <div className="container contacts d-flex flex-column justify-content-center align-items-center">
      <img src={envelop} alt="Envelope" className="contacts-image" />
      <h1 className="text-center contacts-heading">Feel free to reach out via email</h1>
      <a href="mailto:euclidesjoao.dev@gmail.com" className="contacts-email">euclidesjoao.dev@gmail.com</a>
      <p className="contacts-info">For professional inquiries, collaboration opportunities, or just to say hi, don’t hesitate to drop me a line!</p>
    </div>
  );
};
