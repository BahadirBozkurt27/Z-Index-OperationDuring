import { ZIndexLevels } from "./zIndexLevels";

let currentZIndex = 900;

export const initialZIndexValues = {
  //Başlangıç değerleri

  [ZIndexLevels.HIGH_PRIORITY_COMPONENT]: 5000,
  [ZIndexLevels.HIGHEST_POP_UP]: 4000,
  [ZIndexLevels.MED_PRIORITY_COMPONENT]: 3000,
  [ZIndexLevels.HIGH_PRIORITY_POPUP]: 2500,
  [ZIndexLevels.NORMAL_POPUP]: 1000,
  [ZIndexLevels.LOW_PRIORITY_COMPONENT]: currentZIndex,
};

export const getCurrentZIndex = () => currentZIndex;
export const incrementCurrentZIndex = () => (currentZIndex += 1);
