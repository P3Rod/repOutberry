import styles from './styles.module.css'
import iconHeader from "../../assets/logoHeader.png"


export default function Menu() {
    return (
        <div className={styles.Header}>
            <div>
                <a href="#">
                    <img className={styles.logoHeader} src={iconHeader} alt="" />
                </a>

            </div>
            <div className={styles.conjNav}>
                <ul className={styles.menuNav}>
                    <li>
                        <a className={styles.link} href="#">inicio</a>
                    </li>
                    <li>
                        <a className={styles.link} href=".product">Produtos</a>
                    </li>
                    <li>
                        <a className={styles.link} href="#">Informações</a>
                    </li>
                </ul>
            </div>
        </div>

    )
}