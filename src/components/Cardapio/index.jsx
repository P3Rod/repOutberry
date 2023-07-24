import React from 'react';
import styles from "./styles.module.css"
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import acaiBanana from "../../assets/ftacaibanana.jpeg"
import acaikiwi from "../../assets/ftacaikiwi.jpeg"
import bgAbout from "../../assets/bgAbout.png"


export default function Cardapio() {
    return (
        <div id='produtos' className={styles.product}>
            <div className={styles.containerProduct}>
                <div className={styles.cardapio}>
                    <h2>CONHEÇA</h2>
                    <span>NOSSO CARDÁPIO</span>
                    <a href="#" target='_blank'>
                        <button>acesse nosso cardápio</button>
                    </a>
                </div>
                <div className={styles.carouselProduct}>
                    <Carousel data-bs-theme = "dark">
                        <Carousel fade>
                            <Carousel.Item interval={3500}>
                                <img
                                    className={styles.ftacai}
                                    src={acaikiwi}
                                    alt="foto do produto"
                                />
                                <Carousel.Caption>
                                    <h3 className={styles.textCarousel}>Açai com Kiwi</h3>
                                    <p className={styles.textCarousel}>300ml</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img
                                    className={styles.ftacai}
                                    src={acaiBanana}
                                    alt="foto do produto"
                                />
                                <Carousel.Caption>
                                    <h3 className={styles.textCarousel}>Açai com Banana</h3>
                                    <p className={styles.textCarousel}>300ml</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Carousel>
                </div>
            </div>
            <img className={styles.bgAbout} src={bgAbout} alt="background" />
        </div>
    )
}