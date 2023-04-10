import "./style.scss";
import footerText from "../../../assets/fifthpage-images/footer-img/footer-text.png";
import popUpBtn from "../../../assets/fifthpage-images/footer-img/popUpBtn.png";
import ScrollAnimation from 'react-animate-on-scroll';
import {InlineWidget} from 'react-calendly';
import { useState } from "react";
import "animate.css";

const Footer = () => {
    const [clicked, setClicked] = useState(false)
    const [name, setName] = useState({value:"", error:""})
    const [email, setEmail] = useState({value:"", error:""})
    const [company, setCompany] = useState({value:"", error:""})
    const [phone, setPhone] = useState({value:"", error:""})
    const [isShowCalendar, setIsShowCalendar] = useState(false)
    const [filled, setFilled] = useState(false)

    const handleClick = () => {
        setClicked(false)
        /*if (typeof window != 'undefined' && window.document) {
            document.body.style.overflow = 'hidden';
        } */
    }

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
            setPhone({value:"", error:""})
            setCompany({value:"", error:""})
            setIsShowCalendar(true)
        }
        
        
    }
    
    const handleChangeName = (event) => {
        setName({value: event.target.value, error: ""})
        setFilled(true)
    }
    const handleChangeEmail = (event) => {
        setEmail({value: event.target.value, error: ""})
        setFilled(true)
    }
    const handleChangePhone = (event) => {
        setPhone({value: event.target.value, error: ""})
        setFilled(true)
    }
    const handleChangeCompany = (event) => {
        setCompany({value: event.target.value, error: ""})
        setFilled(true)
    }
    return(
        <div className="footer-container">
            <div className="webM-footer">
                {
                    isShowCalendar?
                    <div className="calendly">
                            <h1>Thanks for your ineterest</h1>
                            <p>Your free report will be emailed shortly. Book your strategy session below</p>
                            <InlineWidget 
                                styles={{width:"600px" , height:"360px"}}
                                url="https://calendly.com/empireclientgenerator/15min"/>
                    </div> 
                    
                    :

                    <div className="webM-footer-form">
                        <ScrollAnimation animateIn="animate__jackInTheBox">
                            <img  className="footer-text" src={footerText}/>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="animate__lightSpeedInRight">
                        <div className="input-fields">

                        <div className="brandInput">
                                        <label>Full name:</label>
                                        <input placeholder="Your name and surname"
                                                value={name.value}
                                                onChange={handleChangeName}
                                        /> <span>{name.error ? name.error : null}</span>
                                    </div>
                                    
                                    <div className="brandInput">
                                        <label>Email:</label>
                                        <input placeholder="Your Email"
                                                value={email.value}
                                                onChange={handleChangeEmail}
                                        /><span>{email.error ? email.error : null}</span>
                                    </div>
                                    
                                    <div className="brandInput">
                                        <label>Company:</label>
                                        <input placeholder="Your Company"
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
                                                onClick={handleSubmit}
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
                        </div>
                        </ScrollAnimation>
                    </div>
                }
            </div>
            <div className="mobilewebM-footer">
                <img  className="footer-text" src={footerText}/>
                <div className="webM-footer-form">
                    <div className="input-fields">

                        <div className="input-title">
                            <h1>Let's Talk</h1>
                            <h3>You Already Have a Brand, but Something is Going Wrong?</h3>
                        </div>
                        <div className="brandInput">
                            <label>Full name:</label>
                            <input placeholder="Your name and surname"/> 
                        </div>

                        <div className="brandInput">
                            <label>Email:</label>
                            <input placeholder="Your name and surname"/>
                        </div>

                        <div className="brandInput">
                            <label>Company:</label>
                            <input placeholder="youremail@mail.com"/>
                        </div>

                        <div className="brandInput">
                            <label>Phone:</label>
                            <input placeholder="Your name and surname"/>
                        </div>

                        {
                                        filled ?
                                            <button type="button" 
                                                className="footerM-btn" 
                                                onClick={handleSubmit}
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
                        </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;