type TextProps = {
  text: string;
};

export const trimWhiteSpace = ({ text }: TextProps) => {
  return text.trim();
};
