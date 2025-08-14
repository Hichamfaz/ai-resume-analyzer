import type { ClassValue } from "clsx";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Converts bytes to a human-readable string with appropriate units (B, KB, MB, GB)
 * @param bytes - The number of bytes to format
 * @returns A human-readable string representation of the file size
 */
export function formatSize(bytes: number): string {
  if (bytes < 0) {
    throw new Error('Bytes cannot be negative');
  }

  if (bytes < 1024) {
    return `${bytes} B`;
  } else if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(2)} KB`;
  } else if (bytes < 1024 * 1024 * 1024) {
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  } else {
    return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
  }
}

export const generateUUID = () => crypto.randomUUID

export function cn(...inputs:ClassValue[]){
  return twMerge(clsx(inputs))
}