import React from "react";
import { Float } from "@react-three/drei";
import ChangeImageSphere from "../../shapes/imageSphere/ChangeImageSphere";
import Texto from "../../models/Texto";
import { DefaultXRControllers } from "@react-three/xr";
import HomeButton from "../../shapes/homeButton/HomeButton";
import Foto from "../../background/FotoFundo";
import { useState } from "react";
import telhado from "../../../assets/fundi.jpeg";
import capsulas from "../../../assets/fundi.jpeg";
import mainArea from "../../../assets/fundi.jpeg";
import vinhos from "../../../assets/fundi.jpeg";
import silos from "../../../assets/fundi.jpeg";
import plantas from "../../../assets/fundi.jpeg";

const ViniculaPhotos = (props) => {
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
          imagem={plantas}
        />
        <ChangeImageSphere
          position={[0, 3, 18]}
          scale={[1, 1, 1]}
          change={changeImage}
          number={2}
          imagem={capsulas}
        />
        <ChangeImageSphere
          position={[-8, 3, 18]}
          scale={[1, 1, 1]}
          change={changeImage}
          number={2}
          imagem={mainArea}
        />
        <ChangeImageSphere
          position={[4, 3, 18]}
          scale={[1, 1, 1]}
          change={changeImage}
          number={2}
          imagem={vinhos}
        />
        <ChangeImageSphere
          position={[-12, 3, 18]}
          scale={[1, 1, 1]}
          change={changeImage}
          number={2}
          imagem={silos}
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

export default ViniculaPhotos;
