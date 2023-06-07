import React from 'react'
import SectionWrapper from "../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Experience = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <p className={styles.sectionHeadText}>Work Experience</p>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Experience, "work")