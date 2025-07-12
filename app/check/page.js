"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "../_components/Button";
import { useState } from "react";
import { useFormState } from "react-dom";
import { checkReservation } from "../actions";

function Page() {
    const [state,formAction]= useFormState(checkReservation,null)
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      <Link className=" mb-3 flex flex-col items-center  " href={"/"}>
        <Image width={150} height={150} src="/ebc-logo.png" alt="EBC" />
        <h1 className="text-center text-xl font-semibold ">
          Check youre reservation
        </h1>
      </Link>
      <form action={formAction} className="flex flex-col min-w-[400px]">
        <input
          name="reservationId"
          type="text"
          required
          id="reservationId"
          className="p-3 mb-4 text-[#666] text-xl  rounded-lg border mt-4 border-[#ccc] "
          placeholder="Registaraion ID"
        />
        <Button>Check</Button>
        {state?.error && (
          <p className="mt-3 text-red-600 text-ld font-semibold">{state.error}</p>
        )}
      </form>
    </div>
  );
}

export default Page;
