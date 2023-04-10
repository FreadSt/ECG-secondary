import MailchimpSubscribe from "react-mailchimp-subscribe";
import { useState } from "react";
import popUpBtn from "../../../assets/images/body-img/popUpBtn.png";
import "./style.scss";
import React from "react";
import Mailchimp from "./maichimpForm";


const MailChimpForm = props => {
    return(
        <div className="mailchimpForm">
            <Mailchimp
                action = "https://empireclientgen.us14.list-manage.com/subscribe/post?u=8c27f274ef998ae0c65ae818f&id=57bba77357"
                fields={[
                    {
                        name: 'FNAME',
                        placeholder:'Your Name',
                        type:'text',
                        required: true
                    },
                    {
                        name: 'EMAIL',
                        placeholder:'Your email adress',
                        type:'email',
                        required: true
                    },
                    {
                        name: 'PHONE',
                        placeholder:'Your mobile phone',
                        type:'phone',
                        required: true
                    }
                ]}
                successHandler={props.successHandler}
                messages = {
                    {
                      sending: "Sending...",
                      success: "Thank you for subscribing!",
                      error: "An unexpected internal error has occurred.",
                      empty: "You must write an e-mail.",
                      duplicate: "Too many subscribe attempts for this email address",
                      button: "Give it To Me!"
                    }
                }
                className="MailChimp-style"
            />
            <img className="asd" src={popUpBtn}/>
        </div>
    )
}

export default MailChimpForm;