import React from "react";
import { useState } from "react";
import MemorieScene from "../memorieScene/MemorieScene";
import ViniculaLand from "./ViniculaLand";
import ViniculaPhotos from "./ViniculaPhotos";
import telhado from "../../../assets/PB/vinicula/patio.jpeg";

const ViniculaHub = (props) => {
  const [env, setEnv] = useState(1);
  const switchEnv = (n) => {
    setEnv(n);
  };
  const renderScene = () => {
    switch (env) {
      case 1:
        return <ViniculaLand changeScene={switchEnv} change={props.change} />;

      case 2:
        return <ViniculaPhotos change={props.change} defaultImg={telhado} />;

      case 3:
        return <MemorieScene change={props.change} />;

      default:
        break;
    }
  };
  return <>{renderScene()}</>;
};

export default ViniculaHub;
