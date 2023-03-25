import axios from "axios";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import EditForm from "./components/EditForm.jsx";
import Layout from "./components/layout/Layout.jsx";
import { StoreProvider } from "./context/StoreContext.jsx";
import HomePage from "./pages/HomePage";
import TodoDetailPage from "./pages/TodoDetailPage.jsx";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

function App() {
    return (
        <StoreProvider>
            
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/todo/:id" element={<TodoDetailPage />} />
                </Route>
            </Routes>
        </StoreProvider>
    );
}

export default App;
