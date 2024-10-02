//Open First Pop-Up butonu ile açılan sekmenin içindeki diğer 2 pop-up'ı açan butonlar

export default function Button_InsideFirstPopUp({ handleClick, text }) {
  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        className="btn btn-sp btn-outline-dark btn-sm"
      >
        {text}
      </button>
    </div>
  );
}
