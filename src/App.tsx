import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import PlaceholderPage from "./pages/PlaceholderPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          {/* Pages owned by other workers — placeholder until they land. */}
          <Route path="about" element={<PlaceholderPage title="About" />} />
          <Route path="work" element={<PlaceholderPage title="Work" />} />
          <Route path="contact" element={<PlaceholderPage title="Contact" />} />
          <Route path="privacy" element={<PlaceholderPage title="Privacy policy" />} />
          <Route path="terms" element={<PlaceholderPage title="Terms of service" />} />
          <Route path="refund" element={<PlaceholderPage title="Refund policy" />} />
          <Route path="cookies" element={<PlaceholderPage title="Cookie policy" />} />
          <Route
            path="data-deletion"
            element={<PlaceholderPage title="Data deletion" />}
          />
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
