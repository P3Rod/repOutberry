import style from './styles.module.css'
import logoRodape from '../../assets/logoRodape.png'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import whatsapp from '../../assets/whatsapp.svg'

export default function Rodape() {
    return (
        <div id='rodape' className={style.rodape}>
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
                    <h2 className={style.textSocial}>
                        acesse nossas redes sociais:</h2>
                    <h2 className={style.textSocialmobile}>
                        redes socias:</h2>
                    <div className={style.social}>
                        <a href="#"><img className={style.iconsSocial} src={whatsapp} alt="direcionamento para whatsaap" /></a>
                        <a href="#"><img className={style.iconsSocial} src={instagram} alt="direcionamento para instagram" /></a>
                        <a href="#"><img className={style.iconsSocial} src={facebook} alt="direcionamento para facebook" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}