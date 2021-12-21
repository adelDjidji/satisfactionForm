import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import QuestionaryRDV from "./pages/QuestionaryRDV";
import QuestionaryBilan from "./pages/QuestionaryBilan";

export const API_URL="API_URL"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/login" element={<Login />}/> */}
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/CDI-questions/:clientID" element={<QuestionaryBilan company={"cdi"} />} />
        <Route exact path="/CDI-questionsRDV/:clientID" element={<QuestionaryRDV company={"cdi"} />} />
        <Route exact path="/BVTC-questions/:clientID" element={<QuestionaryBilan company="bvtc" />} />
        <Route exact path="/BVTC-questionsRDV/:clientID" element={<QuestionaryRDV company="bvtc" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
