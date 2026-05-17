// Themes/theme.ts
import { createTheme } from "@shopify/restyle";

const palette = {
  // 🎨 Primary Colors (orange — food app ke liye)
  primaryOrange: "#FF7622",
  primaryOrangeDark: "#E55F00",

  // ⚫ Neutrals
  black: "#1A1A1A",
  darkGray: "#4A4A4A",
  mediumGray: "#646982",
  lightGray: "#F5F5F5",
  borderGray: "#E0E0E0",
  white: "#FFFFFF",

  // ✅ Semantic
  success: "#4CAF50",
  error: "#F44336",
  warning: "#FFC107",

  // 🌑 Dark Mode
  darkBackground: "#121212",
  darkCard: "#1E1E1E",
  darkText: "#F5F5F5",
};

const theme = createTheme({
  // ━━━━━━━━━━━━━━━━━━━━━━━━
  // 1️⃣ COLORS
  // ━━━━━━━━━━━━━━━━━━━━━━━━
  colors: {
    ...palette,
    // Semantic names jo components mein use karein
    mainBackground: palette.white,
    cardBackground: palette.white,
    primaryButton: palette.primaryOrange,
    primaryButtonText: palette.white,
    bodyText: palette.black,
    bodyText2: palette.white,
    subText: palette.mediumGray,
    inputBorder: palette.borderGray,
    inputBackground: palette.lightGray,

    // ✅ YE ADD KARO — Status Bar colors
    statusBarOrange: "#FF6B00", // Splash screens
    statusBarWhite: "#FFFFFF", // Light screens
    statusBarDark: "#1A1A1A", // Dark screens
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━
  // 2️⃣ SPACING (padding/margin ke liye)
  // ━━━━━━━━━━━━━━━━━━━━━━━━
  spacing: {
    xs: 4, // extra small
    s: 8, // small
    m: 16, // medium
    l: 25, // large
    xl: 32, // extra large
    xxl: 63, // 2x large
    xxxl: 114,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━
  // 3️⃣ TEXT VARIANTS
  // ━━━━━━━━━━━━━━━━━━━━━━━━
  textVariants: {
    defaults: {
      fontFamily: "Sen_400Regular", // ← Default font
      color: "bodyText",
    },
    heading1: {
      fontFamily: "Sen_800ExtraBold",
      fontSize: 24,
      color: "bodyText",
    },
    heading2: {
      fontFamily: "Sen_700Bold",
      fontSize: 30,
      color: "bodyText2",
    },
    heading3: {
      fontFamily: "Sen_600SemiBold",
      fontSize: 18,
      color: "bodyText",
    },
    body: {
      fontFamily: "Sen_400Regular",
      fontSize: 14,
      color: "bodyText",
    },
    bodyMedium: {
      fontFamily: "Sen_500Medium",
      fontSize: 16,
      color: "bodyText",
    },
    bodySmall: {
      fontFamily: "Sen_400Regular",
      fontSize: 12,
      color: "subText",
    },
    button: {
      fontFamily: "Sen_700Bold",
      fontSize: 16,
      color: "primaryButtonText",
    },
    label: {
      fontFamily: "Sen_500Medium",
      fontSize: 13,
      color: "subText",
    },
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━
  // 4️⃣ BORDER RADIUS
  // ━━━━━━━━━━━━━━━━━━━━━━━━
  borderRadii: {
    s: 4,
    m: 8,
    l: 12,
    xl: 16,
    xxl: 24,
    full: 999,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━
  // 5️⃣ BREAKPOINTS (optional)
  // ━━━━━━━━━━━━━━━━━━━━━━━━
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export type Theme = typeof theme;
export default theme;
