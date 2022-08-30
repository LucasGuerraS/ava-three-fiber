import React from "react";
import { Sphere, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";
import { useInteraction } from "@react-three/xr";
import imagem from "../../../assets/fundi.jpg"

const TexturizedSphere = (props) => {
  const colorMap = useTexture(imagem);
  const sphereRef = useRef();
  useInteraction(sphereRef, "onSelect", () => {
    props.change();
  });
  return (
    <Sphere {...props} ref={sphereRef}>
      <meshStandardMaterial side={THREE.DoubleSide} map={colorMap} />
    </Sphere>
  );
};

export default TexturizedSphere;
