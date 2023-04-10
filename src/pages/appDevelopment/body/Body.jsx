import "./style.scss";
import shareimg from "../../../assets/sixthpage-images/body-img/shareimg.png";
import improve from "../../../assets/sixthpage-images/body-img/improve.png";
import lab from "../../../assets/sixthpage-images/body-img/lab.png";
import logo from "../../../assets/sixthpage-images/body-img/Logo1.png";
import Expertise from "./expertise/Expertise";
import Industries from "./industries/Industry";
import labscince from "../../../assets/sixthpage-images/body-img/lab-since.png";
import cardsImg from "../../../assets/images/footer-img/footerCards.png";
import modalCheck from "../../../assets/images/body-img/modalCheck.png";
import modalPopUp from "../../../assets/images/body-img/modalPopUp.png";
import headerBtn from "../../../assets/images/header-img/headerBtn.png";

import { InlineWidget } from "react-calendly";
import MailChimpForm from "../../mainpage/body/MailCimpForm";
import Buttons from "./grow/Buttons";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css";

import {useState, useEffect} from "react";

const Body =() => {
    const [isVisible, setIsVisible] = useState("undefined");
    const [isShowCalendar, setIsShowCalendar] = useState(false)
    const [clicked, setClicked] = useState(false)

    useEffect(() => {   
        window.addEventListener("scroll", listenToScroll);
        return () => {
            window.removeEventListener("scroll", listenToScroll)
        }
    }, [isVisible])
   
    const listenToScroll = () => {
        let heightToShowFrom = 1200;
        const winScroll = document.body.scrollTop || 
            document.documentElement.scrollTop;

        if (winScroll > heightToShowFrom) {  
            isVisible === "undefined" && setIsVisible(false);
            console.log(isVisible, "visible")
        }
    };
    return(
        <div className="web_app-body">
            <div className="share-block">
                <ScrollAnimation animateIn="animate__lightSpeedInLeft">
                    <img src={shareimg}/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__lightSpeedInRight">
                    <div className="share-text">
                        <h1>Share your vision, and our experts will help your business grow</h1>
                        <p>You have an idea. We have the tech knowledge and 
                            skills to turn it into a profitable business. 
                            Our team works with a variety of databases and 
                            APIs, as well as scale and interaction with other services. 
                            We create solutions that streamline your company processes and provide 
                            value to your customers by successfully combining technological stacks. </p>
                    </div>
                </ScrollAnimation>
            </div>

            <div className="share-block_mobile">
                    <h1>Share your vision, and our experts will help your business grow</h1>
                    <img src={shareimg}/>
                    <p>You have an idea. We have the tech knowledge and 
                        skills to turn it into a profitable business. 
                        Our team works with a variety of databases and 
                        APIs, as well as scale and interaction with other services. 
                        We create solutions that streamline your company processes and provide 
                        value to your customers by successfully combining technological stacks. </p>
            </div>

            <div className="block-transition">
                <hr/>
            </div>

            <div className="expertise-block">
                
                <h1>End-to-end expertise across the digital ecosystem</h1>
                <div className="expertise-points">
                    <Expertise/>
                </div>
            </div>

            <div className="block-transition">
                <hr/>
            </div>

            <div className="industries">
                <h1>Industries we serve</h1>
                <Industries/>
            </div>

            {!isVisible ?
                <div className="popUp-wrapper">
                    {isShowCalendar ?
                        <div className="calendly">
                                <div className="btn-close" onClick={() => {window.removeEventListener("scroll", listenToScroll) 
                                                                                setIsVisible(true)}}>
                                    <img src={modalPopUp}/>
                                </div>
                            <h1>Thanks for your ineterest</h1>
                            <p>Your free report will be emailed shortly. Book your strategy session below</p>
                            <InlineWidget 
                                styles={{width:"600px" , height:"360px"}}
                                url="https://calendly.com/empireclientgenerator/15min"/>
                        </div>

                        :
                        
                        <div className="popUp">
                                    <div className="btn-close" onClick={() => {window.removeEventListener("scroll", listenToScroll) 
                                                                                setIsVisible(true)}}>
                                        <img src={modalPopUp}/>
                                    </div>
                                    <h1>You're one step away from instant access</h1>
                                    <div>
                                        <img className="cards-img" src={cardsImg}/>
                                        <div className="input-block">
                                            <h1 className="input-title">CLAIM YOUR STARTER KIT NOW...</h1>
                                            <span><b>*</b>Indicates required</span>
                                            <div className="mailForm">
                                                <MailChimpForm successHandler={() => setIsShowCalendar(true)}/>
                                            </div>
                                            <span className="lower-text"><b>100% Free.</b> No Credit Card Needed</span>
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
            </div>     
                : null               
            }
            
            <div className="mob-form-wrapper">
                {!isVisible ?
                    <div className="popUp-wrapper">
                            <div className="popUp-mob">
                                <div className={clicked? "btn-close" : "btn-def"} onClick={() => {window.removeEventListener("scroll", listenToScroll) 
                                                                            setIsVisible(true)}}>
                                    <img className="close-button" src={modalPopUp}/>
                                </div>
                                {
                                    clicked ?
                                        <div className="mailchimp-form-mobile">
                                            {
                                                isShowCalendar?
                                                    <div className="mob-calendly">
                                                        <h1>Thanks for your ineterest</h1>
                                                        <p>Your free report will be emailed shortly. Book your strategy session below</p>
                                                        <InlineWidget 
                                                            styles={{width:"320px" , height:"380px"}}
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
                                :
                                    <div className="pop-present">
                                        <img className="cards-img" src={cardsImg}/>
                                        <h1 className="popup-title">You're one step away from instant access</h1>

                                        <button className="popup-btn" onClick={setClicked}>
                                            <span>Get it Now</span>
                                            <img src={headerBtn}/>
                                        </button>

                                        <div className="checkpoints-mobile">
                                            <div className="check-box">
                                                <img src={modalCheck}/>
                                                <label>7 Step Plan Download</label>
                                            </div>

                                            <div className="check-box">
                                                <img src={modalCheck}/>
                                                <label>“How Its Works” Video</label>
                                            </div>

                                            <div className="check-box">
                                                <img src={modalCheck}/>
                                                <label>Free Strategy Session</label>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                    </div>                  
                    : null               
                }
            </div>

            <div className="block-transition">
                <hr/>
            </div>

            <div className="grow">
                <h1>How can we help your business grow?</h1>
                <div className="grow-btns-box">
                    
                    <div className="grow-btns">
                        <Buttons/>
                    </div>
                </div>
            </div>

            <div className="block-transition">
                <hr/>
            </div>

            <div className="work-improve">
                <div className="improve-text">
                    <ScrollAnimation animateIn="animate__zoomInUp">
                        <h1>Work improve - bring results</h1>
                        <p>The process of improving the quality of our services is never-ending. 
                            We are constantly monitoring the success of our clients and are grateful 
                            to everyone who has chosen to work with us. We aim to develop exceptional 
                            initiatives that alter the world, 
                            accelerate progress, and provide economic and social advantages.</p>
                    </ScrollAnimation>
    
                </div>
                <ScrollAnimation animateIn="animate__jello">
                    <img src={improve}/>
                </ScrollAnimation>
            </div>

            <div className="work-improve_mobile">
                    <h1>Work improve - bring results</h1>
                    <img src={improve}/>
                    <p>The process of improving the quality of our services is never-ending. 
                        We are constantly monitoring the success of our clients and are grateful 
                        to everyone who has chosen to work with us. We aim to develop exceptional 
                        initiatives that alter the world, 
                        accelerate progress, and provide economic and social advantages.</p>
            </div>

            <div className="block-transition">
                <hr/>
            </div>

            <div className="lab">
                <ScrollAnimation animateIn="animate__bounce"> 
                    <img className="lab-pic" src={lab}/>
                </ScrollAnimation>
                <div className="lab-title">
                    <h1>Our partners will assist you in the Lab!</h1>
                    <span>We are always developing something astonishing! Check it Out!</span>
                    <a href="http://empireapplabs.com/" target="_blank"><img src={logo}/></a>

                </div>
                <img className="lab-rigth" src={labscince}/>
            </div>

            <div className="mobile-lab">
                <a href="http://empireapplabs.com/" target="_blank"><img className="mobile-logo" src={logo}/></a>
                <h1>Bring Your Digital Products to Life</h1>
                <ScrollAnimation animateIn="animate__bounce"> 
                <img className="mobile-lab-img" src={lab}/>
                </ScrollAnimation>
            </div>

        </div>
    )
}

export default Body;