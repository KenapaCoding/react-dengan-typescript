import  { useState } from "react";
import KomponenB from "./KomponenB";

const KomponenA = () => {

    

  return <div className="bg-white h-screen text-black dark:text-white dark:bg-black">
    <KomponenB/>
  </div>;
};

export default KomponenA;
