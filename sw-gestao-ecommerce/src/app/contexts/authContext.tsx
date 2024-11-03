"use client";
import React, { createContext, useContext, useState, useCallback, useEffect, ReactNode } from "react";

interface AuthContextData {
  signIn: (token: string) => Promise<void>;
  signOut: () => Promise<void>;
  token: string;
  user: any;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export default function AuthContextProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string>("");
  const [user, setUser] = useState({});

  const loadStoragedData = useCallback(async () => {
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem("@sw-gestao-ecommerce:token");
      const storedUser = localStorage.getItem("@sw-gestao-ecommerce:user");

      if (storedToken) {
        setToken(storedToken);
      }
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch (error) {
          console.error('Error parsing stored user:', error);
        }
      }
    }
  }, []);

  const signIn = useCallback(async (newToken: string) => {
    try {
      localStorage.setItem("@sw-gestao-ecommerce:token", newToken);
      setToken(newToken);
    } catch (error) {
      console.error('Error during sign in:', error);
      throw error;
    }
  }, []);  

  const signOut = useCallback(async () => {
    try {
      localStorage.removeItem("@sw-gestao-ecommerce:token");
      localStorage.removeItem("@sw-gestao-ecommerce:user");
      setToken("");
      setUser({});
    } catch (error) {
      console.error('Error during sign out:', error);
      throw error;
    }
  }, []);

  useEffect(() => {
    loadStoragedData();
  }, [loadStoragedData]);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        token,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  console.log(context);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}