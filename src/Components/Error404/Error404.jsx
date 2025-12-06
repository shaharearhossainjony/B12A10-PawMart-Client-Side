import React from 'react';
import ErrorGif from '../../assets/error404.gif';


const Error404 = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-amber-400">
  <img
    src={ErrorGif}
    alt="404 Error"
    className="max-w-full max-h-full object-contain"
  />
</div>
  );
};

export default Error404;