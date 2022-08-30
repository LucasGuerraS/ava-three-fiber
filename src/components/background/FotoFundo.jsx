import { useTexture } from "@react-three/drei";
import img from "../../../assets/fundi.jpg";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

const Foto = (props) => {
  const colorMap = useTexture(img);
  return (
    <Sphere position={[0, 2, 0]} scale={[100, 100, 100]} args={[4, 100, 100]}>
      <meshStandardMaterial side={THREE.DoubleSide} map={colorMap} />
    </Sphere>
  );
};

export default Foto;
