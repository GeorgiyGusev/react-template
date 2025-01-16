import {create} from 'zustand';
import {persist} from 'zustand/middleware';

type Store = {
  counter: number;
  increment: () => void;
  reset: () => void;
};

const useCounterStore = create<Store>()(
  persist(
    (set) => ({
      counter: 1,
      increment: () => set((state) => ({counter: state.counter + 1})),
      reset: () => set({counter: 1}),
    }),
    {
      name: 'counter-storage', // имя ключа в localStorage
    }
  )
);

export default useCounterStore;
