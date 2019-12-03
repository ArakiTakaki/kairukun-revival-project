import Mousetrap from 'mousetrap';
import { EventEmitter } from 'events';

export const COMMAND = {
  MOVE_UP: 'MOVE_UP',
  MOVE_DOWN: 'MOVE_DOWN',
  MOVE_LEFT: 'MOVE_LEFT',
  MOVE_RIGHT: 'MOVE_RIGHT',
  JUMP: 'JUMP',
};

const defaultKeyBinding = {
  [COMMAND.MOVE_UP]: ['w'],
  [COMMAND.MOVE_DOWN]: ['s'],
  [COMMAND.MOVE_LEFT]: ['a'],
  [COMMAND.MOVE_RIGHT]: ['a'],
  [COMMAND.JUMP]: ['space'],
};

class GameController extends EventEmitter {
  constructor(option = defaultKeyBinding ) { 
    super();
    option = {
      ...option,
      ...defaultKeyBinding,
    };

    // move event
    Object.keys(option).forEach((key) => {
      Mousetrap.bind(option[key], () => {
        this.emit(key, this);
      });
    });
  }
}
export default new GameController();
