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
        <Checkbox />
      </form>
    </div>
  );
}

function Checkbox() {
  return (
    <div className="flex items-center gap-4 my-5">
      <div className="flex items-center">
        <input
          type="checkbox"
          id="local"
          name="local"
          class="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label for="terms" class="ml-2 block text-md font-semibold text-gray-900">
          Local
        </label>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="worldwide"
          name="worldwide"
          class="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label for="terms" class="ml-2 block text-md font-semibold text-gray-900">
          Worldwide
        </label>
      </div>
    </div>
  );
}

export default Page;
