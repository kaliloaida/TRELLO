import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Headers from "./components/Loyout/Header";
import {  Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import LoadingSpinner from './UI/LoadingSpinner'


const Home = React.lazy(()=>import("./components/pages/Home"))
const NotFound = React.lazy(()=>import("./components/pages/NotFound"))
function App() {
  return (
    <> 
    
     <Suspense  fallback={
       <div className="centered" >
         <LoadingSpinner/>
       </div>
     }
      >
      <Routes>
        <Route path="/" element={<Auth to="/Home" replace />} />
        <Route path="/" element={<Headers />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="/Home" element={<Home />} />
        <Route  path="/*"  element={<NotFound/>}/>
      </Routes>
      </Suspense>
    
    </>
  
  );
}

export default App;
