import Navbar from "./components/Navbar/Navbar";
import UserEntryPopUp from "./components/Pop-Up/UserEntryPopUp";
import { useState } from "react";

export default function UpperPart() {
  const [highPriorityPopupVisible, setHighPriorityPopupVisible] =
    useState(false);
  return (
    <div>
      <Navbar
        userEntryPopUp={() => setHighPriorityPopupVisible(true)}
        priority={"HIGH_PRIORITY_COMPONENT"}
      />

      <UserEntryPopUp
        setHighPriorityPopupVisible={setHighPriorityPopupVisible}
        highPriorityPopupVisible={highPriorityPopupVisible}
      />
    </div>
  );
}
