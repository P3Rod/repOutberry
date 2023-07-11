import styles from './styles.module.css'
import iconHeader from "../../assets/logoHeader.png"
import iconMenu from "../../assets/iconMenu.png"
import React, { useState } from 'react';



export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const handleItemClick = () => {
        setIsItemVisible(false);
      };


    return (

        <div className={styles.header}>

            <a href="#">
                <img className={styles.logoHeader} src={iconHeader} alt="" />
            </a>

            <nav className={styles.conjNav}>
                <ul className={styles.menuNav}>
                    <li className={styles.navItem}>
                        <a className={styles.link} href="#">inicio</a>
                    </li>
                    <li className={styles.navItem}>
                        <a className={styles.link} href="#">Produtos</a>
                    </li>
                    <li className={styles.navItem}>
                        <a className={styles.link} href="#">Contatos</a>
                    </li>
                </ul>
                <div className={styles.hamburgerMenu}>
                    <button className={`${styles.hamburgerIcon} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
                        <span className={styles.line}></span>
                        <span className={styles.line}></span>
                        <span className={styles.line}></span>
                    </button>
                    <nav className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
                        <ul className={styles.menuItems}>
                            <li><a href="#">Inicio</a></li>
                            <li><a href="#">Produtos</a></li>
                            <li><a href="#">Contatos</a></li>
                            <li><a href="#">Outross</a></li>
                        </ul>
                    </nav>
                </div>
            </nav>

        </div>

    );
}