import Navbar from "./components/Navbar";
import HomePage from "./views/HomePage";
import SearchPage from "./views/SearchPage";
import WatchListPage from "./views/WatchListPage";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { themeSettings } from "./theme";

function App() {
  const { theme } = useSelector((state) => state.ui);
  const mode = useMemo(() => createTheme(themeSettings(theme)), [theme]);
  const bgColor = mode.palette.background.default;

  return (
    <div
      className="App"
      style={{ backgroundColor: bgColor }}>
      <ThemeProvider theme={mode}>
        <Navbar />
        <div>
          <Routes>
            <Route
              path="/*"
              element={<HomePage />}
            />
            <Route
              path="/watchlist"
              element={<WatchListPage />}
            />
            <Route
              path="/search"
              element={<SearchPage />}
            />
          </Routes>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
