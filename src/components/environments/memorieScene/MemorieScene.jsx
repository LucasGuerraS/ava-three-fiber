import { DefaultXRControllers, useXR } from "@react-three/xr";
import Background from "../../background/Background";
import { Suspense } from "react";
import HomeButton from "../../shapes/homeButton/HomeButton";
import url from "../../../assets/videoLe.mp4";

const MemorieScene = (props) => {
  const { player } = useXR();
  player.position.x = -4;
  player.position.z = 10;
  player.rotation.y = Math.PI;
  return (
    <>
      <ambientLight />
      <Suspense>
        <Background video={url} />
      </Suspense>
      <HomeButton
        position={[-4, 0, 16]}
        text="Back To Hub"
        change={props.change}
      />
      <DefaultXRControllers />
    </>
  );
};

export default MemorieScene;
