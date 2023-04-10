import "./style.scss";
import Cards from "./cards/Cards";
import Services from "./servicesCards/Services";
import rotatingSmile1 from "../../../assets/images/body-img/rotatingSmile.png";
import rotatingLightning from "../../../assets/images/body-img/rotatingLightning.png";
import rotatingSmile2 from "../../../assets/images/body-img/rotatingSmile2.png";
import vector from "../../../assets/images/body-img/Vector.png";
import lwreath from "../../../assets/images/body-img/2nd-block-images/lwreath.png";
import rwreath from "../../../assets/images/body-img/2nd-block-images/rwreath.png";
import design from "../../../assets/images/body-img/2nd-block-images/design.png";
import branding from "../../../assets/images/body-img/2nd-block-images/branding.png";
import development from "../../../assets/images/body-img/2nd-block-images/development.png";
import one from "../../../assets/images/body-img/4th-block-images/one.png";
import two from "../../../assets/images/body-img/4th-block-images/two.png";
import three from "../../../assets/images/body-img/4th-block-images/three.png";
import four from "../../../assets/images/body-img/4th-block-images/four.png";
import cardsImg from "../../../assets/images/footer-img/footerCards.png";
import modalCheck from "../../../assets/images/body-img/modalCheck.png";
import modalPopUp from "../../../assets/images/body-img/modalPopUp.png";
import headerBtn from "../../../assets/images/header-img/headerBtn.png";

import { InlineWidget } from "react-calendly";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import MailChimpForm from "./MailCimpForm";


const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
  hidden: { opacity: 0, scale: 0 }
};

const reveal = () => {
    let reveals = document.querySelectorAll(".reveal");
  
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
};
  
window.addEventListener("scroll", reveal);

const Box = () => {

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
                <div className="second-block-content">
                <ScrollAnimation animateIn='bounce'
                    initiallyVisible={true}
                    animateOnce={false}>
                    <h1>TURN YOUR BUSINESS INTO AN EMPIRE</h1>
                    <h3>We craft a perfect roadmap to success!</h3>
                </ScrollAnimation>
                <div className="inner-content">
                    <img className="side-img" src={lwreath}/>
                        
                    <div className="inner-card">
                        <img src={design}/>
                        <span>Design</span>
                        <p>Make valuable design decisions at every stage of the digital product life cycle, from launch to expansion</p>
                    </div>
                        
                    <div className="inner-card">
                        <img src={branding}/>
                        <span>Branding</span>
                        <p>Create memorable, iconic, and scalable brand expressions that drive business results </p>
                    </div>
                        
                    <div className="inner-card">
                        <img src={development}/>
                        <span>Development</span>
                        <p>Upmarket user-centric mobile and web applications to digitize your company from front to back</p>
                    </div>
                    <img className="side-img" src={rwreath}/>
                </div>
            </div>
    </motion.div>
    
  );
};

