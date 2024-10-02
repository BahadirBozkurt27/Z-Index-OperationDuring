import React, { useState } from "react";
import LeftSection from ".././leftPart";
import RightSection from ".././rightPart";
import CenterSection from ".././middlePart";
import ".././index.css";

export default function HomePage() {
  const [firstPopupVisible, setFirstPopupVisible] = useState(false);
  const [secondPopupVisible, setSecondPopupVisible] = useState(false);
  const [thirdPopupVisible, setThirdPopupVisible] = useState(false);

  return (
    <div>
      <div>
        <div className="row">
          {/* Ana Sayfanın solunda bulunan sayfa girişi ve <b>Open First Pop Up </b> butonunun olduğu yeri gösteren kısım */}
          <LeftSection openFirstPopup={() => setFirstPopupVisible(true)} />

          {/* Pop-Up'ların açıldığı yeri ve açılma işlemlerinin gerçekleştiği yeri gösteren kısım */}
          <CenterSection
            firstPopupVisible={firstPopupVisible}
            setFirstPopupVisible={setFirstPopupVisible}
            secondPopupVisible={secondPopupVisible}
            setSecondPopupVisible={setSecondPopupVisible}
            thirdPopupVisible={thirdPopupVisible}
            setThirdPopupVisible={setThirdPopupVisible}
          />

          {/* Butonların birbirini ezmesinin testinin yapıldığı yeri gösteren kısım */}
          <RightSection />
        </div>
      </div>
    </div>
  );
}
