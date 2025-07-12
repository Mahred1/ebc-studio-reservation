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

function Input({ lable, placeholder }) {
  return (
    <div className="mb-5 mt-5 font-inter flex flex-col min-w-[30rem]">
      <label className="text-xl font-bold mb-1 ">{lable}</label>
      <input
      name={lable}
        className="p-4 text-[#666] text-xl rounded-lg border border-[#ccc]"
        placeholder={placeholder}
      ></input>
    </div>
  );
}


export default Page;
