import { useState } from "react";
import MemorieScene from "./components/environments/memorieScene/MemorieScene";
import Hub from "./components/environments/hub/Hub";
import { VRCanvas } from "@react-three/xr";
import { Loader } from "@react-three/drei";
import Escritorio from "./components/environments/escritorio/Escritorio";
import img3 from "./assets/PB/pictures/escritorio/sofa-sala-PB.jpg";
import SedeVinicula from "./components/environments/sedeVin/SedeVinicula";
import VinEntrada from "./assets/PB/pictures/sedeVinicula/entrada.jpg"

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

      case 3:
        return <Escritorio change={switchScene} defaultImg={img3} />;
        
      case 4:
        return <SedeVinicula change={switchScene} defaultImg={VinEntrada} />;
      
      default:
        break;
    }
  };

  //console.log(scene);

  return (
    <>
      <VRCanvas camera={{ position: [0, 0, 0] }}>{renderScene()}</VRCanvas>
      <Loader />
    </>
  );
};

export default App;
