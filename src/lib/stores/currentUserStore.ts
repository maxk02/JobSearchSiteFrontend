import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {AccountDataDto} from "@/lib/api/account/accountApiDtos";

interface CurrentUserState {
    tokenId: string | null;
    user: AccountDataDto | null;
    isAuthenticated: boolean;
    setAuth: (tokenId: string, user: AccountDataDto) => void;
    clearAuth: () => void;
}

export const useCurrentUserStore = create<CurrentUserState>()(
    persist(
        (set) => ({
            tokenId: null,
            user: null,
            isAuthenticated: false,
            setAuth: (tokenId, user) => set({ tokenId: tokenId, user: user, isAuthenticated: true }),
            clearAuth: () => set({ tokenId: null, user: null, isAuthenticated: false }),
        }),
        {
            name: 'current-user-storage',
        }
    )
);