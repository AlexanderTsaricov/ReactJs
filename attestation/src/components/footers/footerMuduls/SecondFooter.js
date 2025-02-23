import React from "react";
import footerIcon from "../../../pic/footer_icon.png";

function SecondFooter() {
    return (
        <section class="bigFooter_secondFooter contentCenter">
            <div class="bigFooter_secondFooter_commentBox">
                <img src={footerIcon} alt="photo" class="bigFooter_secondFooter_commentBox_img" />
                <p class="bigFooter_secondFooter_commentBox_comment">
                    “Vestibulum quis porttitor dui! Quisque viverra nunc mi,
                    <span class="italic">a pulvinar purus condimentum“</span>
                </p>
            </div>
            <div class="bigFooter_secondFooter_enterEmailBox">
                <h2 class="bigFooter_secondFooter_enterEmailBox_headText">SUBSCRIBE</h2>
                <p class="bigFooter_secondFooter_enterEmailBox_text">FOR OUR NEWLETTER AND PROMOTION</p>
                <div class="imputBox">
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        class="bigFooter_secondFooter_enterEmailBox_email"
                    />
                    <button type="submit" class="bigFooter_secondFooter_enterEmailBox_button">
                        Subscribe
                    </button>
                </div>
            </div>
        </section>
    );
}

export default SecondFooter;
