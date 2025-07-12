export default function InputTwins({ lable1, placeholder1, lable2, placeholder2 }) {
  return (
    <div className="mb-5 mt-5 font-inter flex gap-6 min-w-[30rem]">
      <div className="flex flex-col">
        <label className="text-lg font-medium mb-1 ">{lable1}</label>
        <input
          name={lable1}
          className="p-4 max-w-[12rem] text-[#666] text-xl rounded-lg border border-[#ccc]"
          placeholder={placeholder1}
        ></input>
      </div>
      <div className="flex flex-col">
        <label className="text-lg font-medium mb-1 ">{lable2}</label>
        <input
          name={lable1}
          className="p-4 max-w-[12rem] text-[#666] text-xl rounded-lg border border-[#ccc]"
          placeholder={placeholder2}
        ></input>
      </div>
    </div>
  );
}