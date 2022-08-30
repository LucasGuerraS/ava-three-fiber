import { useState } from "react";
import MemorieScene from "./components/environments/memorieScene/MemorieScene";
import Hub from "./components/environments/hub/Hub";
import { VRCanvas } from "@react-three/xr";
import { Loader } from "@react-three/drei";

const App = () => {
  const [scene, setScene] = useState(true);
  const switchScene = () => {
    setScene(!scene);
  };

  //console.log(scene);

  return (
    <>
      <VRCanvas camera={{ position: [0, 0, 0] }}>
        {scene ? (
          <Hub change={switchScene} />
        ) : (
          <MemorieScene change={switchScene} />
        )}
      </VRCanvas>
      <Loader />
    </>
  );
};

export default App;
