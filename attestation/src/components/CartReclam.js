import reclam_woman from "../pic/reclam_woman.png";
import reclam_man from "../pic/reclam_man.png";
import reclam_child from "../pic/reclam_child.png";
import reclam_clothers from "../pic/reclam_clothers.png";
import reclam_clothers_small from "../pic/reclam_clothers_small.png";

function CartReclam() {
    return (
        <section className="cartReclam contentCenter">
            <div className="cartReclam_picBox cartReclam_upfirst">
                <img src={reclam_woman} alt="woman" className="cartReclam_picBox_smallPic" />
                <div className="cartReclam_picBox_textBox cartReclam_picBox_woman">
                    <h2 className="cartReclam_picBox_textSmall">30% OFF</h2>
                    <p className="cartReclam_picBox_textBig">FOR WOMEN</p>
                </div>
            </div>

            <div className="cartReclam_picBox cartReclam_upsecond">
                <img src={reclam_man} alt="man" className="cartReclam_picBox_smallPic" />
                <div className="cartReclam_picBox_textBox cartReclam_picBox_man">
                    <p className="cartReclam_picBox_textSmall">HOT DEAL</p>
                    <p className="cartReclam_picBox_textBig">FOR MEN</p>
                </div>
            </div>

            <div className="cartReclam_picBox cartReclam_uplast">
                <img src={reclam_child} alt="child" className="cartReclam_picBox_smallPic" />
                <div className="cartReclam_picBox_textBox cartReclam_picBox_child">
                    <p className="cartReclam_picBox_textSmall">NEW ARRIVALS</p>
                    <p className="cartReclam_picBox_textBig">FOR KIDS</p>
                </div>
            </div>

            <div className="cartReclam_picBox cartReclam_down">
                <img src={reclam_clothers} alt="clothers" className="cartReclam_picBox_bigPic" />
                <img
                    src={reclam_clothers_small}
                    alt=""
                    className="cartReclam_picBox_bigPic cartReclam_picBox_bigPic_smallPhone"
                />
                <div className="cartReclam_picBox_textBox cartReclam_picBox_clothers">
                    <p className="cartReclam_picBox_textSmall">LUXIROUS & TRENDY</p>
                    <p className="cartReclam_picBox_textBig">ACCESORIES</p>
                </div>
            </div>
        </section>
    );
}

export default CartReclam;
