import React from 'react';
import styles from "./styles.module.css"
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import acaiMorango from "../../assets/acaiGranola.png"
import acaiGranola from "../../assets/acaiMorango.png"
import bgAbout from "../../assets/bgAbout.png"


export default function Cardapio() {
    return (
        <div className={styles.product}>
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
                            <Carousel.Item interval={2000}>
                                <img
                                    className="d-block w-100"
                                    src={acaiMorango}
                                    alt="imagem ilustrativa do produto"
                                />
                                <Carousel.Caption>
                                    <h3 className={styles.textCarousel}>Açai de Morango</h3>
                                    <p className={styles.textCarousel}>300ml</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img
                                    className="d-block w-100"
                                    src={acaiGranola}
                                    alt="imagem ilustrativa do produto"
                                />
                                <Carousel.Caption>
                                    <h3 className={styles.textCarousel}>Açai com Granola</h3>
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