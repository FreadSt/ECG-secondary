import "./style.scss";
import img1 from "../../../../assets/sixthpage-images/body-img/industries/img1.png";
import img2 from "../../../../assets/sixthpage-images/body-img/industries/img2.png";
import img3 from "../../../../assets/sixthpage-images/body-img/industries/img3.png";
import img4 from "../../../../assets/sixthpage-images/body-img/industries/img4.png";
import img5 from "../../../../assets/sixthpage-images/body-img/industries/img5.png";
import img6 from "../../../../assets/sixthpage-images/body-img/industries/img6.png";
import img7 from "../../../../assets/sixthpage-images/body-img/industries/img7.png";
import img8 from "../../../../assets/sixthpage-images/body-img/industries/img8.png";
import img9 from "../../../../assets/sixthpage-images/body-img/industries/img9.png";
import img10 from "../../../../assets/sixthpage-images/body-img/industries/img10.png";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css";

const industryPic = [img1,img2,img3,img4,img5,img6,img7,img8,img9, img10]

const Industries = () => {
 return(
    <div className="industries-container">
        {
            [
                {img:industryPic[0], title:"On-demand"},
                {img:industryPic[1], title:"Finance"},
                {img:industryPic[2], title:"E-commerce"},
                {img:industryPic[3], title:"Social Networks"},
                {img:industryPic[4], title:"DApps"},
                {img:industryPic[5], title:"Real Estate"},
                {img:industryPic[6], title:"Healthcare"},
                {img:industryPic[7], title:"Grocery"},
                {img:industryPic[8], title:"Education"},
                {img:industryPic[9], title:"Tour & Travels"},
            ].map(imgCount => 
                    <div className="card" key={imgCount.img}>
                        <div className="animated-ind">
                            <ScrollAnimation animateIn="animate__rollIn">
                                <img src={imgCount.img}/>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="animate__zoomInRight">
                                <p>{imgCount.title}</p>
                            </ScrollAnimation>
                        </div>

                        <div className="mob-ind">
                            <img src={imgCount.img}/>
                            <p>{imgCount.title}</p>
                        </div>    
                    </div>
                )
        }
    </div>
 )
}

export default Industries;