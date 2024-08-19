import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FAQ from "./Pages/FAQ";
import Blogs from "./pages/Blogs";
import TermsAndConditions from "./Pages/TermsAndConditions";
import CancellationAndRefundPolicy from "./Pages/CancellationAndRefundPolicy";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import MarchBlog from "./Pages/MarchBlog";
import Blog_June from "./pages/Blog_June";
import ITService from "./pages/ITService";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/faq" element={<FAQ />} />
        <Route path="/it-service" element={<ITService />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/march-blog" element={<MarchBlog />} />
        <Route path="/blog-june" element={<Blog_June />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route
          path="/cancellation-and-refund-policy"
          element={<CancellationAndRefundPolicy />}
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
