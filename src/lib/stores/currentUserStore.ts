import {create} from 'zustand';
import {AccountDataDto} from "@/lib/api/account/accountDtos";

interface CurrentUserState {
    currentUser: AccountDataDto | null;
    setCurrentUser: (user: AccountDataDto) => void;
    clearCurrentUser: () => void;
}

export const useCurrentUserStore = create<CurrentUserState>()((set) => ({
        currentUser: null,
        setCurrentUser: (user) => set({ currentUser: user }),
        clearCurrentUser: () => set({ currentUser: null }),
    })
);