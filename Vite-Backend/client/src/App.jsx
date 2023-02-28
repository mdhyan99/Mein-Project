import { Routes,Route, BrowserRouter } from "react-router-dom"
import { StoreProvider} from './context/StoreContext.jsx'
import HomePage from "./pages/HomePage"

function App() {

  return (
<StoreProvider>

  <div>
    <BrowserRouter>
     <Routes>
    <Route path="/" element={<HomePage />}/>
   </Routes>
   </BrowserRouter>
  </div>
</StoreProvider>
    
  )
}

export default App
