import * as THREE from 'three';

export default class BaseCharacter extends THREE.Mesh { 
  public static geometry = new THREE.PlaneGeometry(1, 1);
  public static material = new THREE.MeshBasicMaterial({ color: 0xAAAAAA, side: THREE.DoubleSide });

  public location: THREE.Vector2 = new THREE.Vector2(0, 0);

  public constructor() {
    super(BaseCharacter.geometry, BaseCharacter.material);
  }
  // todo: add to texture loader
}
