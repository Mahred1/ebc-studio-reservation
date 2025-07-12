export default function Input({ lable, placeholder='Type here' }) {
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
