import "./App.css";
import Auth from "./components/Auth";
import Headers from "./components/Loyout/Header";

import Home from "./components/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Modal from "./UI/Modalka/Modal";


function App() {
  return (
    <> 
    
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth to="/Home" replace />} />
        <Route path="/" element={<Headers />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  
  );
}

export default App;
