import React from "react";
import Texto from "../../models/Texto";
import { Box } from "@react-three/drei";
import { useRef } from "react";
import { useInteraction } from "@react-three/xr";

const HomeButton = (props) => {
  const boxRef = useRef();
  useInteraction(boxRef, "onSelect", () => {
    props.change(1);
  });
  return (
    <mesh {...props} ref={boxRef}>
      <Box args={[3, 1, 1]} color={["blue"]}>
        <meshStandardMaterial color={"blue"} />
      </Box>
      <Texto
        color="black"
        rotation={[0, Math.PI, 0]}
        fontSize={0.5}
        text={props.text}
        position={[0, 0, -0.6]}
      />
    </mesh>
  );
};

export default HomeButton;
