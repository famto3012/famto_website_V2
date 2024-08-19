import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FAQ from "./Pages/FAQ";

function App() {

  return (
<BrowserRouter>
<Routes>
  <Route path="/faq" element={<FAQ />}/>
</Routes>
</BrowserRouter>
  )
}

export default App
