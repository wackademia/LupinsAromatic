import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { motion } from "framer-motion";
import SoapBar3D from "../three/SoapBar3D.jsx";
import { fadeUp, staggerContainer } from "../lib/motion.js";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__content">
        <motion.div
          className="hero__text"
          initial="hidden"
          animate="show"
          variants={staggerContainer(0.12, 0.1)}
        >
          <motion.p className="hero__eyebrow" variants={fadeUp}>
            Clean · Conscious · Crafted
          </motion.p>
          <motion.h1 className="hero__title" variants={fadeUp}>
            Beauty, in its
            <br />
            purest form.
          </motion.h1>
          <motion.p className="hero__sub" variants={fadeUp}>
            Thoughtfully made skincare, hair and body care from Lupin's Aromatic —
            formulated with care, designed to feel like ritual.
          </motion.p>
          <motion.a
            href="#catalog"
            className="btn"
            variants={fadeUp}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.96 }}
          >
            Explore the collection
          </motion.a>
        </motion.div>

        <div className="hero__stage" aria-hidden="true">
          <Canvas camera={{ position: [0, 1.4, 6.2], fov: 36 }} dpr={[1, 2]}>
            <ambientLight intensity={0.85} />
            <directionalLight position={[4, 5, 3]} intensity={1.3} />
            <directionalLight position={[-4, -2, -3]} intensity={0.35} />
            <Suspense fallback={null}>
              <Float speed={1.4} rotationIntensity={0.5} floatIntensity={1.1}>
                <group position={[-1.15, 0.35, 0]}>
                  <SoapBar3D image="/images/turmeric-glow.jpg" size={1.05} />
                </group>
              </Float>
              <Float speed={1.1} rotationIntensity={0.4} floatIntensity={0.9}>
                <group position={[1.25, -0.55, -0.7]}>
                  <SoapBar3D image="/images/english-rose-bar.jpg" size={0.9} />
                </group>
              </Float>
              <Float speed={1.7} rotationIntensity={0.6} floatIntensity={1.3}>
                <group position={[0.15, 1.15, -1.3]}>
                  <SoapBar3D image="/images/lavender-bliss.jpg" size={0.68} />
                </group>
              </Float>
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
}
