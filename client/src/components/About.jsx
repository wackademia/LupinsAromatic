import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { motion } from "framer-motion";
import SoapBar3D from "../three/SoapBar3D.jsx";
import { fadeUp, staggerContainer } from "../lib/motion.js";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="about__grid">
        <motion.div
          className="about__text"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer(0.14)}
        >
          <motion.p className="section__eyebrow" variants={fadeUp}>Our story</motion.p>
          <motion.h2 className="section__title" variants={fadeUp}>Made with intention</motion.h2>
          <motion.p variants={fadeUp}>
            Lupin's Aromatic began with a simple belief: that what you put on your skin
            should be as honest as what you put in your body. Every formula is
            crafted in small batches, with responsibly sourced ingredients and
            without the things you don't need.
          </motion.p>
          <motion.p variants={fadeUp}>
            No noise, no excess — just considered products that earn their place
            in your everyday ritual.
          </motion.p>
        </motion.div>

        <motion.div
          className="about__image"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Canvas camera={{ position: [0, 1.4, 5.4], fov: 30 }} dpr={[1, 2]}>
            <ambientLight intensity={0.85} />
            <directionalLight position={[3, 4, 2]} intensity={1.2} />
            <directionalLight position={[-3, -1, -2]} intensity={0.3} />
            <Suspense fallback={null}>
              <Float speed={1.2} rotationIntensity={0.45} floatIntensity={1}>
                <SoapBar3D image="/images/saffron.jpg" size={0.95} />
              </Float>
            </Suspense>
          </Canvas>
        </motion.div>
      </div>
    </section>
  );
}
