import * as THREE from 'three';
import { Miku } from '../objects/MikuLoader';
import { EventEmitter } from 'events';

// TODO EventEmitterをタイプセーフにする

const DEG = Math.PI / 180;
// singleton
export class BaseScene extends EventEmitter {
  public scene = new THREE.Scene();

  constructor() {
    super();
    this.emit('loadstart', this.scene);
    const light = new THREE.AmbientLight(0xFFFFFF, 1.5);
    this.scene.add(light);
    const dolphine = new Miku();
    dolphine.on('loaded', (object: THREE.Object3D) => {
        this.scene.add(object);
        // object.position.x = 250;
        // object.position.y = -150;
        // object.rotation.x = DEG * -70;
        // object.rotation.z = DEG * -50;
        this.emit('loadeddata', this.scene);
    });
  }
}
export default new BaseScene();
