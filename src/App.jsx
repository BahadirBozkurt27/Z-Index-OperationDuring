import HomePage from "./pages/homePage";
import ButtonTest from "./pages/buttonTest";
import { Routes, Route } from "react-router-dom";
import UpperPart from "./UpperPart";

export default function App() {
  return (
    <div className="app">
      <UpperPart></UpperPart>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/button_test" element={<ButtonTest />} />
      </Routes>
    </div>
  );
}
