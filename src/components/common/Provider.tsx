"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SocialAutoLinkProvider } from "@/context/SocialAutoLinkContext";
export default function Providers({ children }: { children: React.ReactNode }) {
  const client = new QueryClient();

  return (
    <>
      <QueryClientProvider client={client}>
        <SocialAutoLinkProvider>{children}</SocialAutoLinkProvider>
      </QueryClientProvider>
    </>
  );
}
