
export default function Dropdown({ lable, options,register }) {
  return (
    <div className="mb-5 mt-5 font-inter flex flex-col min-w-[30rem]">
      <label className="text-xl font-bold mb-1 ">{lable}</label>
      <select
    
        name={lable}
        {...register(lable)}
        className="p-4  text-xl  block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-2 "
      >
        {options.map((option) => {
          return (
            <option className="border border-black" key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}