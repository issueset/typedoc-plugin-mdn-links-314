import type { VirtualElement } from "@floating-ui/dom";

/**
 * @public
 *
 * Print the element
 */
export function printElement(element: HTMLElement): void {
  console.log(element);
}

/**
 * @public
 *
 * Print the virtual element
 */
export function printVirtualElement(element: VirtualElement): void {
  console.log(element);
}
