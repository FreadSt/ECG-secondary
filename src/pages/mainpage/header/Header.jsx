import "./styles.scss";
import headertext from "../../../assets/images/header-img/mainpageheader.png";
import HeaderMobile from "../../../assets/images/header-img/HeaderMobile.png";
import styled, { keyframes } from 'styled-components';
import { fadeInDown, zoomInUp} from 'react-animations';
import headerBtn from "../../../assets/images/header-img/headerBtn.png";
import popUpBtn from "../../../assets/images/header-img/popUpBtn.png"
import modalPopUp from "../../../assets/images/header-img/modalPopUp.png";
import { useState, useRef } from "react";
import emailjs from 'emailjs-com';
 
const zoomInAnimation = keyframes`${zoomInUp}`;
 
const ZoomDiv = styled.div`
  animation: 1s ${zoomInAnimation};
`;
const fadeDownAnimation = keyframes`${fadeInDown}`;
 
const FadeDownDiv = styled.div`
  animation: 1s ${fadeDownAnimation};
`;

const Header = () => {
    
    const [clicked, setClicked] = useState(false)
    const [name, setName] = useState({value:"", error:""})
    const [email, setEmail] = useState({value:"", error:""})
    const [company, setCompany] = useState({value:"", error:""})
    const [phone, setPhone] = useState({value:"", error:""})
    const [filled, setFilled] = useState(false)
    const [isSubmit, setIsSubmit] = useState(false)

    const handleClose = () => {
        setClicked(false)
       
    }
    const form = useRef()
    
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
            <div className="header-container">  
                <div className="header-text">
                    <div className="main-text">
                            <img src={headertext}/>
                        <img className="mobile-header" src={HeaderMobile}/>
                    </div>
                        <p>Our goal is to make your brands scale by bringing data-driven decisions and 
                        creative design together for a full-funnel marketing approach</p>
                    <div className="header-btn">
                        <button onClick={setClicked}>
                            <span>Contact Now!</span>
                            <img src={headerBtn}/>
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
                                            <input placeholder="Your first name and last name "
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
            </div>
    )
}

export default Header;

