import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SearchPage from "./SearchPage";
import RecommendedVideos from "./RecommendedVideos";

function Page({ children }) {
  return (
    <div className="app__page">
      <Sidebar />
      {children}
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/search/:searchTerm"
            element={
              <Page>
                <SearchPage />
              </Page>
            }
          />
          <Route
            path="*"
            element={
              <Page>
                <RecommendedVideos />
              </Page>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
