"use client";
import supabase from "@/supabase";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Button from "../_components/Button";
import Checkbox from "../_components/Checkbox";
import Dropdown from "../_components/Dropdown";
import Input from "../_components/Input";
import InputTwins from "../_components/InputTwins";

function Page() {
  const [stage, setStage] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const regid = Math.floor(Math.random() * 1000);
  const router = useRouter();
  
  async function onSubmit(data) {
    try {
      const { error } = await supabase
        .from("Rservations")
        .insert([data])

        .select();
      if (error) throw new Error();
      toast.success("Reservation successfully created!");
      router.replace(`reserve/${data.reservationId}`);
    } catch (e) {
      console.log(e.message);
    }
  }

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
      <Link className="self-center mb-3  " href={"/"}>
        <Image width={70} height={70} src="/ebc-logo.png" alt="EBC" />
      </Link>
      <h1 className="text-center text-xl font-medium ">
        Reserve your session now!
      </h1>
      <div className="my-6 flex justify-center">
        <ul className="flex w-full px-[30rem] justify-between items-center">
          <li
            className={`${
              stage >= 1 &&
              "text-4xl font-normal text-white bg-primary-200 px-4 rounded-full py-2 shadow-2xl"
            } `}
          >
            1
          </li>
          <li
            className={`${
              stage >= 2
                ? "text-4xl font-normal text-white bg-primary-200 px-4 rounded-full py-2 shadow-2xl "
                : "text-4xl  font-normal text-[#ccc]"
            } `}
          >
            2
          </li>
          <li
            className={`${
              stage >= 3
                ? "text-4xl font-normal text-white bg-primary-200 px-4 rounded-full py-2  shadow-2xl"
                : "text-4xl  font-normal text-[#ccc]"
            }`}
          >
            3
          </li>
          <li
            className={`${
              stage >= 4
                ? "text-4xl font-normal text-white bg-primary-200 px-4 rounded-full py-2 shadow-2xl"
                : "text-4xl  font-normal text-[#ccc]"
            } `}
          >
            4
          </li>
        </ul>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center"
      >
        {stage === 1 && (
          <div className="mb-5">
            <Input register={register} lable={"Email"} />
            <Input register={register} lable={"Fullname"} />
            <Checkbox
              register={register}
              lable1={"Recording"}
              lable2={"Broadcasting"}
            />
            <Dropdown
              register={register}
              lable={"Radio"}
              options={["no-radio", "FM 97.1"]}
            />
            <Dropdown
              register={register}
              lable={"Television"}
              options={["no-TV", "EBC 1", "EBC 2", "EBC 3"]}
            />
          </div>
        )}

        {stage === 2 && (
          <div className="mb-5">
            <Input register={register} lable={"Broadcast Address"} />
            <InputTwins
              register={register}
              lable1={"City"}
              lable2={"Sub city"}
            />
            <Input register={register} lable={"Purpouse of request"} />
            <Input
              register={register}
              lable={"is the roads suitable for a car?"}
            />
          </div>
        )}

        {stage === 3 && (
          <div className="mb-5">
            <Input register={register} lable={"Address"} />
            <Checkbox
              register={register}
              lable1={"Local"}
              lable2={"Worldwide"}
            />
            <InputTwins register={register} lable1={"Date"} lable2={"Time"} />
            <Input register={register} lable={"Broadcast Date"} />
            <InputTwins
              register={register}
              lable1={"Bordcating start"}
              lable2={"Broadcasting end"}
              placeholder1="From"
              placeholder2="To"
            />
          </div>
        )}
        {stage === 4 && (
          <div className="mb-5">
            <input type="hidden" {...register("reservationId")} value={regid} />
            <Input
              register={register}
              lable={"Live Broadcast orientation manager name"}
            />
            <Input
              register={register}
              lable={"Live Broadcast orientation location"}
            />
            <Input
              register={register}
              lable={"Live Broadcast orientation time"}
            />
            <Input
              register={register}
              lable={"Broadcast & Recording manger (Requesting side)"}
            />
            <Input register={register} lable={"Phone number (Manager)"} />
            <Input register={register} lable={"Confirming executor name"} />
          </div>
        )}
        <div className="flex mb-5 justify-between w-[50%]">
          {
            <Button style="action" onClick={(e) => handleBack(e)}>
              Back
            </Button>
          }
          {stage === 4 ? (
            <Button style="action">
              {isSubmitting ? "Loading..." : "Submit"}
            </Button>
          ) : (
            <Button style="action" onClick={(e) => handleNext(e)}>
              {"Next"}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

export default Page;
