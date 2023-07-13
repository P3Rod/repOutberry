import styles from "./styles.module.css"

export default function () {

    return (
        <div className={styles.contentMaps}>
            <div className={styles.maps}>
                <h1 className={styles.font}>Onde nos Encontrar</h1>
                <iframe className={styles.geoMaps} frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=pt&amp;q=brasilia%20+(OutBerry)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Maps OutBerry</a></iframe>
                <h2 className={styles.font}>Horário de atendimento:</h2>
                <p className={styles.font}>Terça à Domingo das 8H as 18H</p>
            </div>
        </div>
    );
} 