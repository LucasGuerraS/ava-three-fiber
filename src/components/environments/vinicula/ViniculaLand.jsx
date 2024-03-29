import React from "react";
import { Stars, OrbitControls, Float, SpotLight } from "@react-three/drei";
import { Suspense } from "react";
import { useXR, DefaultXRControllers } from "@react-three/xr";
import BigPlane from "../../ground/BigPlane";
import { Campfire } from "../../models/Campfire";
import { Cabin } from "../../models/Cabin";
import Texto from "../../models/Texto";
import { Robot } from "../../models/Robot";
import ReusableSphere from "../../shapes/texturizedSphere/ReusableSphere";
import vinhosImg from "../../../assets/PB/vinicula/vinGramado.jpeg";
import plantasImg from "../../../assets/PB/vinicula/vinJardim.jpeg";
import HomeButton from "../../shapes/homeButton/HomeButton";

const ViniculaLand = (props) => {
  const { player } = useXR();
  player.position.x = -4;
  player.position.z = 10;
  player.position.y = 1.8;
  player.rotation.y = Math.PI;
  return (
    <>
      <ambientLight />
      <SpotLight
        distance={20}
        angle={Math.PI}
        attenuation={5}
        anglePower={5}
        intensity={5}
        position={[-4, 17, 18]}
      />
      <pointLight
        intensity={10}
        color={"red"}
        position={[-4.6, 8, 20.5]}
        distance={0.5}
      />
      <pointLight
        intensity={10}
        color={"red"}
        position={[-3.5, 8, 20.5]}
        distance={0.5}
      />
      <color attach="background" args={["#171720"]} />
      <Stars fade speed={1} />
      <Suspense fallback={null}>
        <BigPlane />
      </Suspense>
      <Campfire position={[3, 0, 7]} />
      <Float
        speed={2}
        rotationIntensity={0}
        floatIntensity={1}
        floatingRange={[0, 0.5]}
      >
        <ReusableSphere
          position={[2, 11, 20]}
          change={props.changeScene}
          number={3}
          imagem={plantasImg}
        />
        <ReusableSphere
          position={[-10, 11, 20]}
          change={props.changeScene}
          number={2}
          imagem={vinhosImg}
        />
      </Float>
      <Cabin position={[10, -5, 0]} />
      <Texto
        color="white"
        position={[-4, -1.5, 20]}
        rotation={[0, Math.PI, 0]}
        fontSize={1}
        text="Welcome to AVA!"
      />
      <Robot
        position={[-4, 0, 22]}
        scale={[5, 5, 5]}
        rotation={[0, Math.PI, 0]}
      />
      <HomeButton
        position={[-4, 11, 20]}
        text="Back To Hub"
        change={props.change}
      />
      <DefaultXRControllers />
      <OrbitControls />
    </>
  );
};

export default ViniculaLand;
