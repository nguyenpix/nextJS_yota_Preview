import { LoginCredentials, User } from '../types';

export const authService = {
  async login(credentials: LoginCredentials): Promise<User> {
    // API call logic
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    
    if (!response.ok) throw new Error('Login failed');
    return response.json();
  },

  async logout(): Promise<void> {
    await fetch('/api/auth/logout', { method: 'POST' });
  },

  async getCurrentUser(): Promise<User | null> {
    const response = await fetch('/api/auth/me');
    return response.ok ? response.json() : null;
  }
};
