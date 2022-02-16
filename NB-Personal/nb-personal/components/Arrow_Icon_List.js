import Styles from "../styles/modules/Arrow_Icon_List.module.css"
import { FaArrowRight } from "react-icons/fa";

const Icon_List = ({ icon, text}) => {
    return (
        <li className={Styles.listItem}>
            <FaArrowRight className={Styles.Icon_List__Icon} /> <p className={Styles.Icon_List__Text}>{text}</p>
        </li>
    );
}

export default Icon_List;