import FloorGrass from "./FloorGrass";

const BigPlane = () => {
  return (
    <>
      <FloorGrass position={[0, 0, 0]} />
      <FloorGrass position={[10, 0, 0]} />
      <FloorGrass position={[0, 0, 10]} />
      <FloorGrass position={[0, 0, -10]} />
      <FloorGrass position={[-10, 0, 0]} />
      <FloorGrass position={[-10, 0, 10]} />
      <FloorGrass position={[-10, 0, -10]} />
      <FloorGrass position={[10, 0, -10]} />
      <FloorGrass position={[10, 0, 10]} />
    </>
  );
};

export default BigPlane;
