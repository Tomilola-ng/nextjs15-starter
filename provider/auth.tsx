"use client";

import React, { createContext, useContext, ReactNode } from "react";

import { useFetch } from "@/hooks/use-fetch";
const currentUser = () =>
  Promise.resolve({
    full_name: "John Doe",
    email: "john@doe.com",
    password: "123456",
  });

interface AuthContextType {
  isLoggedIn: boolean;
  user: _user | null;
  loading: boolean;
  refetch: (newParams: Record<string, string | number>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const {
    data: user,
    loading,
    refetch,
  } = useFetch({
    fn: currentUser,
  });

  const isLoggedIn = !!user;

  return (
    <AuthContext
      value={{
        isLoggedIn,
        user,
        loading,
        refetch,
      }}
    >
      {children}
    </AuthContext>
  );
};

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuthContext must be used within a AuthProvider");

  return context;
};

export default AuthProvider;
