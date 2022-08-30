import * as THREE from "three";
import url from "../../assets/videoLe.mp4"
import { useState } from "react";
import Hls from "hls.js";

const Background = (props) => {
  const [video] = useState(() => {
    const vid = document.createElement("video");
    let src = "https://media.avva.dev/BigBuckBunnyhls.m3u8"
    if (Hls.isSupported()){
      var hls = new Hls()
      hls.loadSource(src)
      hls.attachMedia(vid)
    }
    vid.loop = true;
    vid.muted = true;
    vid.play();
    return vid;
  });

  return (
    <mesh rotation={[0, 0, 0]} position={[0, 0, 0]} scale={[5, 5, 5]}>
      <sphereGeometry args={[4, 100, 100]} />
      <meshStandardMaterial side={THREE.DoubleSide}>
        <videoTexture attach="map" args={[video]} />
      </meshStandardMaterial>
    </mesh>
  );
};

export default Background;