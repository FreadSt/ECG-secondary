import "./style.scss";
import pic1 from "../../../../assets/fourthpage-images/body-img/disciplines/pic1.png";
import pic2 from "../../../../assets/fourthpage-images/body-img/disciplines/pic2.png";
import pic3 from "../../../../assets/fourthpage-images/body-img/disciplines/pic3.png";
import pic4 from "../../../../assets/fourthpage-images/body-img/disciplines/pic4.png";
import pic5 from "../../../../assets/fourthpage-images/body-img/disciplines/pic5.png";
import pic6 from "../../../../assets/fourthpage-images/body-img/disciplines/pic6.png";
import pic7 from "../../../../assets/fourthpage-images/body-img/disciplines/pic7.png";
import pic8 from "../../../../assets/fourthpage-images/body-img/disciplines/pic8.png";
import pic9 from "../../../../assets/fourthpage-images/body-img/disciplines/pic9.png";
import pic10 from "../../../../assets/fourthpage-images/body-img/disciplines/pic10.png";
import pic11 from "../../../../assets/fourthpage-images/body-img/disciplines/pic11.png";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css";


const disImg = [pic1,pic2,pic3,pic4,pic5,pic6,pic7,
                pic8,pic9,pic10,pic11]

const Disciplines = () => {
    return(
        <div className="disciplines-container">
            {
                [
                    {image:disImg[0], title:"Brand"},
                    {image:disImg[1], title:"Strategy"}, 
                    {image:disImg[2], title:"Naming"}, 
                    {image:disImg[3], title:"Visual"}, 
                    {image:disImg[4], title:"Identity"}, 
                    {image:disImg[5], title:"Art Direction"}, 
                    {image:disImg[6], title:"Print Design"}, 
                    {image:disImg[7], title:"Copywriting"}, 
                    {image:disImg[8], title:"Motion & Animation"}, 
                    {image:disImg[9], title:"Campaign Creation"}, 
                    {image:disImg[10], title:"Rollout & Implementation"} 
                ].map(imageNum =>
                    <div className="discipline-block">
                        <div className="web-dis">
                            <ScrollAnimation animateIn="animate__rollIn">
                                <img src={imageNum.image}/>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="animate__jackInTheBox">
                                <h3>{imageNum.title}</h3>
                            </ScrollAnimation>
                        </div>

                        <div className="mob-dis">
                            <img src={imageNum.image}/>
                            <h3>{imageNum.title}</h3>
                        </div>
                        
                    </div>
                    )
                }
        </div>
    )
}

export default Disciplines;