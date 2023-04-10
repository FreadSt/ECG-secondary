import "./style.scss";
import cards from "../../../assets/images/footer-img/footerCards.png";
import popUpBtn from "../../../assets/images/footer-img/popUpBtn.png"
import modalCheck from "../../../assets/images/footer-img/modalCheck.png"
import ScrollAnimation from "react-animate-on-scroll";
import { InlineWidget } from "react-calendly";
import MailChimpForm from "../body/MailCimpForm";
import { useState, useRef } from "react";
import modalPopUp from "../../../assets/images/header-img/modalPopUp.png";
import cardsImg from "../../../assets/images/footer-img/footerCards.png";
import headerBtn from "../../../assets/images/header-img/headerBtn.png";
import emailjs from 'emailjs-com';


const Footer = () => {
    const [name, setName] = useState({value:"", error:""})
    const [email, setEmail] = useState({value:"", error:""})
    const [phone, setPhone] = useState({value:"", error:""})
    const [company, setCompany] = useState({value:"", error:""})

    const [clicked, setClicked] = useState(false)
    const [isShowCalendar, setIsShowCalendar] = useState(false)
    const [filled, setFilled] = useState(false)
    const [isSubmit, setIsSubmit] = useState(false)
    
    const handleClose = () => {
        setClicked(false)
    }
        
    const handleSubmit = (event) => {
        console.log( "handle")
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

    return(
        <footer className="mainpage-footer">

            {isShowCalendar ?
                    <div className="calendly">
                        <h1>Thanks for your ineterest</h1>
                        <p>Your free report will be emailed shortly. Book your strategy session below</p>
                        <InlineWidget 
                            styles={{width:"645px" , height:"460px"}}
                            
                            url="https://calendly.com/empireclientgenerator/15min"/>
                    </div>
                    
                    :

                    <div className="mainpage_footer-container">
                        <ScrollAnimation delay={500}
                                    animateIn='tada'
                                    initiallyVisible={true}>
                            <h1 className="web-title">You're one step away from instant access</h1>
                        </ScrollAnimation>
                        <div className="footer-content">
                                <ScrollAnimation delay={1500}
                                animateIn='tada'
                                initiallyVisible={true}
                                >
                                    <img className="footer-cards" src={cards}/>
                                </ScrollAnimation>
                                <div>
                                    <div className="input-block">
                                        <h1 className="input-title">CLAIM YOUR STARTER KIT NOW...</h1>
                                        <span><b>*</b>Indicates required</span>
                                        <div className="mailForm">
                                                <MailChimpForm props={handleSubmit}/>
                                        </div>
                                        <span className="lower-text"><b>100% Free.</b> No Credit Card Needed</span>
                                    </div>
                                </div>
                        </div>

                        <div className="checkpoints">
                                <div>
                                    <img src={modalCheck}/>
                                    <label>7 Step Plan Download</label>
                                </div>

                                <div >
                                    <img src={modalCheck}/>
                                    <label>“How Its Works” Video</label>
                                </div>

                                <div>
                                    <img src={modalCheck}/>
                                    <label>Free Strategy Session</label>
                                </div>
                            </div>
                    </div>
            }
            
            <div className="footer-mobile">
                <img src={cards}/>
                <h1>GET YOUR FREE 7-STEP PLAN</h1>
                <p>It Can Be Difficult To Know Where To Start.
                    This Simple Step-By-Step Playbook Will Take Out All The Guess work!</p>
                <button onClick={setClicked}>
                    <span>Give It To Me!</span>
                    <img src={popUpBtn}/>
                </button>
                {
                    clicked ?
                        <div className="popUp-wrapper">
                            <div className="popUp-container">
                                <div className="btn-close" onClick={handleClose}>
                                    <img src={modalPopUp}/>
                                </div>
                                {
                                    isShowCalendar?
                                    <div className="mob-calendly">
                                        <h1>Thanks for your ineterest</h1>
                                        <p>Your free report will be emailed shortly. Book your strategy session below</p>
                                        <InlineWidget 
                                            styles={{width:"320px" , height:"320px"}}
                                            url="https://calendly.com/empireclientgenerator/15min"/>
                                    </div>

                                        :

                                        <div className="input-block">
                                            <h1 className="input-title">CLAIM YOUR STARTER KIT NOW...</h1>
                                            <span className="input-require"><b>*</b>Indicates required</span>
                                            <div className="mailForm">
                                                <MailChimpForm successHandler={() => setIsShowCalendar(true)}/>
                                            </div>
                                            <span className="lower-text"><b>100% Free.</b> No Credit Card Needed</span>
                                        </div>
                                }
                            </div>
                        </div>
                    : null
                }   
            </div>
            
        </footer>
    )
}

export default Footer;


/*

{
                    clicked ?
                        <div className="popUp-wrapper">
                            {
                                isShowCalendar ?
                                        <div className="mob-calendly-box">
                                            <div className="close-btn" onClick={handleClose}>
                                                <img src={modalPopUp}/>
                                            </div>
                                            <div className="calendly">
                                                <h1>Thanks for your ineterest</h1>
                                                <p>Your free report will be emailed shortly. Book your strategy session below</p>
                                                <InlineWidget 
                                                    styles={{width:"320px" , height:"340px"}}
                                                    url="https://calendly.com/empireclientgenerator/15min"/>
                                            </div>
                                        </div>                                    
                                    :
                                        <div className="input-wrapper">
                                            <div className="close-btn" onClick={handleClose}>
                                                <img src={modalPopUp}/>
                                            </div>
                                            <div className="input-block">
                                                <h1 className="input-title">CLAIM YOUR STARTER KIT NOW...</h1>
                                                <span className="input-require"><b>*</b>Indicates required</span>
                                                <div className="mailForm">
                                                    <MailChimpForm successHandler={() => setIsShowCalendar(true)}/>
                                                </div>
                                                <span className="lower-text"><b>100% Free.</b> No Credit Card Needed</span>
                                            </div>
                                        </div>
                            }
                        </div>
                    : null
                } 

                CSS
                .popUp-wrapper{
                position: fixed;
                top: 0;
                bottom: 0;
                right: 0;
                left: 0;
                opacity: 1.3;
                display: flex;
                flex-direction: column;
                align-items: center;
                background-color: rgba(0,0,0,0.75);
                z-index: 99;
                .mob-calendly-box{
                    background: url("../../../assets/images/body-img/popupBG.png")center no-repeat;
                    background-size: cover;
                    margin: 10vh 0 0;
                    width: 340px;
                    align-self: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;
                    border: 2px solid #393B3D;
                    border-radius: 16px;                    
                    .close-btn{
                        align-self: flex-end;
                        margin: 10px;
                        cursor: pointer;
                        img{
                            width: 30px;
                            height: 30px;
                        }
                    }
                    .calendly{
                        width: 325px;
                        .calendly-inline-widget{
                            height: 380px;
                            iframe{
                                height: 380px;    
                            }
                        }
                        h1{
                            font-family: "AndersonGroteskBlack";
                            text-shadow:
                                        -2px -2px #393B3D,
                                        0  -2px#393B3D,
                                        2px -2px #393B3D,
                                        2px  0 #393B3D,
                                        2px  2px #393B3D,
                                        0  2px #393B3D,
                                        -2px  2px #393B3D,
                                        -2px  0  #393B3D,
                                        -4px  4px  #393B3D;
                            color: #F5F2EA;
                            letter-spacing: 2px;
                            font-size: 24px;
                            margin: -10px 0 10px;
                            }
                            p{
                                font-size: 12px;
                                margin: 5px;
                                font-family: "AndersonGroteskBlack";
                                color: #393B3D;
                        }
                    }
                }
                .input-wrapper{
                    margin: 20vh 0 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 340px;
                    height: 460px;
                    background: url("../../../assets/images/body-img/popupBG.png")center no-repeat;
                    background-size: cover;    
                    border: 2px solid #393B3D;
                    box-shadow: -2px 2px 0px #393B3D;
                    border-radius: 16px;
                    .close-btn{
                        align-self: flex-end;
                        margin: 10px;
                        cursor: pointer;
                        img{
                            width: 30px;
                            height: 30px;
                        }
                    }                
                    .input-block{
                        width: 310px;
                        height: 370px;
                        background-color: #F5F2EA;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        border: 2px solid #393B3D;
                        border-radius: 16px;
                        box-shadow: -2px 2px 0px #393B3D;
                        .input-title{
                            width: 310px;
                            font-family: "AndersonGroteskBlack";
                            text-shadow:
                                -2px -2px #393B3D,
                                0  -2px#393B3D,
                                2px -2px #393B3D,
                                2px  0 #393B3D,
                                2px  2px #393B3D,
                                0  2px #393B3D,
                                -2px  2px #393B3D,
                                -2px  0  #393B3D,
                                -4px  4px  #393B3D;
                            color: #FFCC4D;
                            letter-spacing: 1px;
                            font-size: 24px;
                            margin: 0px 0 0;
                        } 
                        .input-require{
                            display: flex;
                            color: #393B3D;
                            font-family: "AndersonGrotesk";
                            margin: 0px 0px 0px 20px;
                            b{
                                color: #FF6F69;
                            }
                        }
                        .lower-text{
                            font-family: "AndersonGrotesk";
                            color: #5D9040;
                            text-shadow:
                                -1px -1px #393B3D,
                                0  -1px#393B3D,
                                1px -1px #393B3D,
                                1px  0 #393B3D,
                                1px  1px #393B3D,
                                0  1px #393B3D,
                                -1px  1px #393B3D,
                                -1px  0  #393B3D,
                                -2px  2px  #393B3D;
                            b{
                                color: #FF6F69;
                            }
                        }
                        .mailForm{
                            display: flex;
                            height: 250px;
                            position: relative;
                            .mailchimpForm{
                                display: flex;
                                flex-direction: column;
                                height: 250px;
                                form{
                                    display: flex;
                                    flex-direction: column;
                                    align-items: center;
                                    width: 300px;
                                    input{
                                        text-indent: 20px;
                                        margin: 7px 0;
                                        width: 260px;
                                        height: 29px;
                                        border-radius: 10px;
                                        border: 2px solid #393B3D;
                                        font-family: "AndersonGrotesk";
                                    }
                                    button{
                                        width: 270px;
                                        height: 45px;
                                        cursor: pointer;
                                        display: flex;
                                        padding: 16px;
                                        align-items: center;
                                        justify-content: space-between;
                                        background: #F5F2EA;
                                        border: 2px solid #393B3D;
                                        border-radius: 10px;
                                        font-family: 'ArchivoBold';
                                        font-size: 14px;
                                        color: #393B3D;
                                        margin: 7px 0;
                                    }
                                }
                                .asd{
                                    align-self: flex-end;
                                    width: 25px;
                                    height: 25px;
                                    position: absolute;
                                    margin: 0;
                                    bottom: 60px;
                                    right: 35px;
                                }
                                span{
                                    margin:10px 0 0 35px;
                                    font-family: "AndersonGrotesk";
                                    align-self: flex-start;
                                    b{
                                        color: #FF6F69;
                                    }
                                }
                            }
                        }
                    }
                }
            }
*/


/*
    OLD INPUT WITHOUT MAILCHIMP


    const Footer = () => {
    const [name, setName] = useState({value:"", error:""})
    const [email, setEmail] = useState({value:"", error:""})
    const [phone, setPhone] = useState({value:"", error:""})
    const [isShowCalendar, setIsShowCalendar] = useState(false)
    
    const handleSubmit = (event) => {
        console.log( "handle")
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
    }
    const handleChangeEmail = (event) => {
        setEmail({value: event.target.value, error: ""})
    }
    const handleChangePhone = (event) => {
        setPhone({value: event.target.value, error: ""})
    }
    return(
        <footer className="mainpage-footer">

            {isShowCalendar ?
                    <div className="calendly">
                        <h1>Thanks for your ineterest</h1>
                        <p>Your free report will be emailed shortly. Book your strategy session below</p>
                        <InlineWidget 
                            styles={{width:"645px" , height:"460px"}}
                            
                            url="https://calendly.com/empireclientgenerator/15min"/>
                    </div>
                    
                    :

                    <div className="mainpage_footer-container">
                        <ScrollAnimation delay={500}
                                    animateIn='tada'
                                    initiallyVisible={true}>
                            <h1 className="web-title">You're one step away from instant access</h1>
                        </ScrollAnimation>
                        <div className="footer-content">

                                <ScrollAnimation delay={1500}
                                animateIn='tada'
                                initiallyVisible={true}
                                >

                                    <img className="footer-cards" src={cards}/>

                                </ScrollAnimation>
                                <div>
                                    <div className="input-block">
                                        <h1 className="input-title">CLAIM YOUR STARTER KIT NOW...</h1>
                                        <div className="input-fields">
                                            <label>
                                                <b>*</b>Indicates required
                                            </label>
                                            <input placeholder="Your name"
                                                    value={name.value}
                                                    onChange={handleChangeName}
                                            /><span className="input-err">{name.error ? name.error : null}</span>
                                            <input placeholder="Your email address"
                                                    value={email.value}
                                                    onChange={handleChangeEmail}
                                            /><span className="input-err">{email.error ? email.error : null}</span>
                                            <input placeholder="Your mobile phone"
                                                    value={phone.value}
                                                    onChange={handleChangePhone}
                                            /><span className="input-err">{phone.error ? phone.error : null}</span>
                                            <button className="popUpBtn" onClick={handleSubmit}>
                                                <span className="popUp-title">Subscribe</span>
                                                <img src={popUpBtn}/>
                                            </button>
                                            <span className="lower-sign"><b>100% Free.</b> No Credit Card Needed</span>
                                        </div>
                                    </div>
                                </div>
                                    
                        </div>

                        <div className="checkpoints">
                                <div>
                                    <img src={modalCheck}/>
                                    <label>7 Step Plan Download</label>
                                </div>

                                <div >
                                    <img src={modalCheck}/>
                                    <label>“How Its Works” Video</label>
                                </div>

                                <div>
                                    <img src={modalCheck}/>
                                    <label>Free Strategy Session</label>
                                </div>
                            </div>
                    </div>
            }
            
            <div className="footer-mobile">
                <img src={cards}/>
                <h1>GET YOUR FREE 7-STEP PLAN</h1>
                <p>It Can Be Difficult To Know Where To Start.
                    This Simple Step-By-Step Playbook Will Take Out All The Guess work!</p>
                <button>
                    <span>Give It To Me!</span>
                    <img src={popUpBtn}/>
                </button>
            </div>
            
        </footer>
    )
}

export default Footer */