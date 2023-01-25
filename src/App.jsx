import Navbar from "./components/Navbar";
import HomePage from "./views/HomePage";
import SearchPage from "./views/SearchPage";
import WatchListPage from "./views/watchListPage";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, toggleLoading } from "./features/UI/uiSlice";
import { useMemo, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { themeSettings } from "./theme";
import { APIUrls } from "./utils/APIUrls";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.ui);
  const mode = useMemo(() => createTheme(themeSettings(theme)), [theme]);
  const bgColor = mode.palette.background.default;
  const textColor = mode.palette.primary.light;

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
