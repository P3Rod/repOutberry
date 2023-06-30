import homeImg from "../../assets/gif-header.gif"
import iconHeader from "../../assets/icon-header.png"
import bgAbout from "../../assets/bgAbout.png"
import styles from "./styles.module.css"
import acaiMorango from "../../assets/acaiGranola.png"
import acaiGranola from "../../assets/acaiMorango.png"
import loja from "../../assets/aboutLoja.jpg"

export default function Card() {
    return (
        <section>
            <div className={styles.container}>
                <img className={styles.img} src={homeImg} alt="gif outberry" />
            </div>
            <div className={styles.header}>

                <div className={styles.divLogo}>
                    <a href="#">
                        <img className={styles.logoHeader} src={iconHeader} alt="navegador para inicio da pagina" />
                    </a>
                </div>
                <div className={styles.conjNav}>
                    <ul className={styles.menuNav}>
                        <li class={styles.itensNav}>
                            <a className={styles.link} href="#">Inicio</a>
                        </li>
                        <li class={styles.itensNav}>
                            <a className={styles.link} href=".product">Produtos</a>
                        </li>
                        <li class={styles.itensNav}>
                            <a className={styles.link} href="#">Informações</a>
                        </li>
                    </ul>
                </div>

            </div>
            <div className={styles.about}>



                <div class={styles.carousel}>
                    <div class={styles.carouselInner}>
                        <div class={styles.slide}>
                            <img src={loja} alt="" />
                        </div>
                        <div class={styles.slide}>
                            <img src={loja} alt="" />
                        </div>
                        <div class={styles.slide}>
                            <img src={loja} alt="" />
                        </div>
                    </div>
                </div>



            </div>
            <div className={styles.product}>
                <div className={styles.containerProduct}>
                    <div className={styles.cardapio}>
                        <h2>CONHEÇA</h2>
                        <span>NOSSO CARDÁPIO</span>
                        <button>acesse nosso cardápio</button>
                    </div>

                    <div class={styles.carouselContainer}>
                        <div class={styles.carousel1}>
                            <div class={styles.slide}><img className={styles.ftCarrosel} src={acaiGranola} alt="açai de granola" /></div>
                            <div class={styles.slide}><img className={styles.ftCarrosel} src={acaiMorango} alt="açai de morango" /></div>
                        </div>
                    </div>


                    {/* <div className={styles.carrosel}>
                        <button className={styles.arrowLeft} aria-label="previous">🡄</button>
                        <button className={styles.arrowRight} aria-label="next">🡆</button>
                        <div className={styles.galleryWrapper}>
                            <div className={styles.gallery}>
                                <img className={styles.ftCarrosel} src={acaiGranola} alt="açai de granola" />
                                <img className={styles.ftCarrosel} src={acaiMorango} alt="açai de morango" />
                            </div>
                        </div>
                    </div> */}
                </div>
                <img className={styles.bgAbout} src={bgAbout} alt="background" />
            </div>
            <div className={styles.test}>

            </div>
        </section>

    )
}