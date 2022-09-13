import React from 'react'
import { Sphere, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";
import { useInteraction } from "@react-three/xr";

const ChangeImageSphere = (props) => {
  const colorMap = useTexture(props.imagem);
  const sphereRef = useRef();
  useInteraction(sphereRef, "onSelect", () => {
    props.change(props.imagem);
  });
  return (
    <Sphere {...props} ref={sphereRef}>
      <meshStandardMaterial side={THREE.DoubleSide} map={colorMap} />
    </Sphere>
  );
}

export default ChangeImageSphere