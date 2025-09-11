export const clearTranslation = (s?: string | null) =>
  (s ?? "").trim().replace(/[.!?]+$/, "");
