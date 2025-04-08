import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FAQ from "./Pages/FAQ";
import Blogs from "./Pages/Blogs";
import TermsAndConditions from "./Pages/TermsAndConditions";
import CancellationAndRefundPolicy from "./Pages/CancellationAndRefundPolicy";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Blog_March from "./Pages/Blog_March";
import Blog_May from "./Pages/Blog_May";
import Blog_June from "./Pages/Blog_June";
import ITService from "./Pages/ITService";
import Delivery from "./Pages/Delivery";
import Blog_April from "./Pages/Blog_April";
import Team from "./Pages/Team";
import Merchant from "./Pages/Merchant";
import Aboutus from "./Pages/Aboutus";
import Blog_August from "./Pages/Blog_August";
import HomePage from "./Pages/HomePage";
import ContactUs from "./Pages/ContactUs";
import DeliveryAgent from "./Pages/DeliveryAgent";
import Subscriptions from "./Pages/Subscriptions";
import ReferralAppRedirect from "./Pages/ReferralAppRedirect";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/team" element={<Team />} />
        <Route path="/merchant" element={<Merchant />} />
        <Route path="/delivery-agent" element={<DeliveryAgent />} />
        <Route path="/it-service" element={<ITService />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog-march" element={<Blog_March />} />
        <Route path="/blog-april" element={<Blog_April />} />
        <Route path="/blog-may" element={<Blog_May />} />
        <Route path="/blog-june" element={<Blog_June />} />
        <Route path="/blog-august" element={<Blog_August />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route
          path="/cancellation-and-refund-policy"
          element={<CancellationAndRefundPolicy />}
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/ref/customer-app" element={<ReferralAppRedirect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
