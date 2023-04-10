import Benefits from "./benefits/Benefits";
import DevBrand from "./developBrand/DevBrand";
import Disciplines from "./disciplines/Disciplines";
import lwreath from "../../../assets/fourthpage-images/body-img/lowerBlock/lwreath.png";
import rwreath from "../../../assets/fourthpage-images/body-img/lowerBlock/rwreath.png";
import pic3 from "../../../assets/fourthpage-images/body-img/lowerBlock/pic3.png";
import pic1 from "../../../assets/fourthpage-images/body-img/lowerBlock/pic1.png";
import pic2 from "../../../assets/fourthpage-images/body-img/lowerBlock/pic2.png";
import cardsImg from "../../../assets/images/footer-img/footerCards.png";
import modalCheck from "../../../assets/images/body-img/modalCheck.png";
import modalPopUp from "../../../assets/images/body-img/modalPopUp.png";
import headerBtn from "../../../assets/images/header-img/headerBtn.png";


import { InlineWidget } from "react-calendly";
import { useEffect, useState } from "react";
import MailChimpForm from "../../mainpage/body/MailCimpForm";
import "./style.scss";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css";

const Body = () => {
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
        <body className="brand_dev-body">
            <div className="benefits">
                <ScrollAnimation animateIn="animate__pulse">
                    <h1>Benefits of a strong brand</h1>
                </ScrollAnimation>
                <Benefits/>
            </div>

            <div className="mob-benefits">
                <h1>Benefits of a strong brand</h1>
                <Benefits/>

            </div>

            <div className="block-transition">
                <hr/>
            </div>

            <div className="second-block">
                <ScrollAnimation animateIn="animate__pulse">
                    <h1>How we develop a commercially successful brand </h1>
                </ScrollAnimation>
                <DevBrand/>
            </div>
            
            <div className="mob-second-block">
                <h1>How we develop a commercially successful brand </h1>
                <DevBrand/>
            </div>

            <div className="block-transition">
                <hr/>
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

            <div className="disciplines">
                <ScrollAnimation animateIn="animate__shakeX">
                    <h1>Disciplines</h1>
                </ScrollAnimation>
                <Disciplines/>
            </div>

            <div className="mobile-dis">
                <h1>Disciplines</h1>
                <Disciplines/>
            </div>

            <div className="block-transition">
                <hr/>
            </div>

            <div className="lower-content">
                <ScrollAnimation animateIn="animate__slideInDown">
                    <h1>Affordable and variable service packages</h1>
                </ScrollAnimation>  
                <div className="image-container">
                    <ScrollAnimation animateIn="animate__fadeIn">
                        <img className="wreath" src={lwreath}/>
                    </ScrollAnimation>
                    
                    <ScrollAnimation animateIn="animate__fadeInUp">
                        <div className="card">
                            <img src={pic3}/>
                            <h3>Scope of work</h3>
                            <p>Whether you are looking for a promotion plan or brand book 
                                we can add value regardless of your budget</p>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="animate__fadeInDown">   
                        <div className="card">
                            <img src={pic1}/>
                            <h3>Marketing goals</h3>
                            <p>We want to know all of your ideas. Once we understand your goals, 
                                we will work with you to create an effective strategy</p>
                        </div>
                    </ScrollAnimation>
                    
                    <ScrollAnimation animateIn="animate__fadeInUp">
                        <div className="card">
                            <img src={pic2}/>
                            <h3>Market competition</h3>
                            <p>Developing a unique positioning in a competitive market can be costly – but 
                                we'll ensure you get the best ROI for every dollar you spend.</p>
                        </div>
                    </ScrollAnimation>
        
                    <ScrollAnimation animateIn="animate__fadeIn"
                                        delay={500}
                        >
                        <img className="wreath" src={rwreath}/>
                    </ScrollAnimation>
                </div>
            </div>
            
            <div className="lower-mobile">
                    <h1>Affordable and variable service packages</h1>
                <div className="image-container">
                        <img className="wreath" src={lwreath}/>
                        <div className="card">
                            <img src={pic3}/>
                            <h3>Scope of work</h3>
                            <p>Whether you are looking for a promotion plan or brand book 
                                we can add value regardless of your budget</p>
                        </div>
                        <div className="card">
                            <img src={pic1}/>
                            <h3>Marketing goals</h3>
                            <p>We want to know all of your ideas. Once we understand your goals, 
                                we will work with you to create an effective strategy</p>
                        </div>                    
                        <div className="card">
                            <img src={pic2}/>
                            <h3>Market competition</h3>
                            <p>Developing a unique positioning in a competitive market can be costly – but 
                                we'll ensure you get the best ROI for every dollar you spend.</p>
                        </div>        
            
                     <img className="wreath" src={rwreath}/>
                </div>
            </div>
        </body>
    )
}
export default Body;