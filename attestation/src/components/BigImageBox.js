import React from "react";
import womanOnChair from "../pic/womenOnChair.png";

function BigImageBox() {
    return (
        <div className="bigImageBox">
            <a href="#" className="bigImageBox_arrow">
                <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M47 0H0V47H47V0Z" fill="#2A2A2A" fillOpacity="0.15" />
                    <path
                        d="M29.6998 15.7499L21.9498 23.4999L29.6998 31.2499L28.1498 34.3499L17.2998 23.4999L28.1498 12.6499L29.6998 15.7499Z"
                        fill="black"
                    />
                </svg>
            </a>
            <img className="bigImageBox_image" src={womanOnChair} alt="bigPic" />
            <a href="#" className="bigImageBox_arrow">
                <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M47 0H0V47H47V0Z" fill="#2A2A2A" fillOpacity="0.15" />
                    <path
                        d="M17.2998 31.2499L25.0498 23.4999L17.2998 15.7499L18.8498 12.6499L29.6998 23.4999L18.8498 34.3499L17.2998 31.2499Z"
                        fill="#F16D7F"
                    />
                </svg>
            </a>
        </div>
    );
}

export default BigImageBox;
