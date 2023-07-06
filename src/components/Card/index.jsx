import homeImg from "../../assets/gif-header.gif"
import styles from "./styles.module.css"

export default function Card() {
    return (
        <div>
            <div className={styles.container}>
                <img className={styles.img} src={homeImg} alt="gif outberry" />
            </div>
        </div>
    )
}