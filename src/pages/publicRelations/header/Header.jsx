import "./style.scss";
import headertext from "../../../assets/secondpage-images/header-img/publicRel-text.png";
import headermobile from "../../../assets/secondpage-images/header-img/header2mobile.png"
import styled, { keyframes } from 'styled-components';
import {fadeInUp, zoomInRight} from 'react-animations';
import headerBtn from "../../../assets/images/header-img/headerBtn.png";
import modalPopUp from "../../../assets/secondpage-images/header-img/modalPopUp.png";
import { useState, useRef, useEffect } from "react";
import emailjs from 'emailjs-com';

const zoomInAnimation = keyframes`${zoomInRight}`;
 
const ZoomDiv = styled.div`
  animation: 1s ${zoomInAnimation};
`;
const fadeInAnimation = keyframes`${fadeInUp}`;
 
const FadeDiv = styled.div`
  animation: 1s ${fadeInAnimation};
`;


const Header = () => {
    const [clicked, setClicked] = useState(false)
    const [name, setName] = useState({value:"", error:""})
    const [email, setEmail] = useState({value:"", error:""})
    const [company, setCompany] = useState({value:"", error:""})
    const [phone, setPhone] = useState({value:"", error:""})
    const [filled, setFilled] = useState(false)
    const [isSubmit, setIsSubmit] = useState(false)

    const handleClose = (e) => {
        setClicked(false)
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
        setFilled(true)
        setPhone({value: event.target.value, error: ""})
    }
    return(
            <div className="pubrel-container">  
                <div className="pubRel-text">
                    <ZoomDiv>
                            <img className="pubrelHeader_text" src={headertext}/>
                            <img className="pubRel-mobile" src={headermobile}/>
                    </ZoomDiv>
                    <FadeDiv>
                        <p>At Empire Client Generator, we protect, enhance, 
                            and build your brand reputation by analyzing the organization, 
                            finding the right messages,                               
                            and translating those messagesinto positive media stories</p>
                    </FadeDiv>
                    <div className="header-btn">
                        <button onClick={setClicked}>
                            <span>Reach Out Now!</span>
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