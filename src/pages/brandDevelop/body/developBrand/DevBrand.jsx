import "./style.scss";
import devpic1 from "../../../../assets/fourthpage-images/body-img/secondBlock/devpic1.png";
import devpic2 from "../../../../assets/fourthpage-images/body-img/secondBlock/devpic2.png";
import devpic3 from "../../../../assets/fourthpage-images/body-img/secondBlock/devpic3.png";
import devpic4 from "../../../../assets/fourthpage-images/body-img/secondBlock/devpic4.png";
import devpic5 from "../../../../assets/fourthpage-images/body-img/secondBlock/devpic5.png";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css";

const devPicArr = [devpic1, devpic2, devpic3, devpic4, devpic5]

const DevBrand = () => {
    return(
        <div className="devBrands-box">
            {
                [   
                    {image:devPicArr[3], title:"Do the Research", 
                        description:"First, we dive deep into understanding who your buyers are, your specific market, and what your competitors are doing"},
                    {image:devPicArr[1], title:"Choose the focus", 
                        description:"We define your unique selling proposition (USP) and help your products and services stand out from your competitors"},
                    {image:devPicArr[4], title:"Choose the name", 
                        description:"We help you choose a name that resonates with your target audience, sticks in their minds, and remains relevant as your company evolves"},
                    {image:devPicArr[0], title:"Write a slogan", 
                        description:"We set a slogan and brand voice that spans across all content, media, and messaging to continuously enhance your brand"},
                    {image:devPicArr[2], title:"Create a design", 
                        description:"We will consult you through this process to determine what colors, lines, and curves are best for your brand."}    
                ].map(imageNum =>
                    <div className="devBrands-block">
                        <div className="web-branding">
                            <ScrollAnimation animateIn="animate__fadeIn">
                                <div className="debBrands-title">
                                    <img src={imageNum.image}/>
                                    <h3>{imageNum.title}</h3>
                                </div>    
                                <p>{imageNum.description}</p>
                            </ScrollAnimation>
                        </div>
                        <div className="mob-branding">
                            <div className="debBrands-title">
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

export default DevBrand;

/*{
                [
                    {image:devPicArr[0], title:"High level recognition", 
                        description:"Your product or service is fighting for consumers' attention. We will make it stand out among your competitors by positioning your brand the right way in the market."},
                    {image:devPicArr[3], title:"Boost customer loyalty", 
                        description:"Having a solid brand requires quickly capturing consumers' attention and gaining their trust. Our experts are capable of building customer loyalty for your business."},
                    {image:devPicArr[2], title:"Impactful brand image", 
                        description:"Your brand's DNA must be clear in every form of appearance. From logos, font, color, to everything else that makes up your brand. We can develop the necessary branding elements needed for success."},
                    {image:devPicArr[1], title:"Increased revenue", 
                        description:"The more effort you put into building brand value, the greater the financial return. We will help you build a brand that leads customers to buy more, pay more, and make quicker purchase decisions."},
                ].map(imageNum =>
                    <div className="benefits-block">
                        <div className="benefits-title">
                            <img src={imageNum.image}/>
                            <h3>{imageNum.title}</h3>
                        </div>    
                        <p>{imageNum.description}</p>
                    </div>
                    )
                } */