import React from "react";
import FlexBetween from "../components/FlexBetween";
import HomeLeft from "../components/HomePageSections/HomeLeft";
import HomeMiddle from "../components/HomePageSections/HomeMiddle";

const HomePage = () => {
  return (
    <FlexBetween sx={{ alignItems: "flex-start" }}>
      <HomeLeft />
      <HomeMiddle />
      {/* <div>right</div> */}
    </FlexBetween>
  );
};

export default HomePage;
