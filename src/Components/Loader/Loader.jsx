import React from "react";
import { Ripples } from "ldrs/react";
import "ldrs/react/Ripples.css";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-40">
      <Ripples
        size={45}
        speed={2}
        color="purple"
      />
    </div>
  );
};

export default Loader;
