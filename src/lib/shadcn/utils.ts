import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * A utility function that merges overlapping Tailwind classes properly.
 * It uses clsx for conditional class applying and tailwind-merge to avoid conflicting classes.
 * Useful when allowing component consumers to override default tailwind styles without breaking them.
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

/**
 * Removes the 'child' prop from a type if it exists.
 * Used internally by Shadcn Svelte UI primitives to manage strict composition where child snippets or generic children are not expected.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, 'child'> : T;

/**
 * Removes the 'children' prop from a type if it exists.
 * Used to enforce that a primitive or component does not accept a generic `<slot />` or snippets when it acts as an end-leaf node.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, 'children'> : T;

/**
 * Removes both 'child' and 'children' props from a given component prop type.
 * Useful for building controlled form elements (like Switch, Input) which should not wrap other elements.
 */
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;

/**
 * Augments a component prop type with a strongly-typed HTMLElement reference (`ref`).
 * Crucial for exposing Svelte 5 component bindings so parent contexts can access the underlying DOM node directly.
 */
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };
