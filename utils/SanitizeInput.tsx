import xss from "xss";

export const sanitizeInput = (text: string) => {
  return text ? xss(text.replace(/\s+/g, " ").trim()) : "";
};
