import { useState } from "react";
import MemorieScene from "./components/environments/memorieScene/MemorieScene";
import Hub from "./components/environments/hub/Hub";
import { VRCanvas } from "@react-three/xr";
import { Loader } from "@react-three/drei";
import { render } from "react-dom";

const App = () => {
  const [scene, setScene] = useState(1);
  const switchScene = (n) => {
    setScene(n);
  };
  const renderScene = () => {
    switch (scene) {
      case 1:
        return <Hub change={switchScene} />;
      
      case 2:
        return <MemorieScene change={switchScene} />;
      default:
        break;
    }
  }

  //console.log(scene);

  return (
    <>
      <VRCanvas camera={{ position: [0, 0, 0] }}>
        {renderScene()}
      </VRCanvas>
      <Loader />
    </>
  );
};

export default App;
