import { Float, useTexture } from "@react-three/drei";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";
import { useState } from "react";

const Foto = (props) => {
  const colorMap = useTexture(props.image);
  return (
    <>
      <Sphere position={[0, 2, 0]} scale={[100, 100, 100]} args={[4, 100, 100]}>
        <hemisphereLight />
        <meshStandardMaterial side={THREE.DoubleSide} map={colorMap} />
      </Sphere>
    </>
  );
};

export default Foto;
