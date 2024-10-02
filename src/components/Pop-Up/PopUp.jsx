import React from "react";
import useStyles from "./PopupStyles";
import useDrag from "../../useDrag";
import useFindZIndex from "../../useFindZIndex";

const Popup = ({ title, content, isVisible, onClose, style, priority }) => {
  //react jss ile css dosyası yerine js dosyasında style değişkenleri tutuluyor. Dinamiklik için önemli
  const classes = useStyles();

  //Başlangıç konumu
  const initialPosition = { x: 602, y: 201 };

  //Sekmeleri kaydırma için
  const { position, handleMouseDown } = useDrag(initialPosition);

  //Ortaya çıkan pop-up'lara ait zIndex değerlerinin belirlenmesi
  const zIndexValue = useFindZIndex(priority);

  if (!isVisible) return null;

  return (
    <div
      // eğer style gönderilirse gönderilen style parametresine göre görünüyor.
      //gönderilmemişse initial değerler ile pop-up oluşuyor. (initial değerler PopupStyles.js dosyasında tanımlı)
      className={`${classes.popup} ${style}`}
      style={{
        zIndex: zIndexValue,
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      onMouseDown={handleMouseDown}
    >
      <div className={classes.popupHeader}>
        {title}
        <button onClick={onClose}>Close</button>
      </div>
      <div className={classes.popupContent}>{content}</div>
    </div>
  );
};

export default Popup;
