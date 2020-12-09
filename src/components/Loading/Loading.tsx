import React, { FC } from "react";
import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loading: FC = () => {
  return (
    <div className="loader-container">
      <Loader
        type="Rings"
        color="#0f3f6b"
        height={100}
        width={100}
        timeout={4000}
      />
    </div>
  );
};

export default Loading;
