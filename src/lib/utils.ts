import {type ClassValue, clsx} from 'clsx';
import {twMerge} from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToASCII(inputString: string) {
  const asciiString = inputString.replace(/[^\x00-\x7F]/g, '');
  return asciiString;
}
