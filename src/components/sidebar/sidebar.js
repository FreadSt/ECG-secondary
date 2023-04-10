import "./style.scss";
import { Link } from "react-router-dom";
import sidewhite from "../../assets/images/header-img/side-white.png";
import sidedark from "../../assets/images/header-img/side-dark.png";
import sideclose from "../../assets/images/header-img/side-close.png";
import { useState } from "react";

export default function Sidebar() {
    const [open, setopen] = useState(true)
    const toggleOpen = () => {
        setopen(!open)
    }
  return (
    <div className={open? <img src={sidewhite}/>: <img src={sideclose}/>}>
        <button onClick={toggleOpen}>
            {open? <img src={sidedark}/>: <img src={sideclose}/>}
        </button>
    </div>
  )
}

