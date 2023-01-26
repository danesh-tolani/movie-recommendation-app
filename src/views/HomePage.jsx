import React from "react";
import FlexBetween from "../components/FlexBetween";
import HomeLeft from "../components/HomePageSections/HomeLeft";
import HomeMiddle from "../components/HomePageSections/HomeMiddle";

const HomePage = () => {
  return (
    <FlexBetween sx={{ alignItems: "flex-start" }}>
      <HomeLeft />
      {/* sx={{ width: "80%", flexDirection: "column", alignItems: "center", border: "2px solid red" }} */}
      <div style={{ width: "80%" }}>
        <HomeMiddle />
      </div>
      {/* <div>right</div> */}
    </FlexBetween>
  );
};

export default HomePage;
