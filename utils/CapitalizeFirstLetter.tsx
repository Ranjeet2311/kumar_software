type TextProps = {
  text: string;
};

export const capitalizeFirstLetter = ({ text }: TextProps) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
