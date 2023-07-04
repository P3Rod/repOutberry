import style from './styles.module.css'
import logoRodape from '../../assets/logorodape.png'

export default function Carousel() {
    return (
        <div className={style.rodape}>
            <div className={style.ajstRodape}>
                <div className={style.infRodape}>
                    <dir>
                        <img className={style.logoRodape} src={logoRodape} alt="" />
                    </dir>
                    <div>
                        <h2>61 99999-9999</h2>
                        <h2>Rua dos Perdidos - avenida encontrados</h2>
                    </div>
                </div>
                <div className={style.redes}>
                    <h2>redes sociais:</h2>
                    <div className={style.social}>
                        <h1>redes sociais</h1>
                        <h1>redes sociais</h1>
                        <h1>redes sociais</h1>
                        <h1>redes sociais</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}