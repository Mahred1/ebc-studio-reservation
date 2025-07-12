export default function Radio({ lable1, lable2 }) {
  return (
    <div className="flex gap-4 my-5 justify-start ">
      <div className="flex gap-1">
        <input
          type="radio"
          name="type"
          id="option1"
          value={lable1}
          className="w-5 cursor-pointer text-blue-600 rounded-lg border border-[#ccc]"
        ></input>
        <label htmlFor="option1" className="text-xl cursor-pointer font-nromal mb-1 ">
          {lable1}
        </label>
      </div>

      <div className="flex gap-1">
        <input
          type="radio"
          name="type"
          id="option2"
          value={lable2}
          className="w-5 cursor-pointer text-blue-600 rounded-lg border border-[#ccc]"
        ></input>
        <label htmlFor="option2" className="text-xl cursor-pointer font-nromal mb-1 ">
          {lable2}
        </label>
      </div>
    </div>
  );
}