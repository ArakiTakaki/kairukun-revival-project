import * as THREE from 'three';
import MainScene from './scene/Main';

// TODO: EventEmitterをタイプセーフにする
export default class ThreeApp  {
  public $canvaas: HTMLCanvasElement;
  public renderer: THREE.WebGLRenderer;
  public camera: THREE.Camera;
  public scene: THREE.Scene;

  private cancelToken: number = 0;

  constructor(elCanvas: HTMLCanvasElement) {
    // super();
    this.$canvaas = elCanvas;
    const { clientWidth: width , clientHeight: height } = this.$canvaas;
    this.renderer = new THREE.WebGLRenderer({canvas: elCanvas, alpha: true});
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setClearColor(0xFFFFFF, 0); // 背景を透明にする
    this.camera = new THREE.OrthographicCamera(width / -2, width / 2, height / 2, height / -2, 1, 2100);
    this.camera.position.z = 1000;
    this.camera.position.x = width / 4;
    this.camera.position.y = height / -4;

    console.log(width);
    console.log(height);
    this.scene = this.sceneChanger();
    // emitter 
    // this.emit('start', this.hoge);
    // this.emit('stop', this.hoge);
    // this.emit('update', this); // 必要ないかも intercept
    // this.emit('clickMesh', this.hoge); // laycast
  }

  // あとでDIっぽくしたい
  sceneChanger() {
    return MainScene.scene;
  }

  render() {
    const tick = (time: number) => {
      this.cancelToken = requestAnimationFrame(tick);
      this.renderer.render(this.scene, this.camera)
    }
    this.cancelToken = requestAnimationFrame(tick);
  }

  stop() {
    cancelAnimationFrame(this.cancelToken);
  }
}

