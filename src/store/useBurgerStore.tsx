import { create } from "zustand";

interface BurgerStore {
  isBurger: boolean;
  setIsBurger: () => void;
}

export const useBurgerStore = create<BurgerStore>((set) => ({
  isBurger: false,
  setIsBurger: () => set((state) => ({ isBurger: !state.isBurger })),
}));
