import "./style.scss";
import one from "../../../../assets/fourthpage-images/body-img/benefits/one.png";
import two from "../../../../assets/fourthpage-images/body-img/benefits/two.png";
import three from "../../../../assets/fourthpage-images/body-img/benefits/three.png";
import four from "../../../../assets/fourthpage-images/body-img/benefits/four.png";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css";

const blockPic = [one, two, three, four]

const Benefits = () => {
    return(
        <div className="benefits-box">
            {
                [
                    {image:blockPic[0], title:"High level recognition", 
                        description:"Your product or service is fighting for consumers' attention. We will make it stand out among your competitors by positioning your brand the right way in the market."},
                    {image:blockPic[3], title:"Boost customer loyalty", 
                        description:"Having a solid brand requires quickly capturing consumers' attention and gaining their trust. Our experts are capable of building customer loyalty for your business."},
                    {image:blockPic[2], title:"Impactful brand image", 
                        description:"Your brand's DNA must be clear in every form of appearance. From logos, font, color, to everything else that makes up your brand. We can develop the necessary branding elements needed for success."},
                    {image:blockPic[1], title:"Increased revenue", 
                        description:"The more effort you put into building brand value, the greater the financial return. We will help you build a brand that leads customers to buy more, pay more, and make quicker purchase decisions."},
                ].map(imageNum =>
                        <div className="benefits-block">
                            <div className="web-benefits">
                                <div className="benefits-title">
                                    <ScrollAnimation animateIn="animate__fadeInTopLeft">
                                        <img src={imageNum.image}/>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn="animate__fadeInTopRight">
                                        <h3>{imageNum.title}</h3>
                                    </ScrollAnimation>
                                </div>
                                <ScrollAnimation animateIn="animate__flash">
                                    <p>{imageNum.description}</p>
                                </ScrollAnimation>
                            </div>

                            <div className="mob-benefits">
                                <div className="benefits-title">
                                    <img src={imageNum.image}/>
                                    <h3>{imageNum.title}</h3>
                                </div>
                                <p>{imageNum.description}</p>
                            </div>
                        </div>
                    )
                }
        </div>
    )
}

export default Benefits;