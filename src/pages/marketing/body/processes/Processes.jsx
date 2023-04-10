import "./style.scss";
import one from "../../../../assets/thirdpage-images/body-img/icons/one.png";
import two from "../../../../assets/thirdpage-images/body-img/icons/two.png";
import three from "../../../../assets/thirdpage-images/body-img/icons/three.png";
import four from "../../../../assets/thirdpage-images/body-img/icons/four.png";
import five from "../../../../assets/thirdpage-images/body-img/icons/five.png";
import six from "../../../../assets/thirdpage-images/body-img/icons/six.png";
import seven from "../../../../assets/thirdpage-images/body-img/icons/seven.png";
import nineth from "../../../../assets/thirdpage-images/body-img/icons/nineth.png";
import seventh from "../../../../assets/thirdpage-images/body-img/icons/seventh.png";
import thirteenth from "../../../../assets/thirdpage-images/body-img/icons/thirteenth.png";
import third from "../../../../assets/thirdpage-images/body-img/icons/third.png";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css";

const iconsData = [one, two, three, four, five, six, seven,
                    nineth,seventh,third,thirteenth]

const Processes = () => {
    return(
        <div className="processes">

            <div className="block-transition">
                <hr/>
            </div>

            <div className="first-process">
                <div className="process-name">
                    <ScrollAnimation animateIn="animate__lightSpeedInLeft">
                        <h1>LAUNCH</h1>                        
                        <p>Increase brand recognition</p>
                    </ScrollAnimation>
                </div>
                <div className="process-points">
                {
                        [
                            {image:iconsData[9], title:"Search Engine Optimization", description:"Improve your traffic flow and increase your website conversions"},
                            {image:iconsData[0], title:"Influencer marketing ", description:"Help your brand engage and activate audiences worldwide through top influencers"},
                            {image:iconsData[7], title:"Social Media marketing", description:"Build solid brand identity and engage with your audience"},
                            {image:iconsData[10], title:"Pay-Per-Click Process", description:"Help your brand exposure and ensure every dollar is well spent"},
                        ].map(iconNum =>
                            <div className="process-block">
                                <ScrollAnimation animateIn="animate__zoomInLeft">
                                    <img src={iconNum.image}/>
                                </ScrollAnimation>
                                <div className="process-des">
                                <ScrollAnimation animateIn="animate__zoomInRight">
                                    <h3>{iconNum.title}</h3>
                                    <p>{iconNum.description}</p>
                                </ScrollAnimation>
                                </div>
                            </div>
                            )
                }
                </div>
            </div>

            <div className="block-transition">
                <hr/>
            </div>

            <div className="second-process">
                <div className="process-name">
                    <ScrollAnimation animateIn="animate__lightSpeedInLeft">
                        <h1>DEVELOP</h1>                        
                        <p>Leads and personal relationships</p>
                    </ScrollAnimation>
                </div>
                <div className="process-points">
                {
                        [
                            {image:iconsData[8], title:"Affiliate Marketing", 
                                description:"Find and select the best affiliates with a proven track record for your business"},
                            {image:iconsData[6], title:"Content Marketing ", 
                                description:"We've got your entire content marketing funnel covered"},
                            {image:iconsData[4], title:"Paid Social Prospecting", 
                                description:"Identify, research, and engage with your prospective new customers"},
                            {image:iconsData[1], title:"Public Relations", 
                                description:"Generate positive publicity and enhance your brand reputation"},
                        ].map(iconNum =>
                                    <div className="process-block">
                                        <ScrollAnimation animateIn="animate__zoomInLeft">
                                            <img src={iconNum.image}/>
                                        </ScrollAnimation>
                                        <div className="process-des">
                                        <ScrollAnimation animateIn="animate__zoomInRight">
                                            <h3>{iconNum.title}</h3>
                                            <p>{iconNum.description}</p>
                                        </ScrollAnimation>
                                        </div>
                                    </div>
                            )
                }
                </div>
            </div>

            <div className="block-transition">
                <hr/>
            </div>

            <div className="third-process">
                <div className="process-name">
                    <ScrollAnimation animateIn="animate__lightSpeedInLeft">
                        <h1>CONVERT</h1>                        
                        <p>Customers and increase income</p>
                    </ScrollAnimation>
                </div>
                <div className="process-points">
                {
                        [
                            {image:iconsData[5], title:"Chief Reputation Officer", 
                                description:"Chief Reputation Officer will help you to focus on the essentials in building a reliable, recognizable brand"},
                            {image:iconsData[2], title:"Email Marketing", 
                                description:"Develop tailored marketing campaigns that give you the best return on your investment"},
                            {image:iconsData[3], title:"Competent Retargeting", 
                                description:"Turns window shoppers into paying customers by retargeting those interested in your products"},
                        ].map(iconNum =>
                                <ScrollAnimation animateIn="animate__zoomInUp">
                                    <div className="process-block">
                                        <img src={iconNum.image}/>
                                        <div className="process-des">
                                            <h3>{iconNum.title}</h3>
                                            <p>{iconNum.description}</p>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                                    
                            )
                }
                </div>
            </div>   

            <div className="block-transition">
                <hr/>
            </div>

        </div>
    )
}

export default Processes;


