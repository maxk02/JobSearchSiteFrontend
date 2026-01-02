import {create} from 'zustand';
import {AccountDataDto} from "@/lib/api/account/accountDtos";
import { getAccountData } from '../api/account/accountApi';

interface CurrentUserState {
    currentUser: AccountDataDto | null;
    setCurrentUser: (user: AccountDataDto) => void;
    isInitialized: boolean;
    clearCurrentUser: () => void;
    fetchCurrentUser: () => Promise<void>;
}

export const useCurrentUserStore = create<CurrentUserState>()((set, get) => ({
        currentUser: null,
        setCurrentUser: (user) => set({ currentUser: user }),
        isInitialized: false,
        clearCurrentUser: () => set({ currentUser: null }),
        fetchCurrentUser: async () => {
            if (get().isInitialized) return; 

            try {
                const result = await getAccountData();
                if (result.success) {
                    set({ currentUser: result.data.accountData });
                }
            } catch (e) {
                console.error(e);
            } finally {
                set({ isInitialized: true }); 
            }
        }
    })
);