import {Route, Routes} from "react-router-dom";

import Navigation from "./components/Navigation";

import Accueil from "./pages/Accueil";
import Men from "./pages/Men"
import Women from "./pages/Women"
import "./App.css";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
