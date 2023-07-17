import { create } from "zustand";

export const useCurrentStore = create((set) => ({
    currentIndex: 1,
    setCurrentIndex: (idx) => set({currentIndex: idx})
}))