import { format, formatDistanceToNow, subDays } from "date-fns";

export const formatTime = (time: string) => {
  const date = new Date(time);
  // return formatDistance(new Date(time), "dd/MM/yyyy");

  // return (
  //   formatDistanceToNow(new Date(time), { addSuffix: true }) +
  //   format(new Date(time), "hh:mm a/dd/MM/yyyy")
  // );

  return `${formatDistanceToNow(date, { addSuffix: true })}, at ${format(
    date,
    "HH:mm"
  )}`;
};