const Body = (props) => {
    const [name, setName] = useState({value:"", error:""})
    const [email, setEmail] = useState({value:"", error:""})
    const [phone, setPhone] = useState({value:"", error:""})
    const [isShowCalendar, setIsShowCalendar] = useState(false)
    const [clicked, setClicked] = useState(false)

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
    console.log(props.message, "mes")
    
    const handleChangeName = (event) => {
        setName({value: event.target.value, error: ""})
    }
    const handleChangeEmail = (event) => {
        setEmail({value: event.target.value, error: ""})
    }
    const handleChangePhone = (event) => {
        setPhone({value: event.target.value, error: ""})
    }
    /*popUp */
    const [isVisible, setIsVisible] = useState("undefined");
    
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
        <div className="main-body">
            <div className="upper-content reveal">
                   <h1>How can we help your business grow?</h1>
                   <p>We specialize in fast and focused research, strategy, branding, web design, and development</p>
                <Cards/>
            </div>
            <div className="block-transition">
                <hr/>
                    <div>
                        <img className="animate-smile" src={rotatingSmile1}/>
                        <img className="rotating-text" src={vector}/>
                    </div>  
                <hr/>
            </div>
            
            <Box/>

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
                                    <h1 className="popup-title">You're one step away from instant access</h1>
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
                                                            styles={{width:"320px" , height:"340px"}}
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
                <div>
                    <img  className="animate-smile" src={rotatingLightning}/>
                    <img className="rotating-text" src={vector}/>
                </div>  
                <hr/>
            </div>

            <div className="third-block-content reveal fade-bottom">
                <p className="title">Tailored services for your business needs and goals</p>
                <div className="inner-content">
                    <Services/>
                </div>
            </div>

            <div className="block-transition">
                <hr/>
                <div >
                    <img  className="animate-smile" src={rotatingSmile2}/>
                    <img className="rotating-text" src={vector}/>
                </div>  
                <hr/>
            </div>

            <div className="fourth-block-content reveal fade-left">
                
                <div className="main-container">
                    <div className="container-title">
                        <img src={one}/>
                        <span>MINDSET</span>
                    </div>
                    <p>Our mindset focuses on client success. When we 
                        develop a marketing strategy, 
                        we ensure that it creates meaningful relationships throughout the 
                        customer lifecycle so that you get optimal results 
                        from your marketing dollars.</p>
                </div>
                
                <div className="main-container">
                    <div className="container-title">
                        <img src={two}/>
                        <span>PASSION</span>
                    </div>
                    <p>Our passion is fueled by learning about your values 
                        and working hand in hand to build a solid business 
                        relationship. Not only do you get a top tier 
                        marketing agency as an ace in your pocket, but you 
                        also get a digital consultant obsessed with 
                        bringing profit to your business.</p>
                </div>
                
                <div className="main-container">
                    <div className="container-title">
                        <img src={three}/>
                        <span>FOCUS</span>
                    </div>
                    <p>Our focus is to establish you and your digital 
                        presence in front of millions of people with an
                        effective online strategy to increase brand 
                        awareness and growth.</p>
                </div>
                
                <div className="main-container">
                    <div className="container-title">
                        <img src={four}/>
                        <span>RESULTS</span>
                    </div>
                    <p>We rely on our results and experience to help your 
                        business get more traffic, acquire more customers, 
                        and sell more products.</p>
                </div>
            </div>

        </div>
    )
}

export default Body;


/* <div className="mob-form-wrapper">
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
                                    styles={{width:"320px" , height:"270px"}}
                                    url="https://calendly.com/empireclientgenerator/15min"/>
                            </div>

                            :
                            
                            <div className="popUp" style={{overflowY:"scroll"}}>
                                        <div className="btn-close" onClick={() => {window.removeEventListener("scroll", listenToScroll) 
                                                                                    setIsVisible(true)}}>
                                            <img src={modalPopUp}/>
                                        </div>
                                        <div className="mob-inner-box">
                                            <img className="cards-img" src={cardsImg}/>
                                            <h1>You're one step away from instant access</h1>

                                            <div className="input-block">
                                                <h1 className="input-title">CLAIM YOUR STARTER KIT NOW...</h1>
                                                <span className="input-require"><b>*</b>Indicates required</span>
                                                <div className="mailForm">
                                                    <MailChimpForm successHandler={() => setIsShowCalendar(true)}/>
                                                </div>
                                                <span className="lower-text"><b>100% Free.</b> No Credit Card Needed</span>
                                            </div>

                                        </div>
                                        
                                        <div className="checkpoints-mobile">
                                            <div className="check-box">
                                                <img className="check-img" src={modalCheck}/>
                                                <label>7 Step Plan Download</label>
                                            </div>

                                            <div className="check-box">
                                                <img  className="check-img" src={modalCheck}/>
                                                <label>“How Its Works” Video</label>
                                            </div>

                                            <div className="check-box">
                                                <img className="check-img" src={modalCheck}/>
                                                <label>Free Strategy Session</label>
                                            </div>
                                        </div>
                            </div>
                        }
                </div>
                    
                    
                    : null               
                }

            </div> */