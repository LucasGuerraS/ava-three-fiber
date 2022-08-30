/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: emijar (https://sketchfab.com/emijar)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/low-poly-wood-cabin-9cf56ec5285244fa91541df5341f839b
title: Low Poly Wood Cabin
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Cabin(props) {
  const { nodes, materials } = useGLTF("/low_poly_wood_cabin/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[3.22, 0.9, 1.61]} scale={[1.25, 1.06, 1.27]}>
            <mesh
              geometry={
                nodes.pasted__polySurface771_pasted__aiStandardSurface1_0
                  .geometry
              }
              material={materials.pasted__aiStandardSurface1}
            />
            <mesh
              geometry={
                nodes.pasted__polySurface771_pasted__lambert4_0.geometry
              }
              material={materials.pasted__lambert4}
            />
            <mesh
              geometry={
                nodes.pasted__polySurface771_pasted__lambert5_0.geometry
              }
              material={materials.pasted__lambert5}
            />
            <mesh
              geometry={
                nodes.pasted__polySurface771_pasted__lambert3_0.geometry
              }
              material={materials.pasted__lambert3}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/low_poly_wood_cabin/scene.gltf");