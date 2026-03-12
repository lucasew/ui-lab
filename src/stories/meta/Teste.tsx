/**
 * A minimalistic testing component used for rapid sanity checks and meta-stories.
 * Exposes a single `item` prop to demonstrate component prop injection and rendering.
 *
 * @param {string} [item="world"] - Optional string inserted directly into the h1 greeting.
 */
export const Teste = ({ item = "world" }: { item?: string }) => {
  return <h1>Hello, {item}</h1>;
};
