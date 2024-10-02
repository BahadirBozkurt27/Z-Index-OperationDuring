import { useState, useEffect } from "react";

// Sürükleme işlevselliğini yönetmek için özel kanca
const useDrag = (initialPosition) => {
  const [dragging, setDragging] = useState(false); // Sürükleme işleminin devam edip etmediğini takip eden durum
  const [position, setPosition] = useState(initialPosition); // Sürüklenebilir öğenin mevcut konumunu takip eden durum
  const [startPos, setStartPos] = useState(initialPosition); // Sürükleme başladığında başlangıç konumunu takip eden durum

  // Fare tıklaması olayını işlemek için fonksiyon
  const handleMouseDown = (e) => {
    setDragging(true); // Sürüklemeyi aktif hale getir
    setStartPos({
      x: e.clientX - position.x, // Başlangıç x konumunu hesapla
      y: e.clientY - position.y, // Başlangıç y konumunu hesapla
    });
  };

  // Fare hareketi olayını işlemek için fonksiyon
  const handleMouseMove = (e) => {
    if (!dragging) return; // Eğer sürükleme yapılmıyorsa hiçbir şey yapma
    setPosition({
      x: e.clientX - startPos.x, // Yeni x konumunu hesapla
      y: e.clientY - startPos.y, // Yeni y konumunu hesapla
    });
  };

  // Fare bırakma olayını işlemek için fonksiyon
  const handleMouseUp = () => {
    setDragging(false); // Sürüklemeyi sonlandır
  };

  // Fare hareketi ve bırakma olayları için olay dinleyicilerini eklemek ve kaldırmak için etki
  useEffect(() => {
    if (dragging) {
      document.addEventListener("mousemove", handleMouseMove); // Fare hareketi olay dinleyicisini ekle
      document.addEventListener("mouseup", handleMouseUp); // Fare bırakma olay dinleyicisini ekle
    } else {
      document.removeEventListener("mousemove", handleMouseMove); // Fare hareketi olay dinleyicisini kaldır
      document.removeEventListener("mouseup", handleMouseUp); // Fare bırakma olay dinleyicisini kaldır
    }

    return () => {
      // Temizlik fonksiyonu: olay dinleyicilerini kaldır
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  // Mevcut konumu ve handleMouseDown fonksiyonunu döndür
  return {
    position,
    handleMouseDown,
  };
};

export default useDrag;
