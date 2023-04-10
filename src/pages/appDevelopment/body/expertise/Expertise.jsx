import "./style.scss";
import pic1 from "../../../../assets/sixthpage-images/body-img/expertise/pic1.png";
import pic2 from "../../../../assets/sixthpage-images/body-img/expertise/pic2.png";
import pic3 from "../../../../assets/sixthpage-images/body-img/expertise/pic3.png";
import pic4 from "../../../../assets/sixthpage-images/body-img/expertise/pic4.png";
import pic5 from "../../../../assets/sixthpage-images/body-img/expertise/pic5.png";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css";

const expertisePic = [pic1, pic2, pic3, pic4, pic5];

const Expertise = () => {
    return(
        <div className="expertise-container">
            {   
                [
                    {
                        image:expertisePic[0], 
                        title:"Digital Consulting", 
                        des:"We have developed unique websites by closely working with our clients, from research to providing the ideal foundation and strategy."
                    },
                    {
                        image:expertisePic[1], 
                        title:"Web Design & Development", 
                        des:"We aim to create simple, easy-to-use bespoke websites which provide easy navigation and an instant understanding of a business."
                    },
                    {
                        image:expertisePic[2], 
                        title:"UX/UI Design", 
                        des:"We make pixel-perfect, jaw-dropping designs, following the latest trends and best practices."
                    },
                    {
                        image:expertisePic[3], 
                        title:"Custom Software Dev", 
                        des:"We help develop software products and execute its end-to-end implementation at speed, with an eye for scaling and growth."
                    },
                    {
                        image:expertisePic[4], 
                        title:"Mobile App Solutions", 
                        des:"Immersive mobile app solutions that improve businesses and provide excellent customer service."
                    },
                ].map(imageCount => 
                        <div className="container" key={imageCount.image}>
                            <div className="animated-web">
                                <div className="title">
                                    <ScrollAnimation animateIn="animate__fadeInDownBig">
                                        <img src={imageCount.image} alt=""/>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn="animate__fadeInUpBig">
                                        <span>{imageCount.title}</span>
                                    </ScrollAnimation>
                                </div>
                                <ScrollAnimation animateIn="animate__lightSpeedInLeft">
                                    <p>{imageCount.des}</p>
                                </ScrollAnimation>
                            </div>
                            
                            <div className="mob-expertise">
                                <div className="title">
                                        <img src={imageCount.image} alt=""/>
                                        <span>{imageCount.title}</span>
                                </div>
                                <p>{imageCount.des}</p>
                            </div>
                            
                        </div>
                        
                    )
            }
        </div>
    )
}

export default Expertise;