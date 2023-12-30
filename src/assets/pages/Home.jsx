import React from 'react'
import Carousel from '../components/Carousel'
import HeroSlide from '../components/HeroSlide'
import apiConfig from '../../apiConfig'
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            >
                <HeroSlide />
                <Carousel apiURL={apiConfig.getTopRated("movie")} title="En Beğenilen Filmler" />
                <Carousel apiURL={apiConfig.getTopRated("tv")} title="En Beğenilen Diziler" />
            </motion.div>
        </>
    )
}
