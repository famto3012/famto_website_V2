import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FAQ from "./Pages/FAQ";
import TermsAndConditions from "./Pages/TermsAndConditions";
import CancellationAndRefundPolicy from "./Pages/CancellationAndRefundPolicy";

function App() {

  return (
<BrowserRouter>
<Routes>
  <Route path="/faq" element={<FAQ />}/>
  <Route path="/terms-and-conditions" element={<TermsAndConditions/>} />
  <Route path="/cancellation-and-refund-policy" element ={<CancellationAndRefundPolicy/>}/>
  </Routes>
</BrowserRouter>
  )
}

export default App
