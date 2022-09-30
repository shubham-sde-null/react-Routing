import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "./Contaier/Page";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/colorScheme/:color" element={<Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
