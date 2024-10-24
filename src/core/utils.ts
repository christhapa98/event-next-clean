import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const appendFormData = (obj: Record<string, any>): FormData => {
  const formData = new FormData();
  for (const key in obj) {
      if (Object.hasOwn(obj, key)) {
          formData.append(key, obj[key]);
      }
  }
  return formData;
};