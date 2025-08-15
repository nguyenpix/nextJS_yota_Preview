'use client';

import { useState, useEffect } from 'react';
import { authService } from '../services/authService';
import { AuthState, LoginCredentials } from '../types';

export function useAuth() {
  const [state, setState] = useState<AuthState>({
    user: null,
    isLoading: true,
    error: null,
  });

  const login = async (credentials: LoginCredentials) => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    try {
      const user = await authService.login(credentials);
      setState({ user, isLoading: false, error: null });
    } catch (error) {
      setState(prev => ({ 
        ...prev, 
        isLoading: false, 
        error: error instanceof Error ? error.message : 'Login failed' 
      }));
    }
  };

  const logout = async () => {
    await authService.logout();
    setState({ user: null, isLoading: false, error: null });
  };

  useEffect(() => {
    authService.getCurrentUser()
      .then(user => setState({ user, isLoading: false, error: null }))
      .catch(() => setState({ user: null, isLoading: false, error: null }));
  }, []);

  return { ...state, login, logout };
}

