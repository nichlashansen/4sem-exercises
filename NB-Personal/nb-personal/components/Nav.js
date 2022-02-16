import Image from "next/image";
import Styles from "../styles/modules/Nav.module.css"

const Nav = () => {
    return (
        <header>
            <div className={Styles.logoContainer}>
                <img className={Styles.logo} src="../images/logo.png"></img>
            </div>
        </header>
    );
}

export default Nav;