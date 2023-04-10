import "./style.scss"
import smile1 from "../../../../assets/images/body-img/1st-block-images/smile1.png";
import smile2 from "../../../../assets/images/body-img/1st-block-images/smile2.png";
import smile3 from "../../../../assets/images/body-img/1st-block-images/smile3.png";
import smile4 from "../../../../assets/images/body-img/1st-block-images/smile4.png";
import smile5 from "../../../../assets/images/body-img/1st-block-images/smile5.png";
import smile6 from "../../../../assets/images/body-img/1st-block-images/smile6.png";
import redarrow from "../../../../assets/images/body-img/1st-block-images/redarrow.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { InfoBox } from "../../../../components/navbar/outsideClick/OutClick";

const imageArr = [smile1,smile2,smile3,smile4,smile5,smile6,redarrow]


const Cards = () => {
    console.log(window.location.pathname, "path")
    const handleRemove = () => {
        let element = document.getElementById("home");
        element.classList.remove("active");
    }

    console.log(handleRemove, "handleremove")
    return(
        <div className="card-container" onClick={handleRemove}>
                {
                    [
                        {img:imageArr[0], des:"Exceed your goals with the right digital marketing strategy", icon:imageArr[6], path:"/brand"},
                        {img:imageArr[1], des:"Improve your ROI with a scalable marketing model", icon:imageArr[6], path:"/marketing"},
                        {img:imageArr[2], des:"Set your business up for long-term success", icon:imageArr[6], path:"/webmarketing"},
                        {img:imageArr[3], des:"Find your financial leaks and plug them now", icon:imageArr[6], path:"/marketing"},
                        {img:imageArr[4], des:"Elevate your business with content that sells", icon:imageArr[6], path:"/publicrelations"},
                        {img:imageArr[5], des:"Get a visually appealing website that wins customers", icon:imageArr[6], path:"/appdev"},
                    ].map(item=> 
                        <div className="cards">
                                <Link
                                    key={item.des}
                                    to={item.path}
                                    className={item.path === window.location.pathname ? "active" : null}
                                    id={item.path === window.location.pathname ? "home" : null}
                                    >
                                        <div className="card-text">
                                            <img className="smile" src={item.img}/>
                                            <p>{item.des}</p>
                                        </div>
                                        <img className="arrow" src={item.icon}/>
                                </Link>
                        </div>
                    )
                }
        </div>
    )
}

export default Cards;

/*<div className="cards">
                <div className="card-text">
                    <img className="smile" src={smile1}/>
                    <p>Exceed your goals with the right digital marketing strategy</p>
                </div>
                <img className="arrow" src={redarrow}/>
            </div>
            
            <div className="cards">
                <div className="card-text">
                    <img className="smile" src={smile2}/>
                    <p>Improve your ROI with a scalable marketing model</p>
                </div>
                <img className="arrow" src={redarrow}/>

            </div>  

            <div className="cards">
                <div className="card-text">
                    <img className="smile" src={smile3}/>
                    <p>Set your business up for long-term success</p>
                </div>
                <img className="arrow" src={redarrow}/>
            </div>
            
            <div className="cards">
                <div className="card-text">
                    <img className="smile" src={smile4}/>
                    <p>Find your financial leaks and plug them now</p>
                </div>
                <img className="arrow" src={redarrow}/>
            </div>

            <div className="cards">
                <div className="card-text">
                    <img className="smile" src={smile5}/>
                    <p>Elevate your business with content that sells</p>
                </div>
                <img className="arrow" src={redarrow}/>
            </div>

            <div className="cards">
                <div className="card-text">
                    <img className="smile" src={smile6}/>
                    <p>Get a visually appealing website that wins customers</p>
                </div>
                <img className="arrow" src={redarrow}/>
            </div>              */