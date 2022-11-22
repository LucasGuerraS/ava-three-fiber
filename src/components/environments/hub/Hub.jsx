import { Stars, OrbitControls, Float, SpotLight } from "@react-three/drei";
import BigPlane from "../../ground/BigPlane";
import { Suspense } from "react";
import { Campfire } from "../../models/Campfire";
import { Cabin } from "../../models/Cabin";
import { useXR, DefaultXRControllers } from "@react-three/xr";
import Texto from "../../models/Texto";
import { Robot } from "../../models/Robot";
import ReusableSphere from "../../shapes/texturizedSphere/ReusableSphere";
import PBEscrit from "../../../assets/PB/escritorio/escrit1.jpeg";
import PBSedeVin from "../../../assets/PB/vinicula/vinJardim.jpeg";
import FI from "../../../assets/fundi.jpeg";
import viniculaImg from "../../../assets/PB/vinicula/vinSilo.jpeg";

const Hub = (props) => {
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
          position={[-6, 5, 20]}
          change={props.change}
          number={2}
          imagem={FI}
        />
        <ReusableSphere
          position={[-10, 6, 20]}
          change={props.change}
          number={5}
          imagem={viniculaImg}
        />
        <ReusableSphere
          position={[-2, 6, 20]}
          change={props.change}
          number={4}
          imagem={PBSedeVin}
        />
        <ReusableSphere
          position={[2, 5, 20]}
          change={props.change}
          number={3}
          imagem={PBEscrit}
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
      <DefaultXRControllers />
      <OrbitControls />
    </>
  );
};

export default Hub;
