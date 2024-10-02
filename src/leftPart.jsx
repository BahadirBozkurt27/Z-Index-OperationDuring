import React from "react";
import Button_OpenFirstPopUp from "./components/Button/Main Page/mainPage_Button";

export default function LeftSection({ openFirstPopup }) {
  return (
    <div className="col-md-4 section left">
      <h3 className="mt-3 p-2">Merhaba</h3>
      <p className="p-2">
        Bu uygulama, z index ayarlaması için bir Front-End Uygulamasıdır.
      </p>
      <Button_OpenFirstPopUp handleClick={openFirstPopup} />
    </div>
  );
}
