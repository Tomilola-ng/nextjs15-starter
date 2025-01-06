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
