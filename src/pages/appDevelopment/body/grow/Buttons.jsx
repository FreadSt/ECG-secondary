import "./style.scss";
import {useState} from "react";

const Buttons = () => {
    const cards = {1: {title: 'Research', message: 'Before we strategize on how to achieve your goals, we look into what your competitors are doing. Our comprehensive competitor research covers everything from design, and website speeds to branding preferences and developing high-level mapping so that we can identify how to get your business to #1 on Google.'}, 
                    2: {title: 'Project preparation', message: 'We gather all of the information and develop strategies designed to meet the needs of our clients and their market conditions. Our goal is to develop a workable plan that is realistic, executable, and profitable. Your application strategy should produce consistent results over time'}, 
                    3: {title: 'Interfaces', message: 'The user experience when browsing your applications is critical. We inspire users to take full advantage of powerful and accessible interfaces. We use advanced techniques to ensure a coherent design throughout the entire customer journey'},
                    4: {title: 'Development', message: 'Our certified developers specialize in developing secure, reliable, scalable, and user-friendly applications. Our team works with various databases and APIs and can implement scaling and integration with other services'},
                    5: {title: 'Testing', message: 'In order to ensure the proper work of the applications we develop, our expert testers will conduct testing to prevent bugs, reduce development costs, and improve performance. It helps to enhance the quality of your applications while maximizing ROI'},
                    6: {title: 'Support', message: 'Our dedicated customer service team is friendly and efficient. Our goal is to help you keep your platform secure and up-to-date. Regular updates to an application can prolong its use by several years and facilitate your next enhancements'}
                };
    const [isClicked, setIsClicked] = useState(1);
    
    console.log(isClicked, "isClick");

    const handleRemove = () => {
        let element = document.getElementById("main-btn");
        element.classList.remove("active");
    }
    
    return (
        <div className="grow-box">
            <div className="buttons">
                {
                    [
                        {btnTitle:"1. Research", btnIndex:1},
                        {btnTitle:"2. Project preparation", btnIndex:2},
                        {btnTitle:"3. Interfaces", btnIndex:3},
                        {btnTitle:"4. Development", btnIndex:4},
                        {btnTitle:"5. Testing", btnIndex:5},
                        {btnTitle:"6. Support", btnIndex:6},
                    ].map(btnCount=>
                        <div key={btnCount.btnIndex}
                            onClick={() => setIsClicked(btnCount.btnIndex)}
                            onChange={() =>handleRemove()}
                            className="button-container">
                                <button 
                                    className={isClicked === btnCount.btnIndex ? "active" : "grow-button"} 
                                    id={isClicked === 1 ? "main-btn" : null}><p>{btnCount.btnTitle}</p></button>
                        </div>
                    )
                }
            </div>

            <div  className="card-main">
                <span>{cards[isClicked].title}</span>
                <p>{cards[isClicked].message}</p>
            </div>

            <div className="mob_btn-box">
                {
                    [
                        {btnTitle:"1", btnIndex:1},
                        {btnTitle:"2", btnIndex:2},
                        {btnTitle:"3", btnIndex:3},
                        {btnTitle:"4", btnIndex:4},
                        {btnTitle:"5", btnIndex:5},
                        {btnTitle:"6", btnIndex:6},
                    ].map(btnCount=>
                        <div key={btnCount.btnIndex} className="mob_button-container"
                        onChange={() =>handleRemove()}
                        onClick={() => setIsClicked(btnCount.btnIndex)}
                        >
                            <button 
                            className={isClicked === btnCount.btnIndex ? "active" : "mob-button"}
                            id={isClicked === 1 ? "main-btn" : null}
                            ><p>{btnCount.btnTitle}</p></button>
                        </div>
                    )
                }
            </div>
            <div  className="mob-cards">
                <span>{cards[isClicked].title}</span>
                <p>{cards[isClicked].message}</p>
            </div>
        </div>
    )
}

export default Buttons;

/*<div key={btnCount.btnIndex} 
                            onClick={() => setIsClicked(btnCount.btnIndex)} 
                            className="button-container">
                            <button className="grow-button"><p>{btnCount.btnTitle}</p></button>
                        </div> */