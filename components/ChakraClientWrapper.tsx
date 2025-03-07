// components/ChakraClientWrapper.tsx
"use client"; // This is a client-side component

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ReactNode } from "react";
// import { extendTheme } from "@chakra-ui/react";

// Use it later for customization of theme
// const chakraTheme = extendTheme({
//   colors: {
//     primary: {
//       100: "#E3F2FD",
//       500: "#2196F3", // Main blue color
//       900: "#0D47A1",
//     },
//   },
//   components: {
//     Button: {
//       baseStyle: {
//         borderRadius: "8px",
//       },
//     },
//   },
// });

interface ChakraClientWrapperProps {
  children: ReactNode;
}

export default function ChakraClientWrapper({
  children,
}: ChakraClientWrapperProps) {
  return <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>;
}
