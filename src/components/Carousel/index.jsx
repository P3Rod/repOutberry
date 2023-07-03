import { motion } from 'framer-motion'
import style from './styles.module.css'
import image1 from '../../img/ima1.jpg'
import image2 from '../../img/ima2.webp'
import image3 from '../../img/ima3.avif'
import image4 from '../../img/ima4.avif'

const images = [image1, image2, image3, image4]

export default function Carousel() {
    return (
        <section className={style.motion} >
            <div className={style.carousel} >

                <motion.div className={style.inner} drag="x">
                    {images.map(image => (
                        <motion.div className={style.item} whileTap={{cursor: "grabbing"}} key={image}>
                            <img src={image} alt="Fotos da loja" />
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    )
}