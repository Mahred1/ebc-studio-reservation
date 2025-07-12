export default function Checkbox({register,lable1,lable2}) {
  return (
    <div className="flex items-center gap-4 my-5">
        <label className="text-xl font-semibold mb-1 ">Service: </label>
      <div className="flex items-center">
        <input {...register(lable1)}
          type="checkbox"
          id={lable1}
          name={lable1}
          className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label
          htmlFor={lable1}
          className="ml-2 block text-md font-semibold text-gray-900"
        >
          {lable1}
        </label>
      </div>
      <div className="flex items-center">
        <input {...register(lable2)}
          type="checkbox"
          id={lable2}
          name={lable2}
          className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label
          htmlFor={lable2}
          className="ml-2 block text-md font-semibold text-gray-900"
        >
          {lable2}
        </label>
      </div>
    </div>
  );
}
