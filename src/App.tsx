import Layout from "./components/layout";
import Home from "./home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import BookASession from "./book-a-session";
import BecomeATutor from "./become-a-tutor";
import Faqs from "./faqs";
import { useEffect } from "react";
import PrivacyPolicy from "./privacypolicy";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Toaster />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/book-a-session" Component={BookASession} />
          <Route path="/become-a-tutor" Component={BecomeATutor} />
          <Route path="/faqs" Component={Faqs} />
          <Route path="/privacy-policy" Component={PrivacyPolicy} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
