import React from "react";

import { Button_newTab } from "./components/Button/Main Page/mainPage_Button";

export default function RightSection() {
  return (
    //Bu kısım butonların birbirini ezmesinin ayarlanabilmesi ile ilgili testin gerçekleşmesi için ayrılmıştır.
    <div className="col-md-4 section right">
      <p className="p1" /> Bu buton ile Farklı Yapıldarda oluşturulan butonların
      birbirlerini ezme testi için yeni sekmeye gidilir.
      <p className="buton_test">
        <Button_newTab />
      </p>
    </div>
  );
}
