import React, { useEffect, useState } from "react";
import { Alert, Stack, useStatStyles } from "@chakra-ui/react";

type AlertProps = {
  status?: "success" | "error" | "warning" | "info";
  message?: string;
};

export default function AlertMessage({ status, message }: AlertProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {show && (
        <Alert.Root
          status={status}
          style={{ padding: "12px", fontSize: "16px" }}
        >
          <Alert.Indicator />
          <Alert.Title>{message}</Alert.Title>
        </Alert.Root>
      )}
    </>
  );
}
