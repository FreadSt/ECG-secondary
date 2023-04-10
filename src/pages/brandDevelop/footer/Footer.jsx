import "./style.scss";
import footerText from "../../../assets/fourthpage-images/footer-img/brandFooter-text.png";
import popUpBtn from "../../../assets/fourthpage-images/footer-img/popUpBtn.png";
import ScrollAnimation from 'react-animate-on-scroll';
import emailjs from 'emailjs-com';
import { useState, useRef } from "react";

import "animate.css";

const Footer = () => {
    const [name, setName] = useState({value:"", error:""})
    const [email, setEmail] = useState({value:"", error:""})
    const [company, setCompany] = useState({value:"", error:""})
    const [phone, setPhone] = useState({value:"", error:""})
    const [filled, setFilled] = useState(false)
    const [isSubmit, setIsSubmit] = useState(false)
    const [clicked, setClicked] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(
            "ecg-mailsend",
            "template_8xqacvh",
            form.current,
            "xulO4wspd3CcTBSbl"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
        );
        setIsSubmit(true)
    };

    const form = useRef()

    const handleSubmit = (event) => {
        event.preventDefault()
        let isError = false
        if(!name.value){
            setName({value:"", error: "Correct mistakes and try again"})
            isError = true;
        }
        if(!/\S+@\S+\.\S+/.test(email.value)){
            setEmail((current) => ({value: current.value, error: "Correct mistakes and try again"}) )
         }
        if(!email.value){
            setEmail({value:"", error: "Correct mistakes and try again"})
            isError = true;
        }
        if(!company.value){
            setCompany({value:"", error:"Correct mistakes and try again"})
        }
        if(!phone.value){
            setPhone({value:"", error:"Correct mistakes and try again"})
        }
        
        if(!isError){
            setName({value:"", error:""})
            setEmail({value:"", error:""})
            setCompany({value:"", error:""})
            setPhone({value:"", error:""})
        }
        
        
    }
    const handleClose = () => {
        setClicked(false)
    }
    
    const handleChangeName = (event) => {
        setName({value: event.target.value, error: ""})
        setFilled(true)
    }
    const handleChangeEmail = (event) => {
        setEmail({value: event.target.value, error: ""})
        setFilled(true)
    }
    const handleChangeCompany = (event) => {
        setCompany({value: event.target.value, error: ""})
        setFilled(true)
    }
    const handleChangePhone = (event) => {
        setPhone({value: event.target.value, error: ""})
        setFilled(true)
    }

    return(
        <div className="main-footer-box">
            <div className="brand-footer">
                <ScrollAnimation animateIn="animate__heartBeat">
                    <img  className="footer-text" src={footerText}/>
                </ScrollAnimation>
                <div className="brand-footer-form">
                    <ScrollAnimation animateIn="animate__backInDown">
                    {isSubmit ?
                                    <div className="succsess">
                                        <h1>THANK YOU!</h1>
                                        <p className="suptitle-succsess">Empire Client Generator team will contact you soon!</p>
                                    </div>

                                    :
                                    
                                    <form ref={form} onSubmit={handleSubmit} className="input-fields">
                                        <div className="input-title">
                                            <h1>LET'S TALK</h1>
                                            <h3>WE ARE READY TO HELP YOU GROW</h3>
                                        </div>
                                        <div className="brandInput">
                                            <label>Full name:</label>
                                            <input placeholder="Your name and surname"
                                            name="user_name"
                                                    value={name.value}
                                                    onChange={handleChangeName}
                                            /> <span>{name.error ? name.error : null}</span>
                                        </div>
                                        
                                        <div className="brandInput">
                                            <label>Email:</label>
                                            <input placeholder="Your Email"
                                                    name="user_email"
                                                    value={email.value}
                                                    onChange={handleChangeEmail}
                                            /><span>{email.error ? email.error : null}</span>
                                        </div>
                                        
                                        <div className="brandInput">
                                            <label>Company:</label>
                                            <input placeholder="Your Company"
                                                    name="user_company"
                                                    value={company.value}
                                                    onChange={handleChangeCompany}
                                            /><span>{company.error ? company.error : null}</span>
                                        </div>
                                        
                                        <div className="brandInput">
                                            <label>Phone:</label>
                                            <input placeholder="Your Phone"
                                                    value={phone.value}
                                                    onChange={handleChangePhone}
                                            /><span>{phone.error ? phone.error : null}</span>
                                        </div>

                                        {
                                            filled ?
                                                <button type="button" 
                                                    className="footerM-btn" 
                                                    onClick={sendEmail}
                                                >
                                                <span>Send inquiry</span>
                                                <img src={popUpBtn}/>
                                            </button>  :
                                            
                                            <button type="button" 
                                                className="footerM-btn-disabled" 
                                            >
                                                <span>Send inquiry</span>
                                                <img src={popUpBtn}/>
                                            </button>  
                                        }                                 
                                    </form>
                                }  
                    </ScrollAnimation>
                </div>
            </div>

            <div className="mob-brandFooter">
                    <img  className="footer-text" src={footerText}/>
                <div className="brand-footer-form">
                {isSubmit ?
                                    <div className="succsess">
                                        <h1>THANK YOU!</h1>
                                        <p className="suptitle-succsess">Empire Client Generator team will contact you soon!</p>
                                    </div>

                                    :
                                    
                                    <form ref={form} onSubmit={handleSubmit} className="input-fields">
                                        <div className="input-title">
                                            <h1>LET'S TALK</h1>
                                            <h3>WE ARE READY TO HELP YOU GROW</h3>
                                        </div>
                                        <div className="brandInput">
                                            <label>Full name:</label>
                                            <input placeholder="Your name and surname"
                                            name="user_name"
                                                    value={name.value}
                                                    onChange={handleChangeName}
                                            /> <span>{name.error ? name.error : null}</span>
                                        </div>
                                        
                                        <div className="brandInput">
                                            <label>Email:</label>
                                            <input placeholder="Your Email"
                                                    name="user_email"
                                                    value={email.value}
                                                    onChange={handleChangeEmail}
                                            /><span>{email.error ? email.error : null}</span>
                                        </div>
                                        
                                        <div className="brandInput">
                                            <label>Company:</label>
                                            <input placeholder="Your Company"
                                                    name="user_company"
                                                    value={company.value}
                                                    onChange={handleChangeCompany}
                                            /><span>{company.error ? company.error : null}</span>
                                        </div>
                                        
                                        <div className="brandInput">
                                            <label>Phone:</label>
                                            <input placeholder="Your Phone"
                                                    value={phone.value}
                                                    onChange={handleChangePhone}
                                            /><span>{phone.error ? phone.error : null}</span>
                                        </div>

                                        {
                                            filled ?
                                                <button type="button" 
                                                    className="footerM-btn" 
                                                    onClick={sendEmail}
                                                >
                                                <span>Send inquiry</span>
                                                <img src={popUpBtn}/>
                                            </button>  :
                                            
                                            <button type="button" 
                                                className="footerM-btn-disabled" 
                                            >
                                                <span>Send inquiry</span>
                                                <img src={popUpBtn}/>
                                            </button>  
                                        }                                 
                                    </form>
                                }  
                </div>
            </div>
        </div>
    )
}
export default Footer;