import React from "react";
import { Cardio } from "ldrs/react";
import 'ldrs/react/Cardio.css'

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-40">
      <Cardio size="50"  stroke="4"  speed="2" color='purple' />
    </div>
  );
};

export default Loader;
