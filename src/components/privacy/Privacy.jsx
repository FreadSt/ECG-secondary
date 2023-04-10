import "./style.scss";
import smile from "../../assets/images/footer-img/footerSmile.png";
import footerSmile from "../../components/privacy/EmpireLogoMono.svg"

const Privacy = () => {
    return(
        <div className="privacy">
            <div className="inner-container">
                <div className="image-block">
                    <img src={footerSmile}/>
                </div>

                <div className="text-container">
                    <div className="inner-content">
                        <span className="first-span">Copyright © 2023</span>
                        <span className="second-span">Empire Client Generator LLC.</span>
                    </div>
                    <div className="inner-content">
                        <span className="third-span">Phone: 1 877 295 2465</span> 
                        <span className="fourth-span">E-mail: info@empireclientgen.com.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Privacy;