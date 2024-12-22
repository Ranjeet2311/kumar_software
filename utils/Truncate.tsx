type TruncateProps = {
  text: string;
  maxLength: number;
};

export const truncateText = ({ text, maxLength }: TruncateProps) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + "...";
};
