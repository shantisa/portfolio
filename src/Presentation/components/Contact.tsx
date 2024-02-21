import React, {MutableRefObject} from 'react';
import '../styles/ContactStyle.scss';
import {ContactModel} from "../../Data/Model/ContactModel";
import fbIcon from '../../resources/icons/faceIcon.svg'
import linkIcon from '../../resources/icons/linkIcon.svg'
import sendIcon from '../../resources/icons/sendIcon.svg'
import 'react-toastify/dist/ReactToastify.css';

/**
 * Interface defining the props expected by the Contact component. It
 * contains the 'Contact' section data, a reference to the contact form,
 * and a callback function to handle form submission.
 */
interface ContactProps{
    data: ContactModel | null;
    form: MutableRefObject<HTMLFormElement | null>;
    sendEmail: (e:React.FormEvent<HTMLFormElement>) => void;
}

/**
 * Contact Component
 *
 * This component renders the 'Contact' section of the portfolio, which displays
 * the author's contact information and a contact form.
 *
 * @param props - Component properties
 */
export default function Contact(props : ContactProps){

    return(
        <div className="contactContainer" id="contact">
            <div className="contactContent">
                <div className="box">
                    <div className="sectionLabel">
                        <div className="block"></div>
                        <h1 dangerouslySetInnerHTML={{__html:props.data !== null ? props.data.contact.secLabel : ""}}></h1>
                    </div>
                </div>
                <div className="infoContent">
                    <p><img src={sendIcon} alt="Message Sent Icon"/>shantisa.strowder.career@gmail.com</p>
                    <div className="socialIcons">
                        <a href="https://www.facebook.com/shantisa.strowder?mibextid=ZbWKwL"><img src={fbIcon} alt="Facebook Logo"/></a>
                        <a href="https://www.linkedin.com/in/shantisa/"><img src={linkIcon} alt="LinkedIn Logo"/></a>
                    </div>
                    <a href={require('../../resources/assets/ShantisaCV.pdf')} download={'Shantisa_Resume'} className="contactBtn">{props.data !== null ? props.data.contact.btnLabel : ""}</a>
                </div>
            </div>

            <div className="formContainer">
                <form className="contactForm" ref={props.form} onSubmit={props.sendEmail}>
                    <label>{props.data !== null ? props.data.form.name : ""}</label>
                    <input type="text" name="user_name" required/>
                    <label>{props.data !== null ? props.data.form.email : ""}</label>
                    <input type="email" name="user_email" required/>
                    <label>{props.data !== null ? props.data.form.subject : ""}</label>
                    <input type="text" name="subject" required/>
                    <label>{props.data !== null ? props.data.form.message : ""}</label>
                    <textarea name="message" required/>
                    <input type="submit" value={props.data !== null ? props.data.form.submit : ""} />
                </form>
            </div>
        </div>
    );
}