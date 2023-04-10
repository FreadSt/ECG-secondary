import "./style.scss";
import pic1 from "../../../../assets/fifthpage-images/body-img/influencerMarketing/pic1.png";
import pic2 from "../../../../assets/fifthpage-images/body-img/influencerMarketing/pic2.png";
import pic3 from "../../../../assets/fifthpage-images/body-img/influencerMarketing/pic3.png";
import pic4 from "../../../../assets/fifthpage-images/body-img/influencerMarketing/pic4.png";
import pic5 from "../../../../assets/fifthpage-images/body-img/influencerMarketing/pic5.png";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css";

const inMarketPics = [pic1,pic2,pic3,pic4,pic5]

const InMarketing =() => {
    return(
        <div className="inMarketPics">
            {
                [
                    {image:inMarketPics[0], title:"Reliability"},
                    {image:inMarketPics[1], title:"Privacy and security"},
                    {image:inMarketPics[2], title:"Highly qualified experts"},
                    {image:inMarketPics[3], title:"Comprehensive management"},
                    {image:inMarketPics[4], title:"24/7 support"}
                ].map(imgCount => 
                        <div className="img-box" key={imgCount.image}>
                            <div className="web-in">
                                <ScrollAnimation animateIn="animate__lightSpeedInLeft">
                                    <img src={imgCount.image}/>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="animate__lightSpeedInRight">
                                    <h3>{imgCount.title}</h3>
                                </ScrollAnimation>
                            </div>
                            
                            <div className="mobIn">
                                <img src={imgCount.image}/>
                                <h3>{imgCount.title}</h3>
                            </div>
                        </div>                        
                    )
            }
        </div>
    )
}

export default InMarketing;