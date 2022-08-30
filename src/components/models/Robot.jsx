/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: ikreinin (https://sketchfab.com/kreinin)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/robot-copernicus-9ab010f711214f38a8ed9002247b70db
title: Robot Copernicus
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Robot(props) {
  const { nodes, materials } = useGLTF('/robot_copernicus/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.47}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.material_0} />
      </group>
    </group>
  )
}

useGLTF.preload('/robot_copernicus/scene.gltf')
