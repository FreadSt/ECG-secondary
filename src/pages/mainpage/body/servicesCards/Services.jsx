import "./style.scss";
import first from "../../../../assets/images/body-img/3rd-block-images/first.png";
import second from "../../../../assets/images/body-img/3rd-block-images/second.png";
import third from "../../../../assets/images/body-img/3rd-block-images/third.png";
import fourth from "../../../../assets/images/body-img/3rd-block-images/fourth.png";
import fifth from "../../../../assets/images/body-img/3rd-block-images/fifth.png";
import sixth from "../../../../assets/images/body-img/3rd-block-images/sixth.png";
import seventh from "../../../../assets/images/body-img/3rd-block-images/seventh.png";
import eighth from "../../../../assets/images/body-img/3rd-block-images/eighth.png";
import nineth from "../../../../assets/images/body-img/3rd-block-images/nineth.png";
import tenth from "../../../../assets/images/body-img/3rd-block-images/tenth.png";
import eleventh from "../../../../assets/images/body-img/3rd-block-images/eleventh.png";
import twelfth from "../../../../assets/images/body-img/3rd-block-images/twelfth.png";
import thirteenth from "../../../../assets/images/body-img/3rd-block-images/thirteenth.png";
import fourteenth from "../../../../assets/images/body-img/3rd-block-images/fourteenth.png";

const imageData = [first, second, third, fourth,fifth,sixth,seventh,
                    eighth,nineth,tenth,eleventh,twelfth,thirteenth,fourteenth]

const Services = () => {
    return(
        <div className="cards-container">
            {
                [
                    {image:imageData[0], title:"Unique Branding", description:"Establish culture to win customers' hearts"},
                    {image:imageData[1], title:"Thoughtful Rebranding", description:"Make a new start to improve your brand"},
                    {image:imageData[2], title:"Search Engine Optimization", description:"Drive more organic traffic to your website"},
                    {image:imageData[3], title:"Experience Design", description:"Receive high-rate UX/UI services"},
                    {image:imageData[4], title:"NFT & Crypto Marketing", description:"Successfully launch and market your NFT's crypto projects"},
                    {image:imageData[5], title:"Mobile App Development", description:"Develop a mobile app from scratch"},
                    {image:imageData[6], title:"Marketing Strategy", description:"Tailor-made marketing strategy that converts visitors"},
                    {image:imageData[7], title:"Branding Strategy", description:"Expose your brand in the best format"},
                    {image:imageData[8], title:"Social Media Marketing", description:"Improve your brand image with social media"},
                    {image:imageData[9], title:"Customers Targeting", description:"Convert your visitors into clients"},
                    {image:imageData[10], title:"Website Development", description:"Develop an upscale website from scratch"},
                    {image:imageData[11], title:"Development Strategy", description:"Get instruction on how to create a winning product"},
                    {image:imageData[12], title:"Pay-per-click Process", description:"Get prioritized byGoogle search"},
                    {image:imageData[13], title:"Turnkey Solution", description:"We hand you the keys and you press go"},
                ].map(imagepath => 
                <div className="card" key={imagepath.image}>
                    <img src={imagepath.image}/>
                    <div className="text-container">
                        <h3>{imagepath.title}</h3>
                        <p>{imagepath.description}</p>
                    </div>                                      
                </div>
                )
            }
        </div>
    )
}

export default Services;
