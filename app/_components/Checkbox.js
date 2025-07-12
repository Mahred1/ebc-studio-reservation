export default function Checkbox() {
  return (
    <div className="flex items-center gap-4 my-5">
        <label className="text-xl font-semibold mb-1 ">Service: </label>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="local"
          name="local"
          class="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label
          for="local"
          class="ml-2 block text-md font-semibold text-gray-900"
        >
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
        <label
          for="worldwide"
          class="ml-2 block text-md font-semibold text-gray-900"
        >
          Worldwide
        </label>
      </div>
    </div>
  );
}
