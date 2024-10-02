import Popup from "./PopUp";

export default function UserEntryPopUp({
  highPriorityPopupVisible,
  setHighPriorityPopupVisible,
}) {
  return (
    <div>
      <Popup
        title="High Priority Pop-Up"
        content={
          <p>
            Açılan pop-up <b>"HIGHEST POP-UP"</b> önceliğine sahip olduğu için
            ne zaman açılırsa açılsın bütün Pop-Up'lardan yüksek zIndex değerine
            sahip olacaktır.
          </p>
        }
        isVisible={highPriorityPopupVisible}
        onClose={() => setHighPriorityPopupVisible(false)}
        style={"bg-success-subtle"}
        priority={"HIGHEST_POP_UP"}
      />
    </div>
  );
}
