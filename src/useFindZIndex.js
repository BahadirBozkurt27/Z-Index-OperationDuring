import { useState, useEffect } from "react";
import { getNextZIndex } from "./zIndexManager";

const useFindZIndex = (priority) => {
  const [zIndex, setZIndex] = useState(() => getNextZIndex(priority));

  // const [zIndex, setZIndex] = useState(getNextZIndex(priority));
  // Yukarıdaki gibiyken yapılan her değişiklikte (drag, İsim değişikliği) zIndex değeri değişiyor hem de random olarak

  //"() =>"" eklenmesi sonrasında zIndex değeri sadece değişmesi gereken durumlarda değişiyor.

  useEffect(() => {
    setZIndex(getNextZIndex(priority));
  }, [priority]);

  return zIndex;
};

export default useFindZIndex;
