import "./style.scss";
import footerAppDevText from "../../../assets/sixthpage-images/footer-img/appdevFooter.png";
import popUpBtn from "../../../assets/sixthpage-images/footer-img/popUpBtn.png";
import ScrollAnimation from 'react-animate-on-scroll';
import {InlineWidget} from "react-calendly";
import { useState } from "react";
import "animate.css";

const Footer =() => {
    const [clicked, setClicked] = useState(false)
    const [name, setName] = useState({value:"", error:""})
    const [email, setEmail] = useState({value:"", error:""})
    const [phone, setPhone] = useState({value:"", error:""})
    const [company, setCompany] = useState({value:"", error:""})
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
    const handleChangeCompany = (event) => {
        setCompany({value: event.target.value, error: ""})
        setFilled(true)
    }
    const handleChangePhone = (event) => {
        setPhone({value: event.target.value, error: ""})
        setFilled(true)
    }
    
    return(
        <div className="webApp_footer-container">
            <div className="webApp-footer">
                {isShowCalendar?
                   <div className="calendly">
                        <h1>Thanks for your ineterest</h1>
                        <p>Your free report will be emailed shortly. Book your strategy session below</p>
                        <InlineWidget 
                            styles={{width:"600px" , height:"360px"}}
                            url="https://calendly.com/empireclientgenerator/15min"/>
                    </div> 
                    
                    : 
                    
                    <div className="webM-footer-form">
                    <ScrollAnimation animateIn="animate__flipInY">
                        <img  className="footer-text" src={footerAppDevText}/>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__fadeInUp">
                    <div className="input-fields">

                        <div className="input-title">
                            <h1>Let's Talk</h1>
                            <h3>You Already Have a Brand, but Something is Going Wrong?</h3>
                        </div>
                        <div className="webAppInput">
                            <label>Full name:</label>
                            <input placeholder="Your name"
                                    value={name.value}
                                    onChange={handleChangeName}
                            /> <span>{name.error ? name.error : null}</span>
                        </div>

                        <div className="webAppInput">
                            <label>Email:</label>
                            <input placeholder="Your email adress"
                                    value={email.value}
                                    onChange={handleChangeEmail}
                                /><span>{email.error ? email.error : null}</span>
                        </div>

                        <div className="webAppInput">
                            <label>Company:</label>
                            <input placeholder="Your company name"
                                value={company.value}
                                onChange={handleChangeCompany}
                            /><span>{company.error ? company.error : null}</span>
                        </div>

                        <div className="webAppInput">
                            <label>Phone:</label>
                            <input placeholder="Your mobile phone"
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
            
            <div className="mobileDev-footer">
                    <img  className="footer-text" src={footerAppDevText}/>
                <div className="webM-footer-form">
                    <div className="input-fields">

                        <div className="input-title">
                            <h1>Let's Talk</h1>
                            <h3>You Already Have a Brand, but Something is Going Wrong?</h3>
                        </div>
                        <div className="webAppInput">
                            <label>Full name:</label>
                            <input placeholder="Your name and surname"/> 
                        </div>

                        <div className="webAppInput">
                            <label>Email:</label>
                            <input placeholder="Your name and surname"/>
                        </div>

                        <div className="webAppInput">
                            <label>Company:</label>
                            <input placeholder="youremail@mail.com"/>
                        </div>

                        <div className="webAppInput">
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

export default Footer