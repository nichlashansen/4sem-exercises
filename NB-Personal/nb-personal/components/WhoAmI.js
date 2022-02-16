import Styles from '../styles/modules/WhoAmI.module.css'
import ArrowList from '../components/Arrow_Icon_List'

const WhoAmI = (probs) => {
    return (
        <section className={Styles.WhoAmI__Section}>
            <div className={Styles.WhoAmI__Content}>
                <h2 className={Styles.WhoAmI__Header}>Hvem Er Jeg</h2>
                <ul className={Styles.WhoAmI__List}>
                    <ArrowList text={probs.text1}/>
                    <ArrowList text={probs.text2}/>
                    <ArrowList text={probs.text3}/>
                </ul>
                <p className={Styles.WhoAmI__Text}>Vil du have en stabil, energisk og lærenem 
                    praktikant, som bidrager med energi og 
                    overskud? <span className={Styles.Emphasis}>Så er det mig du mangler!</span><br />
                    Jeg trives i et travlt miljø med mange bolde 
                    i luften hvor der er mulighed for at udvikle
                    mig professionelt og personligt.
                </p>
            </div>
            <div className={Styles.WhoAmI__ImageContainer}>
                <img className={Styles.WhoAmI__Image} src='../images/Nichlas_Picture.jpg'></img>
            </div>
        </section>
    );
}

export default WhoAmI;