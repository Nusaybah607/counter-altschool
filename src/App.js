import Counter from "./components/Counter";
import NotFound from "./components/NotFound";
import Reducer from "./components/Reducer";
import Navbar from "./components/Navbar";
import { Hamburger, NavClose } from "./icons";
import { useState } from "react";

import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorCounter from "./components/ErrorBoundary";

function App() {
  const [sidebar, setSidebar] = useState(false)
  return (
    <>
      <BrowserRouter>
      <button className="menu" onClick={()=>setSidebar(!sidebar)}>
        {
          sidebar ? <NavClose/> : <Hamburger/>
          
        }
      </button>
      <Navbar sidebar={sidebar} setSidebar={setSidebar}/>
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="reducer" element={<Reducer />} />
          <Route path="*" element={<NotFound />} />
          <Route path="ErrorBoundary" element={<ErrorCounter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
