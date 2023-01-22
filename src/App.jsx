// console.log(JSON.stringify(import.meta.env.VITE_API_KEY));
// console.log(import.meta.env.VITE_API_KEY);
import Navbar from "./components/Navbar";
import HomePage from "./views/HomePage";
import SearchPage from "./views/SearchPage";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, toggleLoading } from "./features/UI/uiSlice";
import { useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { themeSettings } from "./theme";
import { APIUrls } from "./utils/APIUrls";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.ui);
  const mode = useMemo(() => createTheme(themeSettings(theme)), [theme]);

  return (
    <div className="App ">
      <ThemeProvider theme={mode}>
        <Navbar />
        <div>
          <Routes>
            <Route
              path="/"
              element={<HomePage />}
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
