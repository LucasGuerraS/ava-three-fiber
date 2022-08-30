import { Plane, useTexture } from "@react-three/drei";
import { LinearEncoding } from "three";

const FloorGrass = (props) => {
  const terrainTextures = useTexture({
    map: "/textures/aerial_rocks_02_diff_4k.jpg",
    displacementMap: "/textures/aerial_rocks_02_disp_4k.jpg",
    aoMap: "/textures/aerial_rocks_02_arm_4k.jpg",
    roughnessMap: "/textures/aerial_rocks_02_arm_4k.jpg",
    metalnessMap: "/textures/aerial_rocks_02_arm_4k.jpg",
    normalMap: "/textures/aerial_rocks_02_nor_gl_4k.jpg",
  });

  return (
    <Plane args={[10, 10, 128, 128]} rotation-x={-Math.PI / 2} {...props}>
      <meshStandardMaterial
        {...terrainTextures}
        normalMap-encoding={LinearEncoding}
      />
    </Plane>
  );
};

export default FloorGrass;
