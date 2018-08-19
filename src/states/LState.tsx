import { Container } from "unstated";
import format from "date-fns/format";
import { AsyncStorage } from "react-native";

import { DATE_FORMAT, LSTATE_KEY } from "../contants";

interface AllLifts {
  [key: string]: LiftValues;
}

interface State {
  currentLifts: LiftValues;
  allLifts: AllLifts;
}

type SetStateParameter =
  | State
  | ((prevState: Readonly<State>) => State | Partial<State> | null)
  | Partial<State>
  | null;

export class LState extends Container<State> {
  state = {
    currentLifts: {
      squat: 0,
      bench: 0,
      deadlift: 0,
      row: 0,
      overheadPress: 0
    },
    allLifts: {}
  };

  saveState = (newState: SetStateParameter) => {
    this.setState(newState, () => {
      AsyncStorage.setItem(LSTATE_KEY, JSON.stringify(this.state));
    });
  };

  setCurrentLifts = (lv: LiftValues) =>
    this.saveState({
      currentLifts: lv
    });

  setLiftsForToday = (lv: LiftValues) => {
    this.saveState(state => ({
      allLifts: {
        ...state.allLifts,
        [format(new Date(), DATE_FORMAT)]: lv
      }
    }));
  };
}
