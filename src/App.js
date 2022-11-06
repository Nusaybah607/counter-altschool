import Counter from "./components/Counter";
import NotFound from "./components/NotFound";
import Reducer from "./components/Reducer";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";

function App() { 
  
  return (
    <>
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Counter />}/>
          <Route path="reducer" element={ <Reducer />}/>
          <Route path="*" element={ <NotFound />}/>
         
        </Routes>
      </BrowserRouter>
      </ErrorBoundary>
    </>
  );
}

export default App;
