import { useState } from "react";
import type { Slip } from "../types/slip";
import { fetchData } from "../data/data";

const AdviceDetailsGenerator = () => {
  const [slipData, setSlipData] = useState<Slip | null>(null);

  const handleClick = async (): Promise<void> => {
    const response = await fetchData();
    setSlipData(response);
  };

  return (
    <div className="container flex flex-col items-center justify-center  ">
      <div className=" font-bold p-20 text-pink-800 bg-white/50 italic m-8 my-8 text-lg text-center capitalize border-1 rounded-lg  ">
        <p className="text-left  text-4xl mb-0">"</p>
        {slipData ? (
          <p className="text-center  text-2xl mt-0">{slipData.advice} ....</p>
        ) : (
          "Click Button To get Advice"
        )}
        <p className="text-right  text-4xl mt-0">"</p>
        <p className="text-right   text-xs mt-0">
          #{slipData ? slipData.id : ""}
        </p>
      </div>
      <button
        className="bg-pink-800 text-white hover:bg-pink-900  font-semibold px-8 py-3 rounded-full transition-all"
        onClick={handleClick}
      >
        Get Today's Advice
      </button>
    </div>
  );
};

export default AdviceDetailsGenerator;
