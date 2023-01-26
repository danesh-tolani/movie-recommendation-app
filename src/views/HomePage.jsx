import { useMediaQuery } from "@mui/material";
import React from "react";
import FlexBetween from "../components/FlexBetween";
import HomeLeft from "../components/HomePageSections/HomeLeft";
import HomeMiddle from "../components/HomePageSections/HomeMiddle";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <FlexBetween sx={{ alignItems: "flex-start", flexDirection: isNonMobileScreens ? "row" : "column" }}>
      <HomeLeft />
      <div style={{ width: isNonMobileScreens ? "80%" : "100%" }}>
        <HomeMiddle />
      </div>
    </FlexBetween>
  );
};

export default HomePage;
