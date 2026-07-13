const typography = {
  // Escala Tipográfica mapeada a sus archivos fuentes nativos
  displayLarge: {
    fontSize: 32,
    lineHeight: 40,
    fontFamily: "HankenGrotesk-Bold",
  },
  headlineLarge: {
    fontSize: 24,
    lineHeight: 32,
    fontFamily: "HankenGrotesk-Bold",
  },
  headlineMedium: {
    fontSize: 20,
    lineHeight: 28,
    fontFamily: "HankenGrotesk-SemiBold",
  },
  titleLarge: {
    fontSize: 18,
    lineHeight: 24,
    fontFamily: "HankenGrotesk-SemiBold",
  },
  titleMedium: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "HankenGrotesk-Medium",
  },
  bodyLarge: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "HankenGrotesk-Regular",
  },
  bodyMedium: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "HankenGrotesk-Regular",
  },
  labelLarge: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "HankenGrotesk-SemiBold",
  },
  labelMedium: {
    fontSize: 11,
    lineHeight: 14,
    fontFamily: "HankenGrotesk-Medium",
  },
};

const spacing = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  marginHorizontal: 20,
  gutter: 16,
  appBarHeight: 54,
  bottomNavHeight: 72,
};

export const themes = {
  light: {
    dark: false,
    colors: {
      // Identidad y Primarios
      primary: "#003366",
      primaryFixed: "#003366", // Azul Marp
      onPrimary: "#FFFFFF",
      primaryMuted: "#0033661A", // Azul Marp (10% opacidad)

      // Semánticos
      success: "#2E7D32", // Verde Ahorro
      onSuccess: "#FFFFFF",
      successContainer: "#2E7D321F", // Verde (12% opacidad)

      warning: "#F9A825", // Naranja Alerta
      onWarning: "#000000",
      warningContainer: "#F9A82526", // Naranja (15% opacidad)

      error: "#D32F2F", // Rojo Peligro
      onError: "#FFFFFF",

      // Superficies y Fondos
      background: "#F8F9FF",
      onBackground: "#1A1C20", // Texto sobre fondo general

      surface: "#FFFFFF", // Tarjetas, Modales
      onSurface: "#1A1C20", // Texto principal sobre tarjetas

      surfaceVariant: "#0033661A", // Inputs, ítems secundarios
      onSurfaceVariant: "#5C5E64", // Texto secundario / muted sobre variantes

      surfaceDisabled: "#0000000D", // 5% opacidad
      onSurfaceDisabled: "#00000061", // Texto deshabilitado (38% aprox)

      // Texto Específico
      textMain: "#1A1C20",
      textMuted: "#5C5E64",
      textInverse: "#FFFFFF",

      // Bordes y Elevación
      border: "#DCE2F1",
      outline: "#00336633", // 20% opacidad
      shadow: "#00336614", // 8% opacidad
    },
    typography,
    spacing,
    roundness: 8,
  },
  dark: {
    dark: true,
    colors: {
      // Identidad y Primarios
      primary: "#A7C8FF",
      primaryFixed: "#003366", // Azul Marp
      onPrimary: "#FFFFFF",
      primaryMuted: "#BCC2FF26", // 15% opacidad

      // Semánticos
      success: "#4CAF50",
      onSuccess: "#000000",
      successContainer: "#4CAF5033", // 20% opacidad

      warning: "#FFB74D",
      onWarning: "#000000",
      warningContainer: "#FFB74D33", // 20% opacidad

      error: "#EF5350",
      onError: "#000000",

      // Superficies y Fondos (Azul Nocturne)
      background: "#111318",
      onBackground: "#E2E2E6",

      surface: "#1A1C20",
      onSurface: "#E2E2E6",

      surfaceVariant: "#2D3036",
      onSurfaceVariant: "#C6C6CA",

      surfaceDisabled: "#FFFFFF14", // 8% opacidad
      onSurfaceDisabled: "#FFFFFF61", // 38% opacidad

      // Texto Específico
      textMain: "#E2E2E6",
      textMuted: "#C6C6CA",
      textInverse: "#FFFFFF",

      // Bordes y Elevación
      border: "#44474E",
      outline: "#BCC2FF4D", // 30% opacidad
      shadow: "#0000004D", // 30% opacidad
    },
    typography,
    spacing,
    roundness: 8,
  },
};
