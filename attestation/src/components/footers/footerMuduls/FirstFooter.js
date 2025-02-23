import React from "react";
import car from "../../../inons/car.svg";
import percent from "../../../inons/percent.svg";
import crown from "../../../inons/crown.svg";

function FirstFooter() {
    return (
        <section className="bigFooter_firstFooter contentCenter">
            <article className="bigFooter_firstFooter_box">
                <img src={car} alt="icon" />
                <h2 className="bigFooter_firstFooter_box_headerText">Free Delivery</h2>
                <p className="bigFooter_firstFooter_box_text">
                    Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
                </p>
            </article>
            <article className="bigFooter_firstFooter_box">
                <img src={percent} alt="" />
                <h2 className="bigFooter_firstFooter_box_headerText">Sales & discounts</h2>
                <p className="bigFooter_firstFooter_box_text">
                    Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
                </p>
            </article>
            <article className="bigFooter_firstFooter_box">
                <img src={crown} alt="" />
                <h2 className="bigFooter_firstFooter_box_headerText">Quality assurance</h2>
                <p className="bigFooter_firstFooter_box_text">
                    Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
                </p>
            </article>
        </section>
    );
}

export default FirstFooter;
