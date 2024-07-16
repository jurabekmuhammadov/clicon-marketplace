import { create } from "zustand";

interface HeaderState {
    isBlackFridayOpen: boolean;
    isMenuOpen: boolean;
    setisBlackFridayOpen: (isOpen: boolean) => void;
    setIsMenuOpen: (isOpen: boolean) => void;
}
const useHeaderStore = create<HeaderState>((set) => ({
    isBlackFridayOpen: true,
    isMenuOpen: false,
    setisBlackFridayOpen: (isOpen: boolean) => set({ isBlackFridayOpen: isOpen }),
    setIsMenuOpen: (isOpen: boolean) => set({ isMenuOpen: isOpen })
}))

export default useHeaderStore