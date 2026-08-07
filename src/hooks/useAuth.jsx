import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('yatrasathi_user');
    if (saved) setUser(JSON.parse(saved));
    setLoading(false);
  }, []);

  const login = (userData) => {
    const user = { ...userData, id: Date.now(), joinedAt: new Date().toISOString() };
    localStorage.setItem('yatrasathi_user', JSON.stringify(user));
    setUser(user);
  };

  const signup = (userData) => login(userData);

  const logout = () => {
    localStorage.removeItem('yatrasathi_user');
    setUser(null);
  };

  const updateProfile = (updates) => {
    const updated = { ...user, ...updates };
    localStorage.setItem('yatrasathi_user', JSON.stringify(updated));
    setUser(updated);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
