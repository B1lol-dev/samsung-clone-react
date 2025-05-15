import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Layout } from "./components/layout/Layout";

// translation
import { I18nextProvider } from "react-i18next";
import i18n from "./i18next";

function App() {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </Router>
      </I18nextProvider>
    </>
  );
}

export default App;
