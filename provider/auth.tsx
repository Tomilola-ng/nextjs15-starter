/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  useRef,
} from "react";
import { toast } from "sonner";
import { useRouter, usePathname } from "next/navigation";
import { authAxiosFetch } from "@/api";
import { setUserData } from "@/lib/token";

interface AuthContextType {
  isLoggedIn: boolean;
  user: _user | null;
  loading: boolean;
  refreshUser: () => Promise<void>;
  hardRefreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
  initialUser: _user | null;
}

export const AuthProvider = ({ children, initialUser }: AuthProviderProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const [user, setUser] = useState<_user | null>(initialUser);
  const [loading, setLoading] = useState(false);

  const hasFetched = useRef(false);

  const fetchUser = async () => {
    if (hasFetched.current) return;

    setLoading(true);
    try {
      const response = await authAxiosFetch.get("/auth/current-user");
      const data = response.data.data;
      setUser(data);
      setUserData(data);
      hasFetched.current = true;
    } catch (error: unknown) {
      setUser(null);
      toast.error("Failed to fetch user");
      if (!["/login", "/signup"].includes(pathname)) {
        router.push("/login");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!["/login", "/signup"].includes(pathname) && !initialUser) {
      fetchUser();
    }
  }, [initialUser]);

  const refreshUser = async () => {
    if (initialUser) {
      setUser(initialUser);
      return;
    }

    hasFetched.current = false;
    await fetchUser();
  };

  const hardRefreshUser = async () => {
    setLoading(true);
    try {
      const response = await authAxiosFetch.get("/auth/current-user");
      const data = response.data.data;
      setUser(data);
      setUserData(data);
    } catch (error: unknown) {
      setUser(null);
      toast.error("Failed to fetch user");
      if (!["/login", "/signup"].includes(pathname)) {
        router.push("/login");
      }
    } finally {
      setLoading(false);
    }
  };

  const isLoggedIn = !!user;

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        loading,
        refreshUser,
        hardRefreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};

export default AuthProvider;
