import Button from "@mui/material/Button";
import useFindZIndex from "../../../useFindZIndex";

//Aşağı - yukarı işlemlerinde HTML butonunun yerini kaybetmemesi için kullanılan fonksiyon
const containerStyle = {
  position: "absolute",
  width: "100%", //min değeri
};

function denemestyle1(HTMLzIndexValue) {
  return {
    position: "absolute",
    left: "560px", // Sabit piksel değeri kullanarak konumlandırma
    top: "21px", // Sabit piksel değeri kullanarak konumlandırma
    zIndex: HTMLzIndexValue,
    height: "33.58px",
    color: "black",
  };
}

export default function Btn_zIndexTest_MaterialDesign({ priority }) {
  let zIndexValue1 = useFindZIndex(priority);
  return (
    <Button
      variant="contained"
      color="secondary"
      sx={{ left: "630px", margin: 1, top: "11.5px" }}
      style={{ zIndex: zIndexValue1 }}
    >
      Material Design Button
    </Button>
  );
}

export function Btn_zIndexTest_HTML({ priority }) {
  let zIndexValue2 = useFindZIndex(priority);
  return (
    <div style={containerStyle}>
      <button style={denemestyle1(zIndexValue2)}>HTML Button</button>
    </div>
  );
}

export function Btn_zIndexTest_Bootstrap({ priority }) {
  let zIndexValue3 = useFindZIndex(priority);
  return (
    <div style={containerStyle}>
      <button
        className="btn btn-primary"
        style={{
          zIndex: zIndexValue3,
          position: "absolute",
          top: "-33px",
          left: "820px",
        }}
      >
        Bootstrap Button
      </button>
    </div>
  );
}
