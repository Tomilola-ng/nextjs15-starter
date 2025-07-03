import { _siteConfig } from "../config/site";

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function _formatNumberToMoney(number: number) {
  return Intl.NumberFormat("en-US").format(number);
}

export default function _slugify(str: string) {
  str = str.replace(/^\s+|\s+$/g, "");
  str = str.toLowerCase();
  str = str
    .replace(/[^a-z0-9 -]/g, "-")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
  return str;
}

export const _handleShare = (path: string) => {
  if (navigator.share) {
    navigator.share({
      url: _siteConfig.domain + path,
    });
  }
};

export function validatePassword(password: string, confirmPassword: string) {
  if (password !== confirmPassword) {
    return "Passwords do not match";
  }
  if (password.length < 8) {
    return "Password must be at least 8 characters";
  }
  if (!/[A-Z]/.test(password)) {
    return "Password must contain at least one uppercase letter";
  }
  if (!/[a-z]/.test(password)) {
    return "Password must contain at least one lowercase letter";
  }
  if (!/\d/.test(password)) {
    return "Password must contain at least one number";
  }
  if (!/\W/.test(password)) {
    return "Password must contain at least one special character";
  }
  return null;
}

export const generateRandomString = (length: number) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const timeOfDay: () => string = () => {
  "use client";
  const hour = new Date().getHours();
  const isEvening = hour >= 18 || hour <= 6;
  if (isEvening) return "Evening";
  return hour < 12 ? "Morning" : "Afternoon";
};
