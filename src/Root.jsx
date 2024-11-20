import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import ErrorPage from "./components/ErrorPage";
import SuccessPage from "./components/SuccessPage";

const Root = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/success" element={<SuccessPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    );
};

export default Root;
