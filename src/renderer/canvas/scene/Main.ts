import * as THREE from 'three';
import { createDolphineMesh } from '../objects/DolphinLoader';
import { EventEmitter } from 'events';

// TODO EventEmitterをタイプセーフにする

const DEG = Math.PI / 180;
// singleton
export class BaseScene extends EventEmitter {
  public scene = new THREE.Scene();

  constructor() {
    super();
    this.emit('loadstart', this.scene);
    const light = new THREE.AmbientLight(0xFFFFFF, 3.0);
    this.scene.add(light);
    try {
      createDolphineMesh()
        .then((dolphineObj) => {
          this.scene.add(dolphineObj);
          dolphineObj.position.x = 250;
          dolphineObj.position.y = -150;
          dolphineObj.rotation.x = DEG * -70;
          dolphineObj.rotation.z = DEG * -50;
          this.emit('loadeddata', this.scene);
        });
    } catch (err) {
      throw err;
    }
  }
}
export default new BaseScene();
