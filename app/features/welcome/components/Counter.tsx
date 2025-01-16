import useCounterStore from "~/features/welcome/store/clicker-store";

type Props = {}

function Counter(props: Props) {
  const store = useCounterStore()

  return (
    <div className="flex flex-col items-center space-y-4">
      <p className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
        {store.counter}
      </p>
      <button
        onClick={() => store.increment()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Increment
      </button>
      <button
        onClick={() => store.reset()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;