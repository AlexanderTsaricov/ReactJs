import React from "react";
import car from "../../../inons/car.svg";
import percent from "../../../inons/percent.svg";
import crown from "../../../inons/crown.svg";

function FirstFooter() {
    return (
        <section class="bigFooter_firstFooter contentCenter">
            <article class="bigFooter_firstFooter_box">
                <img src={car} alt="icon" />
                <h2 class="bigFooter_firstFooter_box_headerText">Free Delivery</h2>
                <p class="bigFooter_firstFooter_box_text">
                    Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
                </p>
            </article>
            <article class="bigFooter_firstFooter_box">
                <img src={percent} alt="" />
                <h2 class="bigFooter_firstFooter_box_headerText">Sales & discounts</h2>
                <p class="bigFooter_firstFooter_box_text">
                    Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
                </p>
            </article>
            <article class="bigFooter_firstFooter_box">
                <img src={crown} alt="" />
                <h2 class="bigFooter_firstFooter_box_headerText">Quality assurance</h2>
                <p class="bigFooter_firstFooter_box_text">
                    Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
                </p>
            </article>
        </section>
    );
}

export default FirstFooter;
