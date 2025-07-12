"use client";
import Image from "next/image";
import Radio from "../_components/Radio";
import { useState } from "react";
import Button from "../_components/Button";
import Input from "../_components/Input";

function Page() {
  const [stage, setStage] = useState(1);

  function handleNext(e) {
    e.preventDefault();
    if (stage <= 3) setStage((s) => s + 1);
  }
  function handleBack(e) {
    e.preventDefault();

    if (stage > 1) setStage((s) => s - 1);
  }
  return (
    <div className="flex flex-col justify-center mt-10">
      <Image
        className="self-center mb-3  "
        width={70}
        height={70}
        src="/ebc-logo.png"
        alt="EBC"
      />
      <h1 className="text-center text-xl font-medium ">
        Reserve your session now!
      </h1>
      <div className="my-6 flex justify-center">
        <ul className="flex w-full px-[17rem] justify-between items-center">
          <li className={`${stage >= 1 && "text-4xl font-semibold"} `}>1</li>
          <li
            className={`${
              stage >= 2
                ? "text-4xl font-semibold "
                : "text-4xl  font-normal text-[#ccc]"
            } `}
          >
            2
          </li>
          <li
            className={`${
              stage >= 3
                ? "text-4xl font-semibold "
                : "text-4xl  font-normal text-[#ccc]"
            }`}
          >
            3
          </li>
          <li
            className={`${
              stage >= 4
                ? "text-4xl font-semibold"
                : "text-4xl  font-normal text-[#ccc]"
            } `}
          >
            4
          </li>
        </ul>
      </div>

      <form className="flex flex-col items-center">
        {stage === 1 && <div>
          <Input lable={'Email'}/>
          </div>}

        <div className="flex justify-between w-[70%]">
          <Button type="action" onClick={(e) => handleBack(e)}>
            Back
          </Button>
          <Button type="action" onClick={(e) => handleNext(e)}>
            Next
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Page;
