import { Typography, Box, Button, useMediaQuery, Fade, FormControlLabel } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme } from "@mui/system";
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleTheme } from "../features/UI/uiSlice";
import { themeSettings } from "../theme";
import FlexBetween from "./FlexBetween";
import MaterialUISwitch from "./ThemeToggler";

const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false); // mobile menu for small screens
  const [checked, setChecked] = React.useState(false);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { theme } = useSelector((state) => state.ui);
  const mode = useMemo(() => createTheme(themeSettings(theme)), [theme]);

  const bgColor = mode.palette.background.default;
  const textColor = mode.palette.primary.dark;

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box>
      {isNonMobileScreens ? (
        <FlexBetween sx={{ backgroundColor: bgColor, padding: "1rem 2rem", justifyContent: "space-between" }}>
          <Typography sx={{ color: textColor, fontWeight: 600 }}>Movie Recommender</Typography>
          <FlexBetween sx={{ width: "15rem", marginLeft: "40%", columnGap: "1rem" }}>
            <Button
              variant="outlined"
              onClick={() => navigate("/")}
              sx={{ fontWeight: "600", border: "2px solid" }}>
              Home
            </Button>
            <Button
              variant="outlined"
              onClick={() => navigate("/search")}
              sx={{ fontWeight: "600", border: "2px solid", width: "10rem" }}>
              Search
            </Button>
          </FlexBetween>
          <MaterialUISwitch onClick={() => dispatch(toggleTheme())} />
        </FlexBetween>
      ) : (
        <FlexBetween sx={{ backgroundColor: bgColor, padding: "1rem 2rem" }}>
          <Typography sx={{ color: textColor, fontWeight: 600 }}>Movie Recommender</Typography>
          <FormControlLabel
            control={
              <MenuIcon
                sx={{ color: textColor, float: "right" }}
                onClick={() => {
                  handleChange();
                  setIsMobileMenuToggled(!isMobileMenuToggled);
                }}
              />
            }
          />
        </FlexBetween>
      )}

      {/* MOBILE NAV  */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box>
          <Fade
            position="fixed"
            right="0"
            top="3.5rem"
            height="30%"
            zIndex="10"
            maxWidth="150px"
            minWidth="150px"
            backgroundColor={bgColor}
            // backgroundColor="red"
            in={checked}>
            <Box
              display="flex"
              justifyContent="flex-end"
              p="1rem">
              {/* MENU ITEMS */}
              <FlexBetween
                display="flex"
                flexDirection="column">
                <MaterialUISwitch onClick={() => dispatch(toggleTheme())} />
                <Button
                  variant="outlined"
                  onClick={() => {
                    navigate("/");
                    setIsMobileMenuToggled(!isMobileMenuToggled);
                    handleChange();
                  }}
                  sx={{ fontWeight: "600", border: "2px solid", width: "6rem" }}>
                  Home
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => {
                    navigate("/search");
                    setIsMobileMenuToggled(!isMobileMenuToggled);
                    handleChange();
                  }}
                  sx={{ fontWeight: "600", border: "2px solid", width: "6rem" }}>
                  Search
                </Button>
              </FlexBetween>
            </Box>

            {/* MENU ITEMS */}
            {/* <FlexBetween
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem">
            <FormControl
              variant="standard"
              value={fullName}>
              <Select
                value={fullName}
                sx={{
                  background: bgColor,
                  width: "150px",
                  borderRadius: "0.25rem",
                  p: "0.25rem 1rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem",
                  },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: bgColor,
                  },
                }}
                input={<InputBase />}>
                <MenuItem value={fullName}>
                  <Typography>{fullName}</Typography>
                </MenuItem>
                <MenuItem onClick={() => logout()}>Log out</MenuItem>
              </Select>
            </FormControl>
          </FlexBetween> */}
          </Fade>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
