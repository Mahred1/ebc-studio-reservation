"use client";
import Image from "next/image";
import Radio from "../_components/Radio";

function Page() {
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

      <form className="flex flex-col items-center">
        
      </form>
    </div>
  );
}



export default Page;
