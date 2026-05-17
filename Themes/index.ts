// Themes/index.ts
import { createBox, createText, useTheme } from "@shopify/restyle";
import { Theme } from "./theme";

// Ye 2 components Restyle ke main components hain
// View ki jagah Box use karenge
// Text ki jagah RestyleText use karenge
export const Box = createBox<Theme>();
export const Text = createText<Theme>();

// Theme ko hooks se access karne ke liye
export { useTheme };
export type { Theme };
