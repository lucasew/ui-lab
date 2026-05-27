import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges and dynamically constructs Tailwind CSS classes.
 *
 * Uses `clsx` to evaluate conditional class definitions, then deduplicates
 * and resolves Tailwind-specific class conflicts via `tailwind-merge`.
 * Crucial for shadcn-svelte components to override default utility styles safely.
 *
 * @param inputs - An array of standard class names, conditional class objects, or nested arrays.
 * @returns A deduplicated string of tailwind classes suitable for the HTML class attribute.
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

/**
 * Strips the `child` prop from a given type.
 * Useful when explicitly disallowing snippets/slots named "child" in Svelte 5 component prop definitions.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, 'child'> : T;

/**
 * Strips the `children` prop from a given type.
 * Typically used in primitive component wrappers to prevent passing default children
 * where only specific slots or internal layout are expected.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, 'children'> : T;

/**
 * Convenience type that guarantees neither `child` nor `children` snippet props exist on `T`.
 */
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;

/**
 * Augments standard HTML attributes with a bindable `ref` property.
 * Essential for Svelte 5 shadcn components to forward the underlying DOM node to parent consumers.
 *
 * @typeParam T - The base attributes object.
 * @typeParam U - The specific HTML element type being forwarded (defaults to `HTMLElement`).
 */
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };
