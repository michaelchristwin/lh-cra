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

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/book-a-session" Component={BookASession} />
          <Route path="/become-a-tutor" Component={BecomeATutor} />
          <Route path="/faqs" Component={Faqs} />
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
