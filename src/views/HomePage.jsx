import React from "react";
import FlexBetween from "../components/FlexBetween";
import HomeLeft from "../components/HomeLeft";

const HomePage = () => {
  return (
    <FlexBetween style={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
      <HomeLeft />
      <div>middle</div>
      <div>right</div>
    </FlexBetween>
  );
};

export default HomePage;
