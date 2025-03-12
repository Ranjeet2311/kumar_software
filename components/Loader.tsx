import { HStack, Spinner } from "@chakra-ui/react";

export default function Loader({ size }: { size?: string }) {
  return (
    <HStack gap="5">
      <Spinner size="md" />
    </HStack>
  );
}
