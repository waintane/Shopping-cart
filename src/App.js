import {Route, Routes} from "react-router-dom";

import Navigation from "./components/Navigation";

import Accueil from "./pages/Accueil";
import Men from "./pages/Men"
import Women from "./pages/Women"
import "./App.css";
import Footer from "./components/Footer";

function App() {
    var scrollEventHandler = function()
  {
    window.scroll(0, window.pageYOffset)
  }

  window.addEventListener("scroll", scrollEventHandler, false);
  return (
    <div className="app">
      <header>
        <Navigation></Navigation>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Accueil/>}>
          </Route>
          <Route path="/Men-page" element={<Men/>}>
          </Route>
          <Route path="/Women-page" element={<Women/>}>
          </Route>
        </Routes>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
