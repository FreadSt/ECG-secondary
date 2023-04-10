import "./style.scss";
import one from "../../../../assets/fifthpage-images/body-img/social/one.png";
import two from "../../../../assets/fifthpage-images/body-img/social/two.png";
import three from "../../../../assets/fifthpage-images/body-img/social/three.png";
import four from "../../../../assets/fifthpage-images/body-img/social/four.png";
import five from "../../../../assets/fifthpage-images/body-img/social/five.png";
import six from "../../../../assets/fifthpage-images/body-img/social/six.png";
import seven from "../../../../assets/fifthpage-images/body-img/social/seven.png";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css";

const smmPic = [one, two, three, four, five, six, seven]

const Social = () => {
    return(
        <div className="smm-pic">
            {
                [
                    {image:smmPic[6], title:"Facebook"},
                    {image:smmPic[0], title:"Twitter"},
                    {image:smmPic[2], title:"Reddit"},
                    {image:smmPic[5], title:"Medium"},
                    {image:smmPic[1], title:"BitcoinTalk"},
                    {image:smmPic[3], title:"LinkedIn"},
                    {image:smmPic[4], title:"Discord"},
                ].map(imagePos=>
                        <div className="social-box" key={imagePos.title}>
                            <div className="web-smm">
                                <ScrollAnimation animateIn="animate__zoomInDown">
                                    <img src={imagePos.image}/>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="animate__zoomInUp">
                                    <h3>{imagePos.title}</h3>
                                </ScrollAnimation>
                            </div>
                            
                            <div className="mob-social">
                                <img src={imagePos.image}/>
                                <h3>{imagePos.title}</h3>
                            </div>
                        </div>
                    )
            }
        </div>
    )
}

export default Social