import * as THREE from 'three';
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader, MaterialCreator } from "three/examples/jsm/loaders/MTLLoader";
import DolphinMtl from '../../assets/obj/10014_dolphin_v2_max2011_it2.mtl';
import DolphinObj from '../../assets/obj/10014_dolphin_v2_max2011_it2.obj';
import '../../assets/obj/10014_dolphin_v1_Diffuse.jpg';

export interface IDolphinOptions {
  position: THREE.Vector3;
  scale: THREE.Vector3;
  rotation: THREE.Euler;
}
const initialOption = {
  position: new THREE.Vector3(0, 0, 0),
  scale: new THREE.Vector3(1, 1, 1),
  rotation: new THREE.Euler(0, 0, 0),
}

export const createDolphineMesh = (options = initialOption): Promise<THREE.Object3D> => {
  const { position, scale, rotation } = options;
  return new Promise((resolve) => {
    new MTLLoader().load(DolphinMtl, (materials: MaterialCreator) => {
      materials.preload();
      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);

      objLoader.load(DolphinObj, (object: THREE.Group) => {
        const objModel = object.clone();
        objModel.scale.copy(scale);
        objModel.rotation.copy(rotation);
        objModel.position.copy(position);
        const threeObj = new THREE.Object3D();
        threeObj.add(objModel);
        resolve(objModel);
      });
    })
  })
}
