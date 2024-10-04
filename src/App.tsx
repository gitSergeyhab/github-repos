import { BrowserRouter, Route, Routes } from "react-router-dom";
import GithubList from "./pages/github-list";
import { Nav } from "./components/nav";
import FormPage from "./pages/form-page";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<GithubList />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
