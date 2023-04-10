import "./style.scss";
import headerLogo from "../../assets/images/header-img/headerLogo.png";
import sideClose from "../../assets/images/header-img/side-close.png";
import { Link } from "react-router-dom";
import React, {useState, useEffect} from "react";

const MobNav = () => {

    const handleRemove = () => {
        let element = document.getElementById("home");
        element.classList.remove("active");
    }

    const [isOpen, setIsOpen] = useState(false)
    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });
    
    const isSticky = (e) => {
    const header = document.querySelector('.sidebar-main');
    const scrollTop = window.scrollY;
    scrollTop >= 1 ? header.classList.add('is-sticky-mobile') : header.classList.remove('is-sticky-mobile');
    };
    return(
        <div className="sidebar-main">                    
            
            <div className={isOpen? "sidebar-header" : "sidebar-header-closed"}>
                
                <div className="sidebar-box">
                    
                    <div className="sidebar-logo">
                        <img src={headerLogo}/>
                        <p className={isOpen ? "sidebar-logoText" : "logoText-open"}>
                            Empire
                            Client
                            Generator</p>
                    </div>

                    <div className="sidebar-icon" onClick={toggleOpen}>
                        {!isOpen ? <div className="burger-menu">
                                        <span className="bar1"></span>
                                        <span className="bar2"></span>
                                        <span className="bar3"></span>
                                    </div>
                                : <img className="sidebar-image" src={sideClose}/>}
                    </div>

                </div>
                            
                <div className={isOpen ? "links" :"links-hide"} onClick={toggleOpen}>
                {
                        [
                            {title:"HOME", path:"/"},
                            {title:"MARKETING", path:"/marketing"},
                            {title:"PUBLIC RELATIONS", path:"/publicrelations"},
                            {title:"BRANDING", path:"/brand"},
                            {title:"WEB3 MARKETING", path:"/webmarketing"},
                            {title:"DEVELOPMENT", path:"/appdev"}
                        ].map(item=> 
                            <div onClick={handleRemove}>
                                <Link   to={item.path}
                                      className={item.path === window.location.pathname ? "active" : null}
                                      id={item.path === window.location.pathname ? "home" : null}
                                ><span>{item.title}</span></Link>
                            </div>
                        )
                    }
                </div>

            </div>

        </div>
    )
}

export default MobNav;


/*
before links active state
import "./style.scss";
import headerLogo from "../../assets/images/header-img/headerLogo.png";
import sideClose from "../../assets/images/header-img/side-close.png";
import { Link } from "react-router-dom";
import React, {useState, useEffect} from "react";

const MobNav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });
    
    const isSticky = (e) => {
    const header = document.querySelector('.sidebar-main');
    const scrollTop = window.scrollY;
    scrollTop >= 1 ? header.classList.add('is-sticky-mobile') : header.classList.remove('is-sticky-mobile');
    };
    return(
        <div className="sidebar-main">                    
            
            <div className={isOpen? "sidebar-header" : "sidebar-header-closed"}>
                
                <div className="sidebar-box">
                    
                    <div className="sidebar-logo">
                        <img src={headerLogo}/>
                        <p className={isOpen ? "sidebar-logoText" : "logoText-open"}>
                            Empire
                            Client
                            Generator</p>
                    </div>

                    <div className="sidebar-icon" onClick={toggleOpen}>
                        {!isOpen ? <div className="burger-menu">
                                        <span className="bar1"></span>
                                        <span className="bar2"></span>
                                        <span className="bar3"></span>
                                    </div>
                                : <img className="sidebar-image" src={sideClose}/>}
                    </div>

                </div>
                            
                <div className={isOpen ? "links" :"links-hide"} onClick={toggleOpen}>
                        <Link to="/"><span>HOME</span></Link>
                        <Link to="/publicrelations"><span>PUBLIC RELATIONS</span></Link>
                        <Link to="/marketing"><span>MARKETING</span></Link>
                        <Link to="/brand"><span>BRANDING</span></Link>
                        <Link to="/webmarketing"><span>WEB MARKETING</span></Link>
                        <Link to="/appdev"><span>APP DEVELOPMENT</span></Link>
                </div>

            </div>

        </div>
    )
}

export default MobNav;

*/