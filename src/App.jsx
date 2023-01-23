import Navbar from "./components/Navbar";
import HomePage from "./views/HomePage";
import SearchPage from "./views/SearchPage";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, toggleLoading } from "./features/UI/uiSlice";
import { useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { themeSettings } from "./theme";
import { APIUrls } from "./utils/APIUrls";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { theme, isLoading } = useSelector((state) => state.ui);
  const mode = useMemo(() => createTheme(themeSettings(theme)), [theme]);

  return (
    <div className="App ">
      <ThemeProvider theme={mode}>
        <Navbar />
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <div>
            <Routes>
              <Route
                path="/*"
                element={<HomePage />}
              />
              <Route
                path="/search"
                element={<SearchPage />}
              />
            </Routes>
          </div>
        )}
      </ThemeProvider>
    </div>
  );
}

export default App;
