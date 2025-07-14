import toast from "react-hot-toast";

export default function Input({ lable, placeholder = "Type here", register }) {
  return (
    <div className="mb-5 mt-5 font-inter flex flex-col min-w-[30rem]">
      <label className="text-xl font-semibold mb-1 ">{lable}</label>
      <input
        name={lable}
        {...register(lable, { required: `${lable} is required!` })}
        className="p-4 text-[#000000] text-xl rounded-lg border border-[#ccc]"
        placeholder={placeholder}
      ></input>
    </div>
  );
}
