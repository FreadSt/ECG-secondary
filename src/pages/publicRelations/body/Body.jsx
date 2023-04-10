import "./style.scss";
import lwreath from "../../../assets/secondpage-images/body-img/lwreath.png";
import rwreath from "../../../assets/secondpage-images/body-img/rwreath.png";
import upperIcon1 from "../../../assets/secondpage-images/body-img/upperIcon-1.png";
import upperIcon2 from "../../../assets/secondpage-images/body-img/upperIcon-2.png";
import upperIcon3 from "../../../assets/secondpage-images/body-img/upperIcon-3.png";
import middleIcon1 from "../../../assets/secondpage-images/body-img/middleIcon-1.png";
import middleIcon2 from "../../../assets/secondpage-images/body-img/middleIcon-2.png";
import middleIcon3 from "../../../assets/secondpage-images/body-img/middleIcon-3.png";
import middleIcon4 from "../../../assets/secondpage-images/body-img/middleIcon-4.png";
import lowerIcon1 from "../../../assets/secondpage-images/body-img/lowerIcon-1.png";
import lowerIcon2 from "../../../assets/secondpage-images/body-img/lowerIcon-2.png";
import lowerIcon3 from "../../../assets/secondpage-images/body-img/lowerIcon-3.png";
import cardsImg from "../../../assets/images/footer-img/footerCards.png";
import modalCheck from "../../../assets/images/body-img/modalCheck.png";
import modalPopUp from "../../../assets/images/body-img/modalPopUp.png";
import headerBtn from "../../../assets/images/header-img/headerBtn.png";


import { InlineWidget } from "react-calendly";
import { useEffect, useState } from "react";
import MailChimpForm from "../../mainpage/body/MailCimpForm";
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
        <div className="pubRel-body">
            <div className="body-wrapper">
                <div className="upper-content">
                    <ScrollAnimation animateIn="fadeIn" animatePreScroll={false}>
                        <h1>How do we nurture your reputation?</h1>
                        <p className="up-suptitle">We strategically break down the barriers to spark 
                            conversations and create emotional connections</p>
                    </ScrollAnimation>
                    
                    <ScrollAnimation animateIn="fadeIn">
                        <div className="image-container">
                            <img className="lwreath" src={lwreath}/>
                            
                            <div className="card">
                                <img src={upperIcon1}/>
                                <h3>EDITORIAL & PRESS RELEASE</h3>
                            </div>

                            <div className="card">
                                <img src={upperIcon2}/>
                                <h3>MEDIA RELATIONS</h3>
                            </div>
                            
                            <div className="card">
                                <img src={upperIcon3}/>
                                <h3>PARTNERSHIP & EVENTS</h3>
                            </div>

                            <img className="rwreath" src={rwreath}/>
                        </div>
                    </ScrollAnimation>
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

                <div className="middle-content">
                    
                    <div className="mid-block">
                        <div className="mid-box">
                            <img src={middleIcon1}/>
                            <h3>FIND THE WINNING PITCHES</h3>
                        </div>
                        <p>We A/B test each pitch headline to see which performs the best and fine-tune 
                            the pitch time to reach each journalist at the right time.</p>
                    </div>
                    
                    <div className="mid-block">
                        <div className="mid-box">
                            <img src={middleIcon2}/>
                            <h3>PRESS MATERIAL DEVELOPMENT</h3>
                        </div>
                        <p>From talking points, press releases, to media alerts – we develop press 
                            materials that influence perceptions, drive thought leadership, and inspire action.</p>
                    </div>
                    
                    <div className="mid-block">
                        <div className="mid-box">
                            <img src={middleIcon3}/>
                            <h3>INFLUENCER ENGAGEMENTS</h3>
                        </div>
                        <p>We tap into the right influencers at the right time to create curated experiences 
                            that allow your brand to spread organically among your target audiences.</p>
                    </div>
                    
                    <div className="mid-block">
                        <div className="mid-box">
                            <img src={middleIcon4}/>
                            <h3>PLANNING & CRISIS SUPPORT</h3>
                        </div>
                        <p>Our teams help your business navigate an uncertain future with confidence. 
                            We help communicate honestly, sincerely, and directly with your audiences.</p>
                    </div>
                </div>

                <div className="block-transition">
                    <hr/>
                </div>

                <div className="lower-content">
                <ScrollAnimation animateIn='flipInX'
                                >
                    <h1>WHAT MAKE US UNIQUE</h1>
                    <p className="lower-suptitle">We continuously innovate and connect creative ideas to cultural trends, 
                        proven effective by data and analytics. 
                        Our role is to nurture your brand and make people stand up and notice you.</p>
                </ScrollAnimation>
                    <div className="image-container">
                        <ScrollAnimation animateIn="zoomInLeft">
                            <img className="wreath" src={lwreath}/>
                        </ScrollAnimation>
                            <div className="lower-block">                                
                                <div className="lower-box">
                                    <ScrollAnimation animateIn="jello">
                                        <img src={lowerIcon1}/>
                                    </ScrollAnimation>
                                    <h3>We are precise</h3>
                                </div>
                                <p>We use the latest tools and put tremendous effort 
                                    to ensure your pitches win every journalist's heart.</p>
                            </div>

                        <div className="lower-block">
                            <div className="lower-box">
                                <ScrollAnimation animateIn="swing">
                                    <img src={lowerIcon2}/>
                                </ScrollAnimation>
                                <h3>We are professional</h3>
                            </div>
                            <p>We create strategies to break through the noise and ensure companies' 
                                messages are seen, heard, and felt.
                            </p>
                        </div>

                        
                        <div className="lower-block">
                            <div className="lower-box">
                                <ScrollAnimation animateIn="animate__lightSpeedInRight">
                                    <img src={lowerIcon3}/>
                                </ScrollAnimation>
                                <h3>We bring results</h3>
                            </div>
                            <p>We ensure people will see your brand as successful, honest, 
                                important, exciting, or relevant as possible.</p>
                            </div>

                        <ScrollAnimation animateIn="zoomInRight">
                            <img className="wreath" src={rwreath}/>
                        </ScrollAnimation>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default Body;