import Btn_zIndexTest_MaterialDesign, {
  Btn_zIndexTest_HTML,
  Btn_zIndexTest_Bootstrap,
} from "../Button/zIndexTest_Buttons/zIndexTest_Buttons";

export default function NewTab() {
  return (
    <div>
      <p>
        <h3 className="mt-3 p-1">BUTON EZİLME TESTİ</h3>
        <p className="ms-2">
          "Butonlar; HTML, Material Design ve Bootstrap ile oluşturulmuş olup,
          bu örnekte zIndex açısından karşılaştırılarak birbirlerini ezip ezemeyecekleri
          testi gösterilmektedir."
        </p>
      </p>
      {/* Componentlere tanımlanan zIndex değerlerini test etmek için oluşturulan 2 buton */}
      <div>
        <Btn_zIndexTest_HTML priority={"LOW_PRIORITY_COMPONENT"} />
        <Btn_zIndexTest_MaterialDesign priority={"MED_PRIORITY_COMPONENT"} />
        <Btn_zIndexTest_Bootstrap priority={"HIGH_PRIORITY_COMPONENT"} />
      </div>
    </div>
  );
}
