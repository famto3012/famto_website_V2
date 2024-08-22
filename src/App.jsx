import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FAQ from "./Pages/FAQ";
import Blogs from "./pages/Blogs";
import TermsAndConditions from "./Pages/TermsAndConditions";
import CancellationAndRefundPolicy from "./Pages/CancellationAndRefundPolicy";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Blog_March from "./Pages/Blog_March";
import Blog_May from "./Pages/Blog_May";
import Blog_June from "./pages/Blog_June";
import ITService from "./pages/ITService";
import Delivery from "./pages/Delivery";
import Blog_April from "./Pages/Blog_April";
import Aboutus from "./pages/AboutUs";
import Team from "./pages/Team";
import Merchant from "./Pages/Merchant";
import Blog_August from "./Pages/Blog_August";
import ContactUs from "./Pages/ContactUs";
import DeliveryAgent from "./Pages/DeliveryAgent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/team" element={<Team />} />
        <Route path="/merchant" element={<Merchant />} />
        <Route path="/delivery-agent" element={<DeliveryAgent/>}/>
        <Route path="/it-service" element={<ITService />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog-march" element={<Blog_March/>}/>
        <Route path="/blog-april" element={<Blog_April/>}/>
        <Route path="/blog-may" element={<Blog_May/>} />
        <Route path="/blog-june" element={<Blog_June />} />
        <Route path="/blog-august" element={<Blog_August />}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
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
