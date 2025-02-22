import man_logo from "../pic/man_logo.png";
import logo_purpleLine from "../pic/logo_pirpleLine.svg";

function Logo() {
    return (
        <div class="logoBox contentCenter">
            <img src={man_logo} alt="logo" class="logoBox_pic" />
            <div class="logoBox_textBox">
                <img class="logoBox_textBox_line" src={logo_purpleLine} alt="line" />
                <h1 class="logoBox_textBox_head">THE BRAND</h1>
                <h2 class="logoBox_textBox_downHead">
                    OF LUXERIOUS <span class="logoBox_textBox_downHead_span">FASHION</span>
                </h2>
            </div>
        </div>
    );
}

export default Logo;
