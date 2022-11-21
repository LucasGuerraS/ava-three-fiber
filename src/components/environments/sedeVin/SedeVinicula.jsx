import React from "react";
import { Float } from "@react-three/drei";
import ChangeImageSphere from "../../shapes/imageSphere/ChangeImageSphere";
import Texto from "../../models/Texto";
import { DefaultXRControllers } from "@react-three/xr";
import HomeButton from "../../shapes/homeButton/HomeButton";
import Foto from "../../background/FotoFundo";
import { useState } from "react";
import capela from "../../../assets/fundi.jpeg"
import mesaJantar from "../../../assets/fundi.jpeg";
import mesaTrabalhos from "../../../assets/fundi.jpeg";
import entrada from "../../../assets/fundi.jpeg";
import sofaVaranda from "../../../assets/fundi.jpeg";
import vistaLago from "../../../assets/fundi.jpeg";

const SedeVinicula = (props) => {
  const [image, setImage] = useState(props.defaultImg);
  const changeImage = (imageName) => {
    setImage(imageName);
  };
  return (
    <>
      <Foto image={image} />
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
          imagem={vistaLago}
        />
        <ChangeImageSphere
          position={[0, 3, 18]}
          scale={[1, 1, 1]}
          change={changeImage}
          number={2}
          imagem={sofaVaranda}
        />
        <ChangeImageSphere
          position={[-8, 3, 18]}
          scale={[1, 1, 1]}
          change={changeImage}
          number={2}
          imagem={mesaJantar}
        />
        <ChangeImageSphere
          position={[4, 3, 18]}
          scale={[1, 1, 1]}
          change={changeImage}
          number={2}
          imagem={mesaTrabalhos}
        />
        <ChangeImageSphere
          position={[-12, 3, 18]}
          scale={[1, 1, 1]}
          change={changeImage}
          number={2}
          imagem={capela}
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

export default SedeVinicula;
