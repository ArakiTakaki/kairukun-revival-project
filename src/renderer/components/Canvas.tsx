import * as React from 'react';
import CanvasApp from '../canvas/TreeApp';

export type ICanvasProps = {}
const Canvas = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  // initializer
  React.useLayoutEffect(() => {
    const {current: canvasEl} = canvasRef;
    if (canvasEl == null) return;
    const canvasApp = new CanvasApp(canvasEl);
    canvasApp.render();
  }, [canvasRef]);

  return (
    <canvas 
      ref={canvasRef} 
      width={window.innerWidth} 
      height={window.innerHeight} 
    />
  )
};

Canvas.defaultProps = {};
export default Canvas
