import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";
import { DirectionalLight } from "three";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <>
      <ambientLight intensity={0.25} />
      <Float speed={1.78} rotationIntensity={1} floatIntensity={2}>
        <directionalLight position={[0, 0, 0.5]} />
        <mesh castShadow receiveShadow scale={2.10}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="grean"
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            flatShading
            map={decal}
          />
        </mesh>
      </Float>
    </>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" style={{width: "120px"}} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
