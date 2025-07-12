"use client";
import Image from "next/image";
import Radio from "../_components/Radio";
import { useState } from "react";
import Button from "../_components/Button";
import Input from "../_components/Input";
import Dropdown from "../_components/Dropdown";
import InputTwins from "../_components/InputTwins";
import Checkbox from "../_components/Checkbox";

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
        <ul className="flex w-full px-[30rem] justify-between items-center">
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
        {stage === 1 && (
          <div className="mb-5">
            <Input lable={"Email"} />
            <Input lable={"Fullname"} />
            <Radio lable1={"Recording"} lable2={"Broadcasting"} />
            <Dropdown lable={"Radio"} options={["no-radio", "FM 97.1"]} />
            <Dropdown
              lable={"Television"}
              options={["no-TV", "EBC 1", "EBC 2", "EBC 3"]}
            />
          </div>
        )}

        {stage === 2 && (
          <div className="mb-5">
            <Input lable={"Brod. Address"} />
            <InputTwins lable1={"City"} lable2={"Sub city"} />
            <Input lable={"Purpouse of request "} />
            <Input lable={"is the roads suitable for a car? "} />
          </div>
        )}

        {stage === 3 && (
          <div className="mb-5">
            <Input lable={"Address "} />
            <Checkbox />
            <InputTwins lable1={"Date"} lable2={"Time"} />
            <Input lable={"Brod. Date "} />
            <InputTwins
              lable1={"Bordcating start"}
              lable2={"Broadcasting end"}
              placeholder1="From"
              placeholder2="To"
            />
          </div>
        )}
        {stage === 4 && <div className="mb-5">
            <Input lable={"Live Brod. orientation manager name "} />
            <Input lable={"Live Brod. orientation location "} />
            <Input lable={"Live Brod. orientation time "} />
            <Input lable={"Brod. & Recording manger (Requesting side) "} />
            <Input lable={"Phone number (Manager) "} />
            <Input lable={"Confirming executor name  "} />
          
          </div>}
        <div className="flex mb-5 justify-between w-[50%]">
          {<Button type="action" onClick={(e) => handleBack(e)}>
            Back
          </Button>}
          <Button type="action" onClick={(e) => handleNext(e)}>
            {stage===4?'Submit':'Next'}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Page;
