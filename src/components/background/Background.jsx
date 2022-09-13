import * as THREE from "three";
import { useState } from "react";
import Hls from "hls.js";
//"https://media.avva.dev/BigBuckBunnyhls.m3u8"

const Background = (props) => {
  const [video] = useState(() => {
    const vid = document.createElement("video");
    let src = props.video;
    if (Hls.isSupported()) {
      var hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(vid);
      vid.src = src
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
