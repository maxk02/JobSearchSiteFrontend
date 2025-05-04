import {create} from 'zustand';
import {AccountDataDto} from "@/lib/api/account/accountDtos";

interface CurrentUserState {
    currentUser: AccountDataDto | null;
    setCurrentUser: (user: AccountDataDto) => void;
    clearCurrentUser: () => void;
}

export const useCurrentUserStore = create<CurrentUserState>()((set) => ({
        currentUser: {
            id: 1,
            email: 'mail@example.local',
            fullName: 'Jan Testowy',
            avatarLink: '/avatar2.webp',
            companiesManaged: []
        },
        setCurrentUser: (user) => set({ currentUser: user }),
        clearCurrentUser: () => set({ currentUser: null }),
    })
);