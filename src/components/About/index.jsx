import style from './styles.module.css'

export default function About() {
    return (
        <div id='' className={style.contend}>
            <div className={style.about}>
                <h1>Conheça nossa história!</h1>
                <div className={style.textAbout}><p>Bem-vindo à <span>Outberry</span>, a nova sensação em açaí que vai despertar todos os seus sentidos. <br />

                    Nossa marca, Outberry, é sinônimo de autenticidade e paixão, elementos que nos impulsionaram a embarcar nesta aventura com o açaí. A origem de tudo remonta à Amazônia, lugar mágico onde as bagas de açaí crescem de forma silvestre e exuberante. <br />

                    Nós nos dedicamos a trazer o açaí em sua forma mais pura e saborosa. Cada tigela que servimos é uma explosão de sabores, uma experiência sensorial que transcende a simples alimentação. Nosso compromisso com a qualidade e o frescor dos ingredientes garantem uma degustação inesquecível. <br />

                    <span>O convite está feito:</span> venha se juntar a nós na Outberry e embarcar nesta jornada de sabor, nutrição e alegria. Nossas portas estão abertas para recebê-lo em um universo onde cada colherada de açaí é uma experiência única e cativante. <br />
                    Outberry - a essência do açaí aguarda você!</p></div>
            </div>
        </div>
    )
}