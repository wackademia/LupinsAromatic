import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import SoapBar3D from "./SoapBar3D.jsx";

function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      rootMargin: "300px",
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

export default function CardCanvas({ image, hovered }) {
  const wrapRef = useRef(null);
  const inView = useInView(wrapRef);

  return (
    <div ref={wrapRef} className="card__canvas">
      {inView && (
        <Canvas
          dpr={[1, 1.75]}
          camera={{ position: [0, 1.6, 3.4], fov: 32 }}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.9} />
          <directionalLight position={[3, 4, 2]} intensity={1.1} />
          <directionalLight position={[-3, -1, -2]} intensity={0.3} />
          <Suspense fallback={null}>
            <SoapBar3D image={image} hovered={hovered} />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
}
