import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import style from './styles.module.css'
import image1 from '../../img/ima1.jpg'
import image2 from '../../img/ima2.webp'
import image3 from '../../img/ima3.avif'
import image4 from '../../img/ima4.avif'
import image5 from '../../img/ima5.jpg'

const images = [image1, image2, image3, image4, image5]

export default function Carousel() {

    const carousel = useRef();
    const [width, setWidth] = useState (0)

    useEffect (() => {
        console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)

    }, [])

    return (
        <section className={style.motion} >
            <div className={style.carousel} ref={carousel} >
                <motion.div className={style.inner} 
                drag="x"
                dragConstraints={{right: 0, left: -width}}
                initial={{ x: 110}}
                animate={{ x: 0}}
                transition={{ duration: 0.8 }}
                >
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