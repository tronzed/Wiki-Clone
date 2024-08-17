import SearchPage from "./components/SearchPage";
import DetailPage from "./components/DetailPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import ListingPage from "./components/ListingPage";

import './style.css'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/listing/:id" element={<ListingPage />} />
          <Route path="/single/:id" element={<DetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
