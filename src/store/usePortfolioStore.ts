import { create } from 'zustand';

interface PortfolioState {
  currentSection: string;
  isMenuOpen: boolean;
  setCurrentSection: (section: string) => void;
  toggleMenu: () => void;
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  currentSection: 'home',
  isMenuOpen: false,
  setCurrentSection: (section) => set({ currentSection: section }),
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}));
