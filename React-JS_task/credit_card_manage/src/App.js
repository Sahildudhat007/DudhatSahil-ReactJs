import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CreditCard from "./Component/CreditCard/CreditCard";
import Login from "./Component/Login/Login";
import Edit from "./Component/Edit/Edit";
import Create from "./Component/Create/Create";

function App() {

  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/CreditCard" element={isAuthenticated ? <CreditCard /> : <Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/CreditCard" />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
