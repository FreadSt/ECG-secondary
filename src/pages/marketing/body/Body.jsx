import "./style.scss";
import lwreath from "../../../assets/thirdpage-images/body-img/lwreath.png";
import rwreath from "../../../assets/thirdpage-images/body-img/rwreath.png";
import marketPic1 from "../../../assets/thirdpage-images/body-img/market-pic1.png";
import marketPic2 from "../../../assets/thirdpage-images/body-img/market-pic2.png";
import marketPic3 from "../../../assets/thirdpage-images/body-img/market-pic3.png";
import marketPic4 from "../../../assets/thirdpage-images/body-img/market-pic4.png";
import marketPic5 from "../../../assets/thirdpage-images/body-img/market-pic5.png";
import marketPic6 from "../../../assets/thirdpage-images/body-img/market-pic6.png";
import design from "../../../assets/thirdpage-images/body-img/design.png";
import development from "../../../assets/thirdpage-images/body-img/development.png";
import cardsImg from "../../../assets/images/footer-img/footerCards.png";
import modalCheck from "../../../assets/images/body-img/modalCheck.png";
import modalPopUp from "../../../assets/images/body-img/modalPopUp.png";
import headerBtn from "../../../assets/images/header-img/headerBtn.png";
import Processes from "./processes/Processes";

import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css";

import { useState, useEffect } from "react";
import { InlineWidget } from "react-calendly";
import MailChimpForm from "../../mainpage/body/MailCimpForm";


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
        <body className="marketing-body">   
            <ScrollAnimation 
            animateIn="fadeIn"
            >
                <div className="achivements">
                    <h1>WHAT WE BRING TO THE TABLE</h1>
                    <p className="achivements-main_des">Our digital marketing experts are obsessed with bringing optimal results and 
                        helping you attract the clients you want at a price you can afford.</p>
                    <div className="image-container">
                        <img className="wreath" src={lwreath}/>
                        
                        <div>
                            <img src={marketPic1}/>
                            <h3>Cross-channel strategies</h3>
                        </div>

                        <div>
                            <img src={marketPic2}/>
                            <h3>Creative storytelling</h3>
                        </div>
                        
                        <div>
                            <img src={marketPic3}/>
                            <h3>Efficient media-buying</h3>
                        </div>

                        <img className="wreath" src={rwreath}/>
                    </div>
                </div>
            </ScrollAnimation>

            <div className="processes">
                <Processes/>
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
            
            <div className="achivements">
                    <h1>WHY CHOOSE</h1>
                    <h1>EMPIRE CLIENT GENERATOR?</h1>
                    <p className="achivement-suptitle">It's about bringing customers through your doors. Learn how we can help</p>
                <div className="image-container">
                        <img className="wreath" src={lwreath}/>
                    
                        <div>
                            <img src={marketPic4}/>
                            <h3>Unique Marketing Strategies </h3>
                            <p>We will build a unique strategy that will 
                                take your business to the next level</p>
                        </div>
        
                    <div>
                        <img src={marketPic5}/>
                        <h3>A Professional Dedicated Team</h3>
                        <p>Your success is our success – we don't succeed unless you do</p>
                    </div>
                    
                        <div>
                            <img src={marketPic6}/>
                            <h3>Return on Investmens</h3>
                            <p>We strive to bring you the greatest return possible</p>
                        </div>

                        <img className="wreath" src={rwreath}/>
                </div>
            </div>

            <div className="block-transition">
                <hr/>
            </div>

            <div className="marketing-team">
                <div className="team-title">
                    <h1>OUR TEAM</h1>
                    <p>We are a close community of people
                        with innovative, progressive ideas.</p>
                </div>
                <div className="team-box">
                    <div className="inner-block">
                        <img src={design}/>
                        <div className="des-box">
                            <h3>Design</h3>
                            <p>In-house, we have a team of creative talents. 
                                We create eye-catching and effective designs 
                                that champion your brand and compel audiences to act</p>
                        </div>
                    </div>

                    <div className="inner-block">
                        <img src={development}/>
                        <div className="des-box">
                            <h3>Development</h3>
                            <p>Our web designers, UI/UX specialists, web developers, 
                                and digital marketers work together to create a beautiful, 
                                well-organized, and unique website</p>
                        </div>
                    </div>
                </div>
            </div>

        </body>
    )
}

export default Body;