import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage"
import OpportunityPage from "./pages/OpportunityPage"
import "./App.css"

function App() {
  return <Routes>
    <Route index element={<HomePage />} />
    <Route path="opportunities" element={<OpportunityPage />} />
  </Routes>
}

export default App
