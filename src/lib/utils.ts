import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

let idCounter = 0
export function useId(prefix = 'ui'): string {
  return `${prefix}-${++idCounter}`
}
