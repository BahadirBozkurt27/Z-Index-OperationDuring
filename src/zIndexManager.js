// zIndexManager.js
import { initialZIndexValues } from "./initialZIndexValues";

const zIndexState = { ...initialZIndexValues };
const minZIndex = Math.min(...Object.values(zIndexState));

// Varsayılan z-index değerini döndüren fonksiyon
export function getNextZIndex(componentType) {
  if (componentType && zIndexState.hasOwnProperty(componentType)) {
    // Eğer componentType mevcutsa, mevcut z-index değerini döndür
    zIndexState[componentType] += 1;

    //console.log(zIndexState[componentType]);
    //=> Artışı kontrol etmek için kullanılan debug yöntemi

    return zIndexState[componentType];
  } else {
    // Eğer componentType mevcut değilse, minimum z-index değerini döndür
    const nextZIndex = minZIndex;

    zIndexState[componentType] = nextZIndex;
    return nextZIndex;
  }
}
