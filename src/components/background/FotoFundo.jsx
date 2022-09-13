import { Float, useTexture } from "@react-three/drei";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";
import img from "../../assets/PB/pictures/sala-reuniao.jpg";
import img2 from "../../assets/PB/pictures/mesa-sala-PB.jpg";
import img3 from "../../assets/PB/pictures/sofa-sala-PB.jpg";
import { useState } from "react";
import ChangeImageSphere from "../shapes/imageSphere/ChangeImageSphere";
import Texto from "../models/Texto";
import { DefaultXRControllers } from "@react-three/xr";
import HomeButton from "../shapes/homeButton/HomeButton";

const Foto = (props) => {
  const [image, setImage] = useState(img3);
  const changeImage = (imageName) => {
    setImage(imageName)
  }
  const colorMap = useTexture(image);
  return (
    <>
      <Sphere position={[0, 2, 0]} scale={[100, 100, 100]} args={[4, 100, 100]}>
        <hemisphereLight />
        <meshStandardMaterial side={THREE.DoubleSide} map={colorMap} />
      </Sphere>
      <Float
        speed={2}
        rotationIntensity={0}
        floatIntensity={1}
        floatingRange={[0, 0.5]}
      >
        <ChangeImageSphere
          position={[-4, 3, 18]}
          scale={[1, 1, 1]}
          change={changeImage}
          number={2}
          imagem={img3}
        />
        <ChangeImageSphere
          position={[0, 3, 18]}
          scale={[1, 1, 1]}
          change={changeImage}
          number={2}
          imagem={img2}
        />
        <ChangeImageSphere
          position={[-8, 3, 18]}
          scale={[1, 1, 1]}
          change={changeImage}
          number={2}
          imagem={img}
        />
        <Texto
          color="white"
          position={[-4, -1.5, 18]}
          rotation={[0, Math.PI, 0]}
          fontSize={1}
          text="Click the orbs to change te background"
        />
      </Float>
      <HomeButton
        position={[-4, 0.5, 18]}
        text="Back To Hub"
        change={props.change}
      />
      <DefaultXRControllers />
    </>
  );
};

export default Foto;
