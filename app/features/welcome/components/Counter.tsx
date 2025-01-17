import {incrementByAmount, reset, selectCount} from "~/features/welcome/store/clicker-slice";
import {useAppDispatch, useAppSelector} from "~/hooks";
import {store} from "~/store";

type Props = {}

function Counter(props: Props) {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()

  return (
    <div className="flex flex-col items-center space-y-4">
      <p className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
        {count}
      </p>
      <button
        onClick={() => dispatch(incrementByAmount(23))}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(reset())}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;