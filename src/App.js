import "./App.css";
import Header from "./Components/Header";
import NewPerson from "./Pages/NewPerson";
import RetrieveInfoPage from "./Pages/RetrieveInfoPage";
import { Routes, Route } from "react-router-dom";
import NewAdd from "./Components/NewAdd";

function App() {
  return (
    <div className="App">
      <Header />
      <NewAdd />
      {/* <NewPerson />
      <RetrieveInfoPage /> */}
      <Routes>
        <Route path="/" element={<NewPerson />} />
        <Route path="/retrieve-page" element={<RetrieveInfoPage />} />
      </Routes>
    </div>
  );
}

export default App;
