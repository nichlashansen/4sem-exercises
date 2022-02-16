import Styles from "../styles/modules/Hero.module.css"
import { FaArrowCircleDown } from "react-icons/fa"

const Hero = () => {
    return (
        <section className={Styles.heroSection}>
            <div className={Styles.hero__Content}>
                <h1>Nichlas Birkholm</h1>
                <h2>Søger Praktik Til August</h2>
                <FaArrowCircleDown className={Styles.hero__Icon}/>
            </div>
        </section>
    );
}

export default Hero;