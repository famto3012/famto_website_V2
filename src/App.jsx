import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FAQ from "./Pages/FAQ";
import Blogs from "./pages/Blogs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
