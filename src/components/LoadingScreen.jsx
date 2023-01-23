import React from "react";
import FlexBetween from "./FlexBetween";

const LoadingScreen = () => {
  return (
    <FlexBetween sx={{ height: "90vh" }}>
      <img
        src="./src/assets/loading.svg"
        alt=""
      />
    </FlexBetween>
  );
};

export default LoadingScreen;
