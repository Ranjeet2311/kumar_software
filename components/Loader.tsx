import { HStack, Spinner } from "@chakra-ui/react";

type LoaderProp = { size?: string; message?: string; color?: string };

export default function Loader({ size, message, color }: LoaderProp) {
  return (
    <>
      <Spinner color={!color ? "grey.700" : color} size="md" />{" "}
      <span className="ms-2"> {message} </span>
    </>
  );
}
