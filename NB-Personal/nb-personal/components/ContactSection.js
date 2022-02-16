import Styles from '../styles/modules/ContactSection.module.css'
import { FaEnvelope,FaSms } from 'react-icons/fa'; 

const ContactSection = () => {
    return (
        <section className={Styles.ContactSection}>
            <div className={Styles.ContactSection__Content}>
                <h2 className={Styles.ContactSection__Header}>Kontakt</h2>
                <p>Kontakt mig idag og lad os
tage en kop kaffe sammen så vi kan snakke
nærmere. <br/><br/>Jeg ser frem til at høre fra dig</p>
</div><div className={Styles.ContactSection__IconGrid}>
                <FaEnvelope className={Styles.ContactSection__Icon}/>
                <p className='Italic'>Nichlas@nichlasbirkholm.com</p>
                <FaSms className={Styles.ContactSection__Icon}/>
                <p className='Italic'>+45 6013 6761</p>
            
        </div>
        </section>
    );
}

export default ContactSection;