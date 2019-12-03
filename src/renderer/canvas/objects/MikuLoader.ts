import * as THREE from 'three';
import { EventEmitter } from 'events';
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader, MaterialCreator } from "three/examples/jsm/loaders/MTLLoader";
import MikuMtl from '../../assets/obj/miku/miku.mtl';
import MikuObj from '../../assets/obj/miku/miku.obj';
import '../../assets/obj/miku/eyeM2.bmp';

export interface IDolphinOptions {
  position: THREE.Vector3;
  scale: THREE.Vector3;
  rotation: THREE.Euler;
}

const initialOption = {
  position: new THREE.Vector3(200, -500, 0),
  scale: new THREE.Vector3(200, 200, 200),
  rotation: new THREE.Euler(0, 0, 0),
}

export class Miku extends EventEmitter {
  public object?: THREE.Object3D;
  
  public constructor(options = initialOption) {
    super();

    const { position, scale, rotation } = options;
    new Promise<THREE.Object3D>((resolve) => {
      new MTLLoader().load(MikuMtl, (materials: MaterialCreator) => {
        materials.preload();
        const objLoader = new OBJLoader();
        objLoader.setMaterials(materials);

        objLoader.load(MikuObj, (object: THREE.Group) => {
          const objModel = object.clone();
          objModel.scale.copy(scale);
          objModel.rotation.copy(rotation);
          objModel.position.copy(position);
          const threeObj = new THREE.Object3D();
          threeObj.add(objModel);
          resolve(objModel);
        });
      })
    }).then((obj) => {
      this.object = obj;
      this.emit('loaded', this.object);
    });
  }
}

