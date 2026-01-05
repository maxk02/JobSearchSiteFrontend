import {create} from 'zustand';
import {AccountDataDto} from "@/lib/api/account/accountDtos";
import { getAccountData } from '../api/account/accountApi';

interface CurrentUserState {
    currentUser: AccountDataDto | null;
    isLoading: boolean;
    setCurrentUser: (user: AccountDataDto) => void;
    clearCurrentUser: () => void;
    fetchCurrentUser: () => Promise<void>;
}

export const useCurrentUserStore = create<CurrentUserState>()((set, get) => ({
        currentUser: null,
        isLoading: true,
        setCurrentUser: (user) => set({ currentUser: user }),
        clearCurrentUser: () => set({ currentUser: null }),
        fetchCurrentUser: async () => {
            const result = await getAccountData();
            if (result.success) {
                set({ currentUser: result.data.accountDataDto, isLoading: false });
                console.log(`Loaded user ${get().currentUser?.id}`);
            }
            else {
                set({ currentUser: null, isLoading: false });

                if (result.status !== 401)
                    console.error(`Couldn't load user, error: ${result.error.message}, ${result.error.details}`);
            }
        }
    })
);