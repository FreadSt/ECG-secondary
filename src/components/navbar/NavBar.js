import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { InfoBox } from "./outsideClick/OutClick";
import { useLocation } from 'react-router-dom';

import headerLogo from "../../assets/images/header-img/headerLogo.png";
import alert from "../../assets/images/header-img/alert.png";
import "./style.scss";

const NavBar = () => {
    const location = useLocation();
    let [showInfo1, setShowInfo1] = useState(false);

    const handleRemove = () => {
        let element = document.getElementById("home");
        element.classList.remove("active");
    }

    const [isOpen, setIsOpen] = useState(false)

    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(true)
        setTimeout(() => {
            setIsClicked(false);
        },2000);
    }

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    },[]);

    useEffect(() => {
        console.log(location, "location")
    },[location])
    
    const isSticky = (e) => {
    const header = document.querySelector('.header-section');
    const scrollTop = window.scrollY;
    scrollTop >= 1 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
    };
    
    return(
        <header className="header-section d-none d-xl-block">
            <InfoBox show={showInfo1} onClickOutside={() => {setShowInfo1(false)}} style={{width:"0px", height:"0px"}}/>
                    {
                        isClicked &&
                        <div className="ouch">
                            <img className="alert-img" src={alert}/>
                            <p>
                                Ouch!That Hurts!
                            </p>
                        </div>
                    }
                    <div className="header-logo" onClick={handleClick}>
                        <img src={headerLogo} />
                        <p>Empire
                            Client
                            Generator</p>
                    </div>
                        
                <div className="header-panel" onClick={handleRemove}>
                    {
                        [
                            {title:"HOME", path:"/"},
                            {title:"MARKETING", path:"/marketing"},
                            {title:"PUBLIC RELATIONS", path:"/publicrelations"},
                            {title:"BRANDING", path:"/brand"},
                            {title:"WEB3 MARKETING", path:"/webmarketing"},
                            {title:"DEVELOPMENT", path:"/appdev"}
                        ].map(item=> 
                            <div onClick={() => {setShowInfo1(true)}}>
                                <Link to={item.path}
                                      className={item.path === location.pathname ? "active" : null}
                                      id={item.path === location.pathname ? "home" : null}
                                ><span>{item.title}</span></Link>
                            </div>
                        )
                    }
                    
                </div>            
        </header>
    )

}
console.log(window.location.pathname, "path")

export default NavBar;

/* <Link to="/" id="home" className="active" ><span>HOME</span></Link>
                    <Link to="/marketing" ><span>MARKETING</span></Link>
                    <Link to="/publicrelations" ><span>PUBLIC RELATIONS</span></Link>
                    <Link to="/brand"><span>BRANDING</span></Link>
                    <Link to="/webmarketing"><span>WEB3 MARKETING</span></Link>
                    <Link to="/appdev"><span>DEVELOPMENT</span></Link> */