import Styles from '../styles/modules/ProjectsSection.module.css'
import { FaLinkedin, FaGithub, FaStackOverflow } from 'react-icons/fa';

const ProjectsSection = () => {
    return (
        <section className={Styles.ProjectsSection}>
            <div className={Styles.ProjectsSection__Content}>
                <h2 className={Styles.ProjectsSection__Header}>Projekter</h2>
                <p>Jeg er pt. Igang med mit speciale i frontend udvikling og 
                    IoT, du kan se alt hvad der er udviklet i løbet af mit 
                    4. semester på min GitHub Repo.</p>
                <div className={Styles.ProjectsSection__IconGrid}>
                    <a href="https://github.com/nichlashansen/">
                        <FaGithub className={Styles.ProjectsSection__Icon}/>
                    </a>
                    <a href="https://stackoverflow.com/users/15672932/nichlas-birkholm">
                        <FaStackOverflow className={Styles.ProjectsSection__Icon}/>
                    </a>
                    <a href="https://www.linkedin.com/in/nichlashansen/">
                        <FaLinkedin className={Styles.ProjectsSection__Icon}/>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default ProjectsSection;