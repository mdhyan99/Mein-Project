import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Termin from "./components/Termin";

import { TerminProvider } from "./context/TerminContext";

function App() {
    return (
      
      <>
                <div className="text-center1">
                    <h1 className="text-center1"> Termin Liste</h1>
        <TerminProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/termin" element={<Termin />} />
                    </Routes>
                </BrowserRouter>
            </TerminProvider>
        </div>
      </>
    );
}
export default App;
