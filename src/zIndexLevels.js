export const ZIndexLevels = Object.freeze({
  //User Giriş Ekranı gibi Açılınca bütün pop-up'ların üzerinde açılması gereken pop-up'ın değeri
  HIGHEST_POP_UP: "HIGHEST_POP_UP",

  //Aynı sekmede olan ama diğerlerinden üstte olması gereken Pop-Up
  HIGH_PRIORITY_POPUP: "HIGH_PRIORITY_POPUP",

  //Normal olarak current değerden başlayarak artan pop-up
  NORMAL_POPUP: "NORMAL_POPUP",

  // Her zaman yukarıda olması gereken araçların değerini gösterir (toolbar)
  HIGH_PRIORITY_COMPONENT: "HIGH_PRIORITY_COMPONENT",

  // Low değerden yüksek, high değerden düşük olması gerekn toolar için oluşturulan pop-up
  MED_PRIORITY_COMPONENT: "MED_PRIORITY_COMPONENT",

  // Aşağıda açılması sorun olmayan currentIndex değerinden başlayarak artan araçlar için kullanılır
  LOW_PRIORITY_COMPONENT: "LOW_PRIORITY_COMPONENT",

  // BURAYA DAHA FAZLA GRUP EKLENEBİLİR.
});