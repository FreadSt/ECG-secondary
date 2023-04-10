import "./style.scss";
import footerPost from "../../../assets/secondpage-images/footer-img/pubrel-footer-post.png";
import popUpBtn from "../../../assets/thirdpage-images/footer-img/popUpBtn.png";
import modalPopUp from "../../../assets/thirdpage-images/footer-img/modalPopUp.png"
import headerBtn from "../../../assets/thirdpage-images/footer-img/headerBtn.png";
import "animate.css";
import { useState, useRef } from "react";
import emailjs from 'emailjs-com';


const Footer = () => {
    const [clicked, setClicked] = useState(false)
    const [name, setName] = useState({value:"", error:""})
    const [email, setEmail] = useState({value:"", error:""})
    const [company, setCompany] = useState({value:"", error:""})
    const [phone, setPhone] = useState({value:"", error:""})
    const [filled, setFilled] = useState(false)
    const [isSubmit, setIsSubmit] = useState(false)


    const handleClose = () => {
        setClicked(false)
        /*if (typeof window != 'undefined' && window.document) {
            document.body.style.overflow = 'hidden';
        } */
    }
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
        <footer className="market-footer">
            <div className="footer-box">
                    <img className="poster" src={footerPost}/>
                <div className="content">
                    <div className="inner-text">
                            <h1>Let's collaborate!</h1>
                            <p>We can't wait to hear more about your business, your goals, 
                            and your expectations</p>
                    </div>
                    <div className="footer-btn">
                        <button className="footerM-btn" onClick={setClicked}>
                            <span>Get a proposal</span>
                            <img src={popUpBtn}/>
                        </button>
                    </div>
                    {clicked? 
                        <div className="form-wrapper">
                            <div className="brand-footer-form">
                                {isSubmit ?
                                    <div className="succsess">
                                        <h1>THANK YOU!</h1>
                                        <p className="suptitle-succsess">Empire Client Generator team will contact you soon!</p>
                                        <button onClick={() => setClicked(false)}><span>Ok</span></button>
                                    </div>

                                    :
                                    
                                    <form ref={form} onSubmit={handleSubmit} className="input-fields">
                                        <img className="close-btn" src={modalPopUp} onClick={handleClose}/>
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
                                                <img src={headerBtn}/>
                                            </button>  :
                                            
                                            <button type="button" 
                                                className="footerM-btn-disabled" 
                                            >
                                                <span>Send inquiry</span>
                                                <img src={headerBtn}/>
                                            </button>  
                                        }                                 
                                    </form>
                                }  
                            </div>
                        </div>
                    :null}
                </div>
                <img className="marketPoster-mobile" src={footerPost}/>
            </div>
            
        </footer>
    )
}

export default Footer;