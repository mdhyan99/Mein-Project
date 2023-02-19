import Tablen from "./components/Tablen";
import './index.css'
// import AddForm from "./components/AddForm";

import  { FormProvider } from "./context/FormContext";
import TableKopie from "./components/TableKopie";

function App() {
  return (
    <FormProvider>

    <div className="App">
   
   <Tablen />

    </div>
    </FormProvider>
  );
}

export default App;
