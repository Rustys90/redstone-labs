import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Privacy from "./pages/legal/Privacy";
import Terms from "./pages/legal/Terms";
import Refund from "./pages/legal/Refund";
import Cookies from "./pages/legal/Cookies";
import DataDeletion from "./pages/DataDeletion";
import PlaceholderPage from "./pages/PlaceholderPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="refund" element={<Refund />} />
          <Route path="cookies" element={<Cookies />} />
          <Route path="data-deletion" element={<DataDeletion />} />
          <Route
            path="*"
            element={
              <PlaceholderPage
                title="Page not found"
                note="The page you're looking for doesn't exist."
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
