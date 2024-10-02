import React from "react";

//Open First Pop-Up Butonu
export default function Button_OpenFirstPopUp({ handleClick }) {
  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        className="btn btn-fp btn-secondary btn-sm m-3"
      >
        Open First Pop-Up
      </button>
    </div>
  );
}

//HIGHEST POP-UP, zIndex değerine sahip sekmeyi açan buton
export function Button_UserEntry({ handleClick }) {
  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        className="btn btn-user btn-sm btn-outline-dark"
      >
        User Entry
      </button>
    </div>
  );
}

//Sayfa küçültülüdüğünde User Entry butonunu kullanabilmek için bir TOGGLER butonu oluşturuyor
export function Navbar_toggler_button() {
  return (
    <>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </>
  );
}
const handleOpenNewTab = () => {
  window.open("/button_test", "_blank"); // Yeni bir sekme aç
};

export function Button_newTab() {
  return (
    <>
      <button
        type="button"
        className="btn btn-fp btn-dark  btn-sm m-3 ms-5"
        onClick={handleOpenNewTab}
      >
        Open New Tab For Test
      </button>
    </>
  );
}
