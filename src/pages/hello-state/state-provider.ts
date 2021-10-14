import {Door} from "../../patterns/state/state";


const door: Door = new Door()

export function getState(message: string) {

  switch (message) {
    case "enter":
      return door.enter();

    case "payOk":
      return door.payOk();

    case "payFailed":
      return door.payFalse();
    default:
      return "processing";
  }

}

