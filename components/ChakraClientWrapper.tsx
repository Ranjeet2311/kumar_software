"use client";

import { ReactNode } from "react";
import "@/i18n/i18.client"; //can't be added in rootlayout bcus of ssr
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

interface ChakraClientWrapperProps {
  children: ReactNode;
}

export default function ChakraClientWrapper({
  children,
}: ChakraClientWrapperProps) {
  return <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>;
}
