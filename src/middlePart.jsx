import React from "react";
import Popup from "./components/Pop-Up/PopUp";
import Button_InsideFirstPopUp from "./components/Button/First-PopUp/firstPopUp_Button";

export default function CenterSection({
  firstPopupVisible,
  setFirstPopupVisible,
  secondPopupVisible,
  setSecondPopupVisible,
  thirdPopupVisible,
  setThirdPopupVisible,
}) {
  return (
    //sayfanın orta kısmı pop-up'ların açılması için ayrılmıştır.
    <div className="col-md-4 section center">
      <Popup
        title="First Pop-Up"
        content={
          <>
            <p className="p">
              Açılan pop-up <b>"NORMAL POP-UP"</b> önceliğine sahip olduğu için
              en altta olacak
            </p>
            <Button_InsideFirstPopUp
              handleClick={() => setSecondPopupVisible(true)}
              text="Open Second Pop-Up"
            />
            <Button_InsideFirstPopUp
              handleClick={() => setThirdPopupVisible(true)}
              text="Open Third Pop-Up"
            />
          </>
        }
        isVisible={firstPopupVisible}
        onClose={() => setFirstPopupVisible(false)}
        priority={"NORMAL_POPUP"}
      />

      <Popup
        title="Second Pop-Up"
        content={
          <p>
            Açılan pop-up <b>"NORMAL POP-UP"</b> önceliğine sahiptir. Ancak
            kendisinden önce açılan bir NORMAL POP-UP olduğu için zIndex değeri
            ilk Pop-Up'tan yüksektir.
          </p>
        }
        isVisible={secondPopupVisible}
        onClose={() => setSecondPopupVisible(false)}
        style={"bg-info"}
        priority={"NORMAL_POPUP"}
      />

      <Popup
        title="Third Pop-Up"
        content={
          <p>
            Açılan pop-up <b>"HIGH POP-UP"</b> önceliğine sahiptir. Bu sebeple
            her zaman 2. Pop-Up'tan yüksek zIndex değerine sahip olacaktır.
            Ancak HIGHEST Pop-Up daha yüksek olacak.
          </p>
        }
        isVisible={thirdPopupVisible}
        onClose={() => setThirdPopupVisible(false)}
        style={"bg-primary-subtle text-black"}
        priority={"HIGH_PRIORITY_POPUP"}
      />
    </div>
  );
}
