import { EventEmitter } from "events";

declare class GameController extends EventEmitter {
  on(event: 'MOVE_UP', listener: (id: string) => void): this;
  on(event: 'MOVE_DOWN', listener: (id: string) => void): this;
  on(event: 'MOVE_RIGHT', listener: (id: string) => void): this;
  on(event: 'MOVE_REFT', listener: (id: string) => void): this;
  on(event: 'JUMP', listener: (id: string) => void): this;
}

export default GameController;
