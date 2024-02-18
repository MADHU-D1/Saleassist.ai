import "./App.css";

import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import MenClothing from "./pages/MenClothing/MenClothing";
import Women from "./pages/Women/Women";
import Electronics from "./pages/Electronics/Electronics";
import Gifting from "./pages/Gifting/Gifting";
import Jewelery from "./pages/Jewelery/Jewelery";


function App() {
  return (
    <div>
      <Header/>

      <Routes>
        <Route path="/" element={<MenClothing/>} />
        <Route path="/women" element={<Women/>} />
        <Route path="/electronics" element={<Electronics/>} />
        <Route path="/gifting" element={<Gifting/>} />
        <Route path="/jewelery" element={<Jewelery/>} />
      </Routes>
    </div>
  );
}

export default App;
