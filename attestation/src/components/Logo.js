import man_logo from "../pic/man_logo.png";
import logo_purpleLine from "../pic/logo_pirpleLine.svg";

function Logo() {
    return (
        <div className="logoBox contentCenter">
            <img src={man_logo} alt="logo" className="logoBox_pic" />
            <div className="logoBox_textBox">
                <img className="logoBox_textBox_line" src={logo_purpleLine} alt="line" />
                <h1 className="logoBox_textBox_head">THE BRAND</h1>
                <h2 className="logoBox_textBox_downHead">
                    OF LUXERIOUS <span className="logoBox_textBox_downHead_span">FASHION</span>
                </h2>
            </div>
        </div>
    );
}

export default Logo;
