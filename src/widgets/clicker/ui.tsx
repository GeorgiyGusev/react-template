import {Counter} from "@/features/counter";

function Clicker() {
  return (
    <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4 text-center">
      <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200">
        Simple Clicker
      </h1>
      <Counter/>
    </nav>
  );
}

export default Clicker;