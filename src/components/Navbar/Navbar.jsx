import React from "react";
import {
  Button_UserEntry,
  Navbar_toggler_button,
} from "../Button/Main Page/mainPage_Button";
import "./Navbar.css";
import useFindZIndex from "../../useFindZIndex";
import UserEntryPopUp from "../Pop-Up/UserEntryPopUp";

export default function Navbar({ userEntryPopUp, priority }) {
  let zIndexValue = useFindZIndex(priority);
  return (
    <div>
      <nav
        //mycolor, sadece rengi ayarlamak için kullanılan Navbar.css dosyası içindeki fonksiyon
        className="navbar navbar-expand-lg mycolor"
        style={{ zIndex: zIndexValue }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="http://localhost:5173/">
            Z-Index Test
          </a>

          <Navbar_toggler_button></Navbar_toggler_button>
          <div
            className="collapse navbar-collapse justify-content-end" //User Entry butonunu sağa yaslama --> justify-content-end
            id="navbarSupportedContent"
          >
            <Button_UserEntry handleClick={userEntryPopUp}></Button_UserEntry>
          </div>
        </div>
      </nav>
    </div>
  );
}
