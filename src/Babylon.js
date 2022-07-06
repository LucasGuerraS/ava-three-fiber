import {
  Engine,
  FreeCamera,
  Vector3,
  Scene,
  MeshBuilder,
  StandardMaterial,
  Color3,
  HemisphericLight,
  Ray
} from 'babylonjs';
import './Babylon.css';
import { useEffect, useRef, useState } from 'react';

const objectUnselectedColor = Color3.FromHexString('#5853e6');
const objectSelectedColor = Color3.FromHexString('#f0520a');


const Babylon = () => {

  let scene = null
  let xr = null
  let controllers = null
  let selectedMesh = null
  let selectedMeshDistance = null

  const [boxes, setBoxes] = useState([
    {
      name: "box1",
      size: 0.5,
      position: {
        x: 0,
        y: 0,
        z: 0      
      }
    },
    {
      name: "box2",
      size: 1,
      position: {
        x: 4,
        y: 0,
        z: 0      
      }
    }
  ])
  const canvas = useRef()

  useEffect(() => {
    const init = async () => {
      if(canvas?.current){
        const engine = new Engine(canvas.current, true);
        
        scene = new Scene(engine);

        const camera = new FreeCamera('camera', new Vector3(0, 3, -3), scene);
        camera.setTarget(Vector3.Zero());
        camera.attachControl(canvas, true);

        createScene();
        await initXR(xr, scene);
    
        engine.runRenderLoop(() => {
          if (controllers) {
            controllers.forEach(controller => {
              handleController(controller);
            });
          }
    
        if (scene) {
          scene.render();
        }
        });
    
        window.addEventListener('resize', () => {
          engine.resize();
        });
        }
    }

    init()
    
    
  }, [])


  const createScene = () => {

    boxes?.forEach(item  => {
      // Box
      const box = MeshBuilder.CreateBox('box', { size: item.size, position: item.position }, scene);
      const boxMaterial = new StandardMaterial('boxMaterial', scene);
      boxMaterial.diffuseColor = objectUnselectedColor;
      box.material = boxMaterial;
      box.position = new Vector3(item.position.x, item.position.y, item.position.z)
    })
   

    // Light
    const light = new HemisphericLight('light', new Vector3(-0.5, -1, -0.25), scene);
    light.diffuse = Color3.FromHexString('#ffffff');
    light.groundColor = Color3.FromHexString('#bbbbff');
    light.intensity = 1;
  }

  const initXR = async (xr, scene) => {
    // this.xr: WebXRDefaultExperience https://doc.babylonjs.com/typedoc/classes/babylon.webxrdefaultexperience
    const sessionMode = 'immersive-vr'
    xr = await scene.createDefaultXRExperienceAsync({ uiOptions: { sessionMode } });
    const isSupported = await xr.baseExperience.sessionManager.isSessionSupportedAsync(sessionMode);
    if (!isSupported) {
      alert('WebXR not supported')
    } else {
      controllers = [];
      // this.xr.input: WebXRInput https://doc.babylonjs.com/typedoc/classes/babylon.webxrinput
      xr.input.onControllerAddedObservable.add(controller => {
        // controller: WebXRInputSource https://doc.babylonjs.com/typedoc/classes/babylon.webxrinputsource
        controller.userData = { trigger: { pressed: false, pressedPrev: false } };
        controllers.push(controller);
        controller.onMotionControllerInitObservable.add(motionController => {
          // motionController: WebXRAbstractMotionController https://doc.babylonjs.com/typedoc/classes/babylon.webxrabstractmotioncontroller
          const ids = motionController.getComponentIds();
          const triggerComponent = motionController.getComponent('xr-standard-trigger');
          triggerComponent.onButtonStateChangedObservable.add(() => {
            controller.userData.trigger.pressed = triggerComponent.pressed;
          });
        });
      });
    }
  }

  const handleController = (controller) => {
    if (controller.userData.trigger.pressed) {
      if (!controller.userData.trigger.pressedPrev) {
        // Trigger pressed
        const ray = getControllerRay(controller);
        const hit = scene.pickWithRay(ray);
        if (hit && hit.hit) {
          selectedMesh = hit.pickedMesh;
          selectedMesh.material.diffuseColor = objectSelectedColor;
          selectedMeshDistance = Vector3.Distance(selectedMesh.position, controller.pointer.position);
        }
      } else if (selectedMesh) {
        // Move selected object so it's always the same distance from controller
        const ray = getControllerRay(controller);
        const moveVector = ray.direction.scale(selectedMeshDistance);
        selectedMesh.position.copyFrom(controller.pointer.position.add(moveVector));
      }
    } else if (controller.userData.trigger.pressedPrev) {
      // Trigger released
      if (selectedMesh != null) {
        selectedMesh.material.diffuseColor = objectUnselectedColor;
        selectedMesh = null;
      }
    }
    controller.userData.trigger.pressedPrev = controller.userData.trigger.pressed;
  }

  const getControllerRay = (controller) => {
    const ray = new Ray(new Vector3(), new Vector3());
    controller.getWorldPointerRayToRef(ray);
    return ray;
  }


  return (
    <>
      <canvas id="canvas" ref={canvas}/>
    </>
  )
}


export default Babylon
