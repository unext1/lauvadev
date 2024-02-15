import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const filteredSearchParams = (params: Record<string, string | number | null | undefined>) => {
  return new URLSearchParams(
    Object.fromEntries(
      Object.entries(params)
        .filter(([_, v]) => v)
        .map(([k, v]) => [k, v!.toString()])
    )
  ).toString();
};
