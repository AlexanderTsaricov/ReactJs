import React from "react";
import footerIcon from "../../../pic/footer_icon.png";

function SecondFooter() {
    return (
        <section className="bigFooter_secondFooter contentCenter">
            <div className="bigFooter_secondFooter_commentBox">
                <img src={footerIcon} alt="photo" className="bigFooter_secondFooter_commentBox_img" />
                <p className="bigFooter_secondFooter_commentBox_comment">
                    “Vestibulum quis porttitor dui! Quisque viverra nunc mi,
                    <span className="italic">a pulvinar purus condimentum“</span>
                </p>
            </div>
            <div className="bigFooter_secondFooter_enterEmailBox">
                <h2 className="bigFooter_secondFooter_enterEmailBox_headText">SUBSCRIBE</h2>
                <p className="bigFooter_secondFooter_enterEmailBox_text">FOR OUR NEWLETTER AND PROMOTION</p>
                <div className="imputBox">
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="bigFooter_secondFooter_enterEmailBox_email"
                    />
                    <button type="submit" className="bigFooter_secondFooter_enterEmailBox_button">
                        Subscribe
                    </button>
                </div>
            </div>
        </section>
    );
}

export default SecondFooter;
