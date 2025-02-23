import React from "react";

function RegReclamBox() {
    return (
        <div className="reclamBox">
            <h1 className="reclamBox__headerText">LOYALTY HAS ITS PERKS</h1>
            <p className="reclamBox__discription">
                Get in on the loyalty program where you can earn points and unlock serious perks. Starting with these as
                soon as you join:
            </p>
            <ul className="reclamBox__list">
                <li className="reclamBox__li">15% off welcome offer</li>
                <li className="reclamBox__li">Free shipping, returns and exchanges on all orders</li>
                <li className="reclamBox__li">$10 off a purchase on your birthday</li>
                <li className="reclamBox__li">Early access to products</li>
                <li className="reclamBox__li">Exclusive offers & rewards</li>
            </ul>
        </div>
    );
}

export default RegReclamBox;
