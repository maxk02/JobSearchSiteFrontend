'use client';

import { useEffect, useRef } from 'react';
import { useCurrentUserStore } from '@/lib/stores/currentUserStore';

export default function AuthInitializer() {
  // Select the fetchUser action
  const fetchCurrentUser = useCurrentUserStore((state) => state.fetchCurrentUser);
  const currentUser = useCurrentUserStore((state) => state.currentUser);
  const isLoading = useCurrentUserStore((state) => state.isLoading);
  
  // Ref to prevent double-fetching in React.StrictMode (optional but recommended)
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      fetchCurrentUser();
      initialized.current = true;
    }
  }, [fetchCurrentUser]);

  return null; // This component renders nothing
}