import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./Components/Home/Home";
import Page from "./Components/Page/Page";
import Shop from "./Components/Shop/Shop";
import Contact from "./Components/Contact/Contact";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page" element={<Page />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
