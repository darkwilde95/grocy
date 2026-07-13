import { themes } from "./theme";

export type AppTheme = typeof themes.light;

export type Color =
  | "primary"
  | "onPrimary"
  | "primaryFixed"
  | "success"
  | "onSuccess"
  | "warning"
  | "onWarning"
  | "error"
  | "onError"
  | "surface"
  | "onSurface"
  | "surfaceVariant"
  | "onSurfaceVariant"
  | "surfaceDisabled"
  | "onSurfaceDisabled";

export type MainColor =
  | "primary"
  | "primaryFixed"
  | "success"
  | "warning"
  | "error"
  | "surface"
  | "surfaceVariant"
  | "surfaceDisabled";

export type OnColor<S extends string = MainColor> = `on${Capitalize<S>}`;
