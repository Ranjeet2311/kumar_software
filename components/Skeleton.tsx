"use client";

import { HStack, Stack } from "@chakra-ui/react";

export default function Skeleton() {
  return (
    <div>
      <HStack gap="5">
        <Stack flex="1">
          <Skeleton />
        </Stack>
      </HStack>
    </div>
  );
}
