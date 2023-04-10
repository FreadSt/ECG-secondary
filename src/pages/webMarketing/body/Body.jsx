import "./style.scss";
import pic1 from "../../../assets/fifthpage-images/body-img/fblock1.png";
import pic2 from "../../../assets/fifthpage-images/body-img/fblock2.png";
import pic3 from "../../../assets/fifthpage-images/body-img/fblock3.png";
import nft from "../../../assets/fifthpage-images/body-img/nft.png";
import lwreath from "../../../assets/fifthpage-images/body-img/lwreath.png";
import rwreath from "../../../assets/fifthpage-images/body-img/rwreath.png";
import Social from "./social/Social"
import InMarketing from "./influencerMarketing/InMarketing";
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
        <div className="webMarket-container">
                <div className="for-project"> 
                    <h1>WHAT WE DO FOR YOUR PROJECT</h1>
                    <p>We provide a wide variety of services and proven campaigns that bring a large, loyal, 
                        and monetizable community that will buy and support your NFT project.</p>
                    <div className="images-box">
                        <img className="wreath" src={lwreath}/>
                        <div className="card-block">
                            <img src={pic1}/>
                            <h3>Strategy</h3>
                            <p>Increase your chances to sellout the project with a proven marketing strategy </p>
                        </div>
                        <div className="card-block">
                            <img src={pic2}/>
                            <h3>Specs</h3>
                            <p>Find the USP that makes your project stand out from the crowd</p>
                        </div>
                        <div className="card-block">
                            <img src={pic3}/>
                            <h3>Community</h3>
                            <p>Grow your community organically and nurture it for long-term success</p>
                        </div>
                        <img className="wreath" src={rwreath}/>
                    </div>
                </div>

            <div className="block-transition">
                <hr/>
            </div>

            <div className="web-nft">
                <ScrollAnimation animateIn="animate__jello">
                    <img src={nft}/>
                </ScrollAnimation>
                <div>
                    <ScrollAnimation animateIn="animate__bounceInUp">
                        <h1>NFT Trading Platforms and Listings</h1>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__bounceInRight">
                        <h4>Choosing the right media publications 
                        is the most effective and exclusive strategy to promote and sell your tokens.</h4>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__bounceInDown">
                        <p>Our NFT experts can help you choose the most robust and efficient crypto platforms to sell your NFT. 
                        We will carefully consider everything, 
                        from speed to security to costs. Our goal is to protect you from any potential surprises.</p>
                    </ScrollAnimation>
                </div>
            </div>

            <div className="mobile-nft">
                <h1>NFT Trading Platforms and Listings</h1>
                <h4>Choosing the right media publications 
                    is the most effective and exclusive strategy to promote and sell your tokens.</h4>
                <img src={nft}/>
                <p>Our NFT experts can help you choose the most robust and efficient crypto platforms to sell your NFT. 
                    We will carefully consider everything, 
                    from speed to security to costs. Our goal is to protect you from any potential surprises.</p>
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
                                                !isShowCalendar?
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

            <div className="SMM-growth">
                <div className="SMM-text">
                    <ScrollAnimation animateIn="animate__slideInUp">
                        <h1>SMM Growth Hacks</h1>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__slideInLeft">
                        <h4>From developing brand awareness to building relationships with your 
                        target audience our dedicated SMM experts will help you gain hundreds 
                        of thousands of community members.</h4>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__slideInDown">
                        <p>We run marketing campaigns using effective 
                        marketing channels to build a large, loyal 
                        community of people that will buy and support your NFT project.</p>
                    </ScrollAnimation>
                </div>
                <Social/>
            </div>

            <div className="mob-SMM">
                <div className="SMM-text">
                        <h1>SMM Growth Hacks</h1>
                        <h4>From developing brand awareness to building relationships with your 
                        target audience our dedicated SMM experts will help you gain hundreds 
                        of thousands of community members.</h4>
                        <p>We run marketing campaigns using effective 
                        marketing channels to build a large, loyal 
                        community of people that will buy and support your NFT project.</p>
                </div>
                <Social/>
            </div>

            <div className="block-transition">
                <hr/>
            </div>

            <div className="influencer-marketing">
                <ScrollAnimation animateIn="animate__fadeInUp">
                    <h1>Effective Influencer Marketing</h1>
                    <h4>Reaching out and choosing the right influencers for your NFT project can be hard, 
                        expensive, and have a lot of potential risks. Entrust this to our team. We constantly monitor influencers 
                        and ensure that every dollar you spend on marketing will return the best ROI.</h4>
                    <p><b>Empire Client Generator</b> is more than just a leading marketing agency. Our team has 
                        launched several turnkey NFT projects, from development to marketing. 
                        When you turn to us, you get not just a contractor in the form of an agency, 
                        but a dedicated in-house outsourced team with a number of advantages.</p>
                </ScrollAnimation>
                <InMarketing/>
            </div>

            <div className="mob-influencerM">
                    <h1>Effective Influencer Marketing</h1>
                    <h4>Reaching out and choosing the right influencers for your NFT project can be hard, 
                        expensive, and have a lot of potential risks. Entrust this to our team. We constantly monitor influencers 
                        and ensure that every dollar you spend on marketing will return the best ROI.</h4>
                    <p><b>Empire Client Generator</b> is more than just a leading marketing agency. Our team has 
                        launched several turnkey NFT projects, from development to marketing. 
                        When you turn to us, you get not just a contractor in the form of an agency, 
                        but a dedicated in-house outsourced team with a number of advantages.</p>
                <InMarketing/>
            </div>

            <div className="block-transition">
                <hr/>
            </div>

            <div className="do_it-box">
                <ScrollAnimation animateIn="animate__fadeInDownBig">
                    <h1 className="doit-title">HOW WE DO IT</h1>
                </ScrollAnimation>
                <div className="cards-block">
                    <ScrollAnimation animateIn="animate__rotateInDownLeft">
                        <div>
                            <h1 style={{color:"#FF6F69"}}>01</h1>
                            <h4>We get to know you and dive into your project.</h4>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="animate__rotateInDownRight">
                        <div >
                            <h1 style={{color:"#55ACEE"}}>02</h1>
                            <h4>We suggest the best promotion channels and strategies.</h4>
                        </div >
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="animate__rotateInUpLeft">
                        <div>
                            <h1 style={{color:"#FFCC4D"}}>03</h1>
                            <h4>We agree on promotion budgets and conditions of payment. </h4>
                        </div>
                    </ScrollAnimation>
                    
                    <ScrollAnimation animateIn="animate__rotateInUpRight">
                        <div>
                            <h1 style={{color:"#77B255"}}>04</h1>
                            <h4>We implement a plan for placements, publications, and launching.</h4>
                        </div>
                    </ScrollAnimation>
                   
                    <ScrollAnimation animateIn="animate__rotateIn">
                        <div>
                            <h1 style={{color:"#F484AC"}}>05</h1>
                            <h4>We analyze the results and provide reports.</h4>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
            <div className="mob-doit-box">
                    <h1 className="doit-title">HOW WE DO IT</h1>
                <div className="cards-block">
                        <div>
                            <h1 style={{color:"#FF6F69"}}>01</h1>
                            <h4>We get to know you and dive into your project.</h4>
                        </div>

                        <div >
                            <h1 style={{color:"#55ACEE"}}>02</h1>
                            <h4>We suggest the best promotion channels and strategies.</h4>
                        </div >

                        <div>
                            <h1 style={{color:"#FFCC4D"}}>03</h1>
                            <h4>We agree on promotion budgets and conditions of payment. </h4>
                        </div>
                    
                        <div>
                            <h1 style={{color:"#77B255"}}>04</h1>
                            <h4>We implement a plan for placements, publications, and launching.</h4>
                        </div>
                   
                        <div>
                            <h1 style={{color:"#F484AC"}}>05</h1>
                            <h4>We analyze the results and provide reports.</h4>
                        </div>
                </div>
            </div>

        </div>
    )
}

export default Body