import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddItem from "./pages/AddItem";
import Market from "./pages/Market";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/items" element={<Market />} />
      <Route path="/additem" element={<AddItem />} />
    </Routes>
  );
}

export default App;
